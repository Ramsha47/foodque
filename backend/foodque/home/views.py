from django.shortcuts import render
from .models import Users, Meals, Profile, Feedback
from .api.serializers import UserSerializer, ProfileSerializer, MealsSerializer, FeedbackSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.hashers import check_password  # Import to check hashed passwords

def index(request):
    return HttpResponse("Hello, world.")

@api_view(['GET', 'POST'])
def RegisteredUsers_list(request):
    if request.method == 'GET':
        registerusers = Users.objects.all()
        serializer = UserSerializer(registerusers, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def UsersProfile_list(request):
    if request.method == 'GET':
        usersprofile = Profile.objects.all()
        serializer = ProfileSerializer(usersprofile, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def Meals_list(request):
    if request.method == 'GET':
        recommendedMeals = Meals.objects.all()
        serializer = MealsSerializer(recommendedMeals, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        serializer = MealsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def Feedback_list(request):
    if request.method == 'GET':
        recommendedMeals = Feedback.objects.all()
        serializer = FeedbackSerializer(recommendedMeals, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signup_user(request):
    username = request.data.get('username')
    useremail = request.data.get('useremail')
    password = request.data.get('password')
    # Debug print statements
    print(f"Received data: username={username}, useremail={useremail}, password={password}")

    if Users.objects.filter(username=username).exists():
        return Response({'message': 'Username already taken'}, status=status.HTTP_200_OK)
    if Users.objects.filter(useremail=useremail).exists():
        return Response({'message': 'Email already registered'}, status=status.HTTP_200_OK)

    user = Users.objects.create(username=username, useremail=useremail, password=password)
    user.save()
    return Response({'message': 'Your account is created. You can login now.'}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def login_user(request):
    useremail = request.data.get('useremail')
    password = request.data.get('password')
    
    try:
        user = Users.objects.get(useremail=useremail)
    except Users.DoesNotExist:
        return Response({'message': 'Invalid email or password'}, status=status.HTTP_200_OK)
    
    if user.password == password:  # If passwords are hashed, use check_password(password, user.password)
        return Response({'message': 'Login successful'}, status=status.HTTP_201_CREATED)
    else:
        return Response({'message': 'Invalid email or password'}, status=status.HTTP_200_OK)
