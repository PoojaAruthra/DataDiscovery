from django.test import TestCase
from django.test.client import encode_multipart
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate
from rest_server.models import SiemensUser, Product
from rest_server.views import ProductViewSet
import json


# class Product(models.Model):
#     id = models.UUIDField(default=uuid.uuid4, primary_key=True)
#     name = models.CharField(max_length= 100)
#     description = models.CharField(max_length=1000)
#     image_name = models.CharField(max_length=50, default='', blank=True)

class ProductsTest(TestCase):
    def setUp(self) -> None:
        self.factory =  APIRequestFactory()
        self.regular_user = SiemensUser.objects.create(username = 'User_Username', password = 'Pass', given_name = 'User_given_name', family_name = 'User_family_name')
        self.example_product = Product.objects.create(name='Product', description='Test Product 1')
        self.fields = ['name', 'description', 'sas', 'image_name']
        
    
    def test_list_status(self):
        request = self.factory.get('/api/products/')
        force_authenticate(request, user=self.regular_user)
        view = ProductViewSet.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, 200)
    
    def test_list_anonymous(self):
        # Anonymous users may not access api
        request = self.factory.get('/api/products/')
        force_authenticate(request)
        view = ProductViewSet.as_view({'get':'list'})
        response = view(request)
        self.assertEqual(response.status_code, 401)

    def test_detail(self):
        id = self.example_product.id
        request = self.factory.get(f'/api/products/{id}/')
        force_authenticate(request, user=self.regular_user)
        view = ProductViewSet.as_view({'get':'retrieve'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.get('name', ''), 'Product')
        self.assertEqual(response.data.get('description', ''), 'Test Product 1')
        for field in self.fields:
            self.assertTrue(field in response.data)

    def test_post_status(self):
        request = self.factory.post('/api/products/', json.dumps({'name':'TestProduct', 'description': 'TestDescription'}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = ProductViewSet.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 201)

    def test_post_incomplete_data(self):
        request = self.factory.post('/api/products/', json.dumps({'name':'TestProduct'}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = ProductViewSet.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 400)

    def test_post_anonymous(self):
        request = self.factory.post('/api/products/', json.dumps({'name':'TestProduct', 'description': 'TestDescription'}), content_type = 'application/json')
        force_authenticate(request)
        view = ProductViewSet.as_view({'post':'create'})
        response = view(request)
        self.assertEqual(response.status_code, 401)

    def test_put(self):
        id = self.example_product.id
        request = self.factory.put(f'/api/products/{id}/', json.dumps({'name':'TestProduct', 'description': 'Test Product 2'}), content_type = 'application/json')
        force_authenticate(request, user=self.regular_user)
        view = ProductViewSet.as_view({'put':'update'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 200)
        self.example_product.refresh_from_db()
        self.assertEqual(self.example_product.description, 'Test Product 2')

    def test_delete(self):
        id = self.example_product.id
        request = self.factory.delete(f'/api/products/{id}/')
        force_authenticate(request, user=self.regular_user)
        view = ProductViewSet.as_view({'delete':'destroy'})
        response = view(request, pk=id)
        self.assertEqual(response.status_code, 204)



    