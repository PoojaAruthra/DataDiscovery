from django.test import TestCase
from django.test.client import encode_multipart
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate
from rest_server.models import SiemensUser, Tag
from rest_server.views import TagViewSet
import json


# class Tag(models.Model):
#     id = models.UUIDField(default=uuid.uuid4, primary_key=True)
#     type = models.CharField(max_length= 20)
#     name = models.CharField(max_length= 100)

class TagsTest(TestCase):
    def setUp(self) -> None:
        self.factory =  APIRequestFactory()
        self.regular_user = SiemensUser.objects.create(username = 'User_Username', password = 'Pass', given_name = 'User_given_name', family_name = 'User_family_name')
        self.example_tag = Tag.objects.create(name='ProductName', type='Product')
        self.fields = ['name', 'type']
        self.url_strub = '/api/tags/'
        
    
    def test_list_status(self):
        request = self.factory.get(self.url_strub)
        force_authenticate(request, user=self.regular_user)
        view = TagViewSet.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, 200)
    
    def test_list_anonymous(self):
        # Anonymous users may not access api
        request = self.factory.get(self.url_strub)
        force_authenticate(request)
        view = TagViewSet.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, 401)

    def test_detail(self):
        id = self.example_tag.id
        request = self.factory.get(self.url_strub + f'{id}/')
        force_authenticate(request, user=self.regular_user)
        view = TagViewSet.as_view({'get':'retrieve'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.get('name', ''), 'ProductName')
        self.assertEqual(response.data.get('type', ''), 'Product')
        for field in self.fields:
            self.assertTrue(field in response.data)

    def test_post_status(self):
        request = self.factory.post(self.url_strub, json.dumps({'name':'Product2Name', 'type': 'Product'}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = TagViewSet.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 201)

    def test_post_incomplete_data(self):
        request = self.factory.post(self.url_strub, json.dumps({'name':'ProductName'}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = TagViewSet.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 400)

    def test_post_anonymous(self):
        request = self.factory.post(self.url_strub, json.dumps({'name':'Product2Name', 'type': 'Product'}), content_type = 'application/json')
        force_authenticate(request)
        view = TagViewSet.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 401)

    def test_put(self):
        id = self.example_tag.id
        request = self.factory.put(self.url_strub + f'{id}/', json.dumps({'name':'Product3Name', 'type': 'Product'}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = TagViewSet.as_view({'put':'update'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 200)

    def test_delete(self):
        id = self.example_tag.id
        request = self.factory.delete(self.url_strub + f'{id}/')
        force_authenticate(request, user=self.regular_user)
        view = TagViewSet.as_view({'delete':'destroy'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 204)

