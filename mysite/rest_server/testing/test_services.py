from django.test import TestCase
from django.test.client import encode_multipart
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate
from rest_server.models import SiemensUser, Service, Tag
from rest_server.views import ServiceViewSet
import json


# class Service(models.Model):
#     id = models.UUIDField(default=uuid.uuid4, primary_key=True)
#     name = models.CharField(max_length= 100)
#     description = models.CharField(max_length=1000)
#     access_url = models.CharField(max_length=500)
#     documentation_url = models.CharField(max_length=500)
#     is_recommended = models.BooleanField(default=False)
#     image_name = models.CharField(max_length=50, default='')
#     tags = models.ManyToManyField(Tag, blank=True)


        # response.render()
        # print(response.content)

class ServicesTest(TestCase):
    def setUp(self) -> None:
        self.factory =  APIRequestFactory()
        self.regular_user = SiemensUser.objects.create(username = 'User_Username', password = 'Pass', given_name = 'User_given_name', family_name = 'User_family_name')

        self.example_tag = Tag.objects.create(name='ProductName', type='Product')
        self.example_tag_2 = Tag.objects.create(name='Product2Name', type='Product')
        self.example_service = Service.objects.create(name='ServiceName', description='ServiceDescription', access_url = ' ', documentation_url = ' ', is_recommended = False, image_name = '')
        self.example_service.tags.set([self.example_tag])
        self.fields = ['name', 'description', 'access_url', 'documentation_url', 'is_recommended', 'image_name', 'tags']
        self.url_strub = '/api/services/'
        self.view_set = ServiceViewSet
    
    def test_list_status(self):
        request = self.factory.get(self.url_strub)
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, 200)
    
    def test_list_anonymous(self):
        # Anonymous users may not access api
        request = self.factory.get(self.url_strub)
        force_authenticate(request)
        view = self.view_set.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, 401)

    def test_detail(self):
        id = self.example_service.id
        request = self.factory.get(self.url_strub + f'{id}/')
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'get':'retrieve'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.get('name', ''), 'ServiceName')
        self.assertEqual(response.data.get('description', ''), 'ServiceDescription')
        for field in self.fields:
            self.assertTrue(field in response.data)

    def test_post_status(self):
        request = self.factory.post(self.url_strub, json.dumps({'name':'Service2Name', 'description': 'Service2Description', 'access_url' : 'http://google.com', 'documentation_url' : 'http://google.com', 'is_recommended' : False}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 201)
    
    def test_post_incomplete(self):
        request = self.factory.post(self.url_strub, json.dumps({'name':'Service2Name', 'description': 'Service2Description', 'is_recommended' : False}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 400)

    def test_post_anonymous(self):
        request = self.factory.post(self.url_strub, json.dumps({'name':'Service2Name', 'description': 'Service2Description', 'access_url' : 'http://google.com', 'documentation_url' : 'http://google.com', 'is_recommended' : False}), content_type = 'application/json')
        force_authenticate(request)
        view = self.view_set.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 401)

    def test_post_status_tags(self):
        request = self.factory.post(self.url_strub, json.dumps({'name':'Service4Name', 'description': 'Service4Description', 'access_url' : 'http://google.com', 'documentation_url' : 'http://google.com', 'is_recommended' : False, 'tags': [{'id': str(self.example_tag_2.id), 'name':'X', 'type': 'X'}]}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 201)
        # Tag cannot be changed using Service interface
        self.example_tag_2.refresh_from_db()
        self.assertEqual(self.example_tag_2.name, 'Product2Name')

    def test_put_status(self):
        id = self.example_service.id
        request = self.factory.put(self.url_strub + f'{id}/', json.dumps({'name':'Service3Name', 'description': 'Service3Description', 'access_url' : 'http://google.com', 'documentation_url' : 'http://google.com'}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'put':'update'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 200)
 
    def test_delete(self):
        id = self.example_service.id
        request = self.factory.delete(self.url_strub + f'{id}/')
        force_authenticate(request, user=self.regular_user)
        view = self.view_set.as_view({'delete':'destroy'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 204)

    

    

    