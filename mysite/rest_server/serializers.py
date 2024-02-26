from time import time
from rest_framework import serializers
from rest_server.models import Service, Tag, Product, Team, Role, Event, Recommendation
import uuid
from . import azure_access
from . import insight_quality

from datetime import datetime, timedelta
import pytz
import polars as pl


from PIL import Image
from io import BytesIO
import base64

def monthly_unique_users(df: pl.DataFrame):
    all_months = pl.date_range(low=datetime(2022, 1, 1), high=datetime(2022, 12, 1), interval="1mo", name="time", time_unit='ms').to_frame()
    monthly_average = df.groupby_dynamic('time', every = '1mo').agg(pl.col('user').n_unique().alias('user_count'))
    all_months = (all_months
    .join(monthly_average, on = 'time', how = 'left')
    .with_column(
        pl.col('user_count').fill_null(pl.lit(0))
        )
    )
    return all_months.to_dicts()


def monthly_unique_users_blank():
    all_months = pl.date_range(low=datetime(2022, 1, 1), high=datetime(2022, 12, 1), interval="1mo", name="time", time_unit='ms').to_frame()

    all_months = (all_months
    .with_column(
        pl.lit(0).alias('user_count')
        )
        
    )
    return all_months.to_dicts()


class StatisticsSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    data = serializers.SerializerMethodField()

    def get_data(self,instance:Service):
        raw_data = [{'user': event.user.gid, 'time': event.time} for event in Event.objects.filter(target = instance.id)]
        print(raw_data)
        if raw_data:
            df = pl.from_dicts(raw_data)        
            return monthly_unique_users(df)
        else:
            return monthly_unique_users_blank()

class EventSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    user = serializers.ReadOnlyField(source='user.username')
    
    class Meta:
        model = Event
        fields = ['id', 'type', 'user', 'target', 'time']

class TeamSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Team
        fields = ['id', 'name']



class RoleSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    team = serializers.SlugRelatedField(
        slug_field = 'name',
        queryset = Team.objects.all()
    )

    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Role
        fields = ['id', 'type', 'team', 'user']

    

class TagSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(default = uuid.uuid4) #serializers.ReadOnlyField() #U

    class Meta:
        model = Tag
        fields = ['id', 'type', 'name']


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    sas = serializers.SerializerMethodField()

    def get_sas(self, instance):
        return azure_access.create_sas()

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'sas', 'image_name']

class RecommendationSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Recommendation
        fields = ['id', 'created', 'reason', 'score']

class ServiceSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    tags = TagSerializer(many = True, required = False)
    sas = serializers.SerializerMethodField()
    tag_completeness_score = serializers.SerializerMethodField()
    tag_improvement_string = serializers.SerializerMethodField()
    recommendations = serializers.SerializerMethodField()

    queryset = Service.objects.prefetch_related('tags').prefetch_related('recommendations')

    def get_recommendations(self,instance):
        user_gid = 'z004hd0p'
        return RecommendationSerializer(Recommendation.objects.filter(service__id = instance.id, person__gid = user_gid,created__gt = datetime.now(pytz.utc)-timedelta(days = 30)), many = True, required = False).data

    

    def get_tag_completeness_score(self, instance):
        return insight_quality.get_tag_completeness_score(instance)

    def get_tag_improvement_string(self, instance):
        return insight_quality.create_improvement_string(instance)


    def get_sas(self, instance):
        return azure_access.create_sas()

    class Meta:
        model = Service
        fields = ['id', 'name', 'description', 'access_url', 'documentation_url', 'tags', 'is_recommended', 'sas', 'image_name', 'tag_completeness_score', 'tag_improvement_string', 'recommendations']

    
    def update(self, instance, validated_data):
        print(validated_data)
        instance.name = validated_data.get('name', '')
        instance.description = validated_data.get('description', '')
        instance.access_url = validated_data.get('access_url', '')
        instance.documentation_url = validated_data.get('documentation_url', '')
        instance.is_recommended = validated_data.get('is_recommended', False)
        
        tags = validated_data.get('tags', [])
        print(tags)
        instance.tags.clear()
        for tag_unordered_dict in tags:
            print(tag_unordered_dict)
            tag_data = dict(tag_unordered_dict)
            print(tag_data)
            tag_id = tag_data.get('id', '')
            print(tag_id)
            tag = Tag.objects.get(id = tag_id)
            print(tag)
            instance.tags.add(tag)
        print(instance.tags)    
        instance.save()
        return instance
    
    def create(self, validated_data):
        instance = Service.objects.create()
        instance.name = validated_data.get('name', '')
        instance.description = validated_data.get('description', '')
        instance.access_url = validated_data.get('access_url', '')
        instance.documentation_url = validated_data.get('documentation_url', '')
        instance.is_recommended = validated_data.get('is_recommended', False)
        instance.save()
        
        tags = validated_data.get('tags', [])
        print(tags)
        for tag_unordered_dict in tags:
            tag_data = dict(tag_unordered_dict)
            tag_id = tag_data.get('id', '')
            tag = Tag.objects.get(id = tag_id)
            instance.tags.add(tag)
        instance.save()
        return instance

