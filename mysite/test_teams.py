import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

import django

django.setup()

from django.utils import timezone
from rest_server.models import *
from datetime import timedelta
import traceback


# print(Role.objects.all())
# print(SiemensUser.objects.all())

# johannes = SiemensUser.objects.get(given_name = 'Johannes')
# digiplm = Team.objects.get(name = 'DigiPLM')

# role = Role.objects.create(team = digiplm, user=johannes, type = 'SCRUM_MASTER')
# role.save()

import requests

url = 'http://md2qjyzc:8080/api'

# r = requests.post(url + '/teams/', data = {'name': '__Team__'})
# print(r.json())

# r = requests.get(url + '/teams/')
# print(r.json())

# r = requests.post(url + '/roles/', 
# data = {'type': 'ARCHITECT', 'team': {'id': 'f0494661-5a05-491e-a19e-ef52095a1127', 'name': 'DigiPLM'}, 'user': 'd9VvIpKPP7dnPE8c8Nq0ot1m_ck'})
# print(r.json())

# r = requests.get(url + '/roles/')
# print(r.json())

from rest_server.serializers import *
role = Role.objects.filter(id = 'fae483f0-f09c-41c5-9726-a069e5911a47').first()
serializer = RoleSerializer(instance = role)
print(serializer.data)