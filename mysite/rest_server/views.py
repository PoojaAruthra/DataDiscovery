from django.db.models import query, Prefetch
from django.shortcuts import render, get_object_or_404
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.views import APIView


from datetime import datetime, timedelta
import pytz

from rest_server.models import Service, Tag, Product, Team, Role, Event,SiemensUser
from rest_server.serializers import StatisticsSerializer, ServiceSerializer, TagSerializer, ProductSerializer, TeamSerializer, RoleSerializer, EventSerializer,SiemensUserSerializer
from rest_framework import permissions, mixins, viewsets
from rest_framework.response import Response
from django.db.models import Q, Max
from rest_server import permissions as custom_permissions

from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from . import azure_access

# Create your views here.

class EventViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [custom_permissions.PostOnlyPermissions]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    
    # def get_queryset(self):
    #     if self.request.user.is_authenticated:
    #         queryset = Event.objects.filter(user = self.request.user)
    #     return queryset

class ProductViewSet(ModelViewSet):
    """
    API endpoint that allows products to be viewed.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    

class ServiceViewSet(ModelViewSet):
    """
    API endpoint that allows services to be viewed.
    """

    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    

    def get_queryset(self):
        search_string = self.request.query_params.get('search', None)
        print(search_string)
        if search_string is not None:
            print(search_string)
            if search_string.find('>')>0 and search_string.count('>')==1:
                split_search = search_string.split('>')
                tag_name = split_search[1]
                tag_type = split_search[0]
                queryset = Service.objects.filter(
                    Q(tags__type__iexact = tag_type) &
                    Q(tags__name__iexact=tag_name)
                ).distinct().order_by('-is_recommended','name')
            else:
                queryset = Service.objects.filter(
                    Q(name__contains=search_string)|
                    Q(description__contains=search_string)|
                    Q(tags__name__contains=search_string)
                ).distinct().order_by('-is_recommended','name')
        else:
            recommendation_score = Max('recommendations__score', filter=Q(recommendations__created__gt = datetime.now(pytz.utc)-timedelta(days = 1000)) & Q(recommendations__person__gid = 'z004hd0p'))
            queryset = Service.objects.annotate(rscore =recommendation_score).all().order_by('-rscore', '-is_recommended')


        return queryset.prefetch_related('tags', 'recommendations')


class TagViewSet(ModelViewSet):
    """
    API endpoint that allows views to be viewed.
    """
    queryset = Tag.objects.all().order_by('type')
    serializer_class = TagSerializer
    


class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class RoleViewSet(ModelViewSet):
    serializer_class = RoleSerializer
    

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        print(self.request.user)
        if self.request.user.is_authenticated:
            queryset = Role.objects.filter(user = self.request.user)
        else:
            queryset = Role.objects.all()
        return queryset



class ImageView(mixins.ListModelMixin,viewsets.GenericViewSet):
    permission_classes = [permissions.IsAuthenticated, custom_permissions.IsStaffOrReadOnly]
    def post(self, request):
        print(request, request.data, request.FILES)
        id = request.data.get('id')
        type = request.data.get('type')

        file = request.FILES['image']
        file_name = file.name
        file_ending = file_name.split('.')[-1]

        
        if type == 'service':
            queryset = Service.objects.filter(id = id)
        elif type == 'product':
            queryset = Product.objects.filter(id = id)
        else:
            return Response('FAILURE')

        if queryset.exists():
            print('Found Queryset for File upload', queryset.first())
            image_name = id + '.' + file_ending.lower()
            print('Image Name:', image_name)
            queryset.update(image_name = image_name)
            azure_access.upload_file(file, image_name)
            return Response('SUCCESS')
        else:
            return Response('FAILURE')

class StatisticView(mixins.RetrieveModelMixin, viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    #@method_decorator(cache_page(60*60*2))  
    def retrieve(self, request, pk=None):
        search_string = self.request.query_params.get('type', 'Empty')
        if search_string is not None:
            print(search_string)

        queryset = Service.objects.all()
        service = get_object_or_404(queryset, pk=pk)
        serializer = StatisticsSerializer(service)

        return Response(serializer.data)

class setUserData(mixins.ListModelMixin,viewsets.GenericViewSet):
    serializer_class = SiemensUserSerializer
    
    # queryset = SiemensUser.objects.all()
     print(request.user)
    
    def post(self,request):
        print(self.request.user)
        if self.request.user.is_authenticated:
            queryset = SiemensUser.objects.filter(username = self.request.user.username)
        else:
            queryset = SiemensUser.objects.all()
        print(queryset)
        return Response(queryset)

    def perform_create(self, serializer):
        print("aaa")
        serializer.save(username=self.request.user.username)

    # def perform_update(self, serializer):
    #     serializer.save(username=self.request.user.username)




    
    
        
    