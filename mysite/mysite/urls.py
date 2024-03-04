"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from email.mime import base
from django.contrib import admin
from django.urls import path, include
import frontend
from rest_framework import routers
import rest_server.views

router = routers.DefaultRouter()
router.register(r'services', rest_server.views.ServiceViewSet, basename='Service')
router.register(r'tags', rest_server.views.TagViewSet, basename='Tag')
router.register(r'image', rest_server.views.ImageView, basename='Image')
router.register(r'products', rest_server.views.ProductViewSet, basename='Product')
router.register(r'teams', rest_server.views.TeamViewSet, basename='Team')
router.register(r'roles', rest_server.views.RoleViewSet, basename='Role')
router.register(r'events', rest_server.views.EventViewSet, basename='Event')
router.register(r'stats', rest_server.views.StatisticView, basename='Stat')


from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    #path('admin/', admin.site.urls),
    # path('oidc/', include('mozilla_django_oidc.urls')),
    path('api/', include((router.urls, 'myapp'), namespace='api'), name='api'),
    path('', include('frontend.urls'))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
