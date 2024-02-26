from django.shortcuts import render, redirect
from django.urls import reverse, resolve
import requests

from rest_server.models import Service


# Create your views here.

def index(request):
    response = redirect('/angular')
    return response

def angular(request):
    return render(request, 'angular.html')