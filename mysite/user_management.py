import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

import django

django.setup()

from django.utils import timezone
from rest_server.models import *

benedikt = SiemensUser.objects.get(gid = 'z00399xr')
print(benedikt.family_name, benedikt.is_staff)


andreas = SiemensUser.objects.get(gid = 'Z000DUWN'.lower())
andreas.is_staff = True
andreas.save()

for user in SiemensUser.objects.all():
    print(user.family_name, user.is_staff)
