import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

import django

django.setup()

from django.utils import timezone
from rest_server.models import *

for event in Event.objects.filter(target = '56f57c2b-fb2d-4754-881b-e932562fba90'):
    print(event.time)