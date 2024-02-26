import os
from tokenize import String
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')
import django
django.setup()

from rest_server.models import Service, Tag, Event

from django.db import connection, reset_queries
import time
import functools

def query_debugger(func):

    @functools.wraps(func)
    def inner_func(*args, **kwargs):

        reset_queries()
        
        start_queries = len(connection.queries)

        start = time.perf_counter()
        result = func(*args, **kwargs)
        end = time.perf_counter()

        end_queries = len(connection.queries)

        print(f"Function : {func.__name__}")
        print(f"Number of Queries : {end_queries - start_queries}")
        print(f"Finished in : {(end - start):.2f}s")
        return result

    return inner_func

@query_debugger
def services_list():
    queryset = Service.objects.prefetch_related('tags', 'recommendations')
    for service in queryset:
        for tag in service.tags.all():
            print(tag.name)


services_list()