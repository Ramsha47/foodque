from django.urls import path
from . import views  # Import views from the same directory

urlpatterns = [
    path('', views.index, name='index'),  # Define the URL pattern for the home view
]
