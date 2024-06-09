from rest_framework import serializers
from home.models import Users, Profile, Meals, Feedback

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        managed = True
        fields = ['id', 'username', 'useremail', 'password']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        managed = True
        fields = ['profile_id', 'user', 'user_age', 'user_weight', 'user_height', 'user_goals', 'user_exercise_level', 'user_gender']

class MealsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meals
        managed = True
        fields = ['meal_id', 'user', 'meal_name', 'ingredient_list']

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        managed = True
        fields = ['feedback_id', 'user', 'meal', 'feedback']

