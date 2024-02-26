from django.test import TestCase
from django.test.client import encode_multipart
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate
from rest_server.models import SiemensUser, Event
from rest_server.views import EventViewSet
import json

class ServicesTest(TestCase):
    def setUp(self) -> None:
        self.factory =  APIRequestFactory()
        self.regular_user = SiemensUser.objects.create(username = 'User_Username', password = 'Pass', given_name = 'User_given_name', family_name = 'User_family_name')

        self.fields = ['id', 'user', 'type', 'time', 'target']
        self.url_strub = '/api/events/'
        self.view_set = EventViewSet

    def test_post_status(self):
        request = self.factory.post(self.url_strub, json.dumps({'target': '5a9f51ef-8dbd-4bb4-ab2a-e6ca754ea7ab', 'type': 'Y'}),content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 201)
        response.render()
        print(response.content)