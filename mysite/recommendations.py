import os
from datetime import datetime, timedelta
import pytz
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
import django
from django.utils.timezone import now
django.setup()

from rest_server.models import Service, Tag, Event, Recommendation, SiemensUser

# r = Recommendation.objects.get(id = 'b1d11bbd-4795-46f4-9932-9ceeb35671cb')
# print(r)

# s = Service.objects.get(id = '24c4b840aebe48aaa24a6dd1530c3350')
# s.recommendations.add(r)
# s.save()
# print(s)



# u1 = SiemensUser.objects.get(gid = 'z00399xr')
# r1 = Recommendation.objects.create(person = u1, reason = 'Community|Role', score = 0.25)
# s1 = Service.objects.get(id = '24c4b840aebe48aaa24a6dd1530c3350')
# s1.recommendations.add(r1)

# print([recommendation.service for recommendation in Recommendation.objects.filter(person__gid = 'z00399xr')])
# print(Service.objects.filter(recommendation__person__gid = 'z00399xr', recommendation__created__gt = datetime.now(pytz.utc)-timedelta(days = 30)))

# from django.db.models import Max
# from django.db.models import Q
# services = Service.objects.annotate(rscore = Max('recommendations__score', filter=Q(recommendations__created__gt = datetime.now(pytz.utc)-timedelta(days = 30)))).all().order_by('-rscore')
# for service in services:
#     print(service.id, service.rscore)

print([(recommendation.id, recommendation.score, recommendation.created) for recommendation in Recommendation.objects.filter(person__gid = 'z00399xr')])
r = Recommendation.objects.get(id = 'b1d11bbd-4795-46f4-9932-9ceeb35671cb')
r.created = now()
r.save()