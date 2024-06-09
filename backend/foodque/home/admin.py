from django.contrib import admin
from .models import Users,Meals,Profile,Feedback

# Register your models here.
admin.site.register(Users)
admin.site.register(Profile)
admin.site.register(Meals)
admin.site.register(Feedback)
