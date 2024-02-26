from django.db import models
import uuid
from django.utils.timezone import now


from django.db.models.fields import BLANK_CHOICE_DASH
# Create your models here.

class Product(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length= 100)
    description = models.CharField(max_length=1000)
    image_name = models.CharField(max_length=50, default='', blank=True)


class Tag(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    type = models.CharField(max_length= 20)
    name = models.CharField(max_length= 100)

    def __str__(self):
        return self.type + ':' + self.name


class Recommendation(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    person = models.ForeignKey('SiemensUser', on_delete=models.RESTRICT)
    created = models.DateTimeField(default = now)
    reason = models.CharField(max_length = 50)
    score = models.FloatField(default = 0)


class Service(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length= 100)
    description = models.CharField(max_length=1000)
    access_url = models.CharField(max_length=500)
    documentation_url = models.CharField(max_length=500)
    is_recommended = models.BooleanField(default=False)
    image_name = models.CharField(max_length=50, default='', blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    recommendations = models.ManyToManyField(Recommendation, blank=True)

# Create your models here.
from django.contrib.auth.models import AbstractUser
import uuid

class SiemensUser(AbstractUser):
    username = models.CharField(primary_key= True, max_length=100)
    email = models.CharField(max_length=100)
    given_name = models.CharField(max_length=100)
    family_name = models.CharField(max_length=100)
    gid = models.CharField(max_length=20)
    org_code = models.CharField(max_length=100)
    is_staff = models.BooleanField(default= False)

    def __str__(self):
        return self.given_name + ' ' + self.family_name +  ' (' + self.org_code +')'

class Team(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    name = models.CharField(max_length = 30, unique= True)

class Role(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    ROLE_CHOICES = [
        ('PRODUCT_OWNER', 'Product Owner'),
        ('SCRUM_MASTER', 'Scrum Master'),
        ('DEVELOPER', 'Developer'),
        ('TESTER', 'Tester'),
        ('ARCHITECT', 'Architect')
    ]
    user = models.ForeignKey(SiemensUser, on_delete=models.RESTRICT)
    type = models.CharField(max_length = 30, choices = ROLE_CHOICES)
    team = models.ForeignKey(Team, on_delete=models.RESTRICT)

    def __str__(self):
        return f'{self.user.gid} is {self.type} in {self.team.name}'

class Event(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True)
    user = models.ForeignKey(SiemensUser, on_delete=models.RESTRICT)
    type = models.CharField(max_length = 30)
    target = models.UUIDField()
    time = models.DateTimeField(default=now, editable=False)
