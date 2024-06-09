from django.db import models
import logging

class Users(models.Model):
    
    username = models.CharField(max_length=50, unique=True)
    useremail = models.EmailField(verbose_name='email', max_length=255, unique=True)
    password = models.CharField(max_length=128)
    
    def save(self, *args, **kwargs):
        logger = logging.getLogger(__name__)
        if not self.pk:  # Check if the instance is being saved for the first time
            logger.info(f'New User ID: {self.id}')  # Print the newly assigned user_id
        super().save(*args, **kwargs)
    def __str__(self):
        return self.username

class Profile(models.Model):
    GOALS_CHOICES = [
        ('LW', 'Lose Weight'),
        ('GW', 'Gain Weight'),
        ('MW', 'Maintain Weight'),
        ('IF', 'Improve Fitness'),
    ]

    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]

    EXERCISE_LEVEL_CHOICES = [
        ('L', 'Low'),
        ('M', 'Medium'),
        ('A', 'Active'),
    ]

    profile_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    user_age = models.IntegerField()
    user_weight = models.FloatField(help_text="Weight in kilograms")
    user_height = models.FloatField(help_text="Height in inches")
    user_goals = models.CharField(max_length=2, choices=GOALS_CHOICES, default='IF')
    user_exercise_level = models.CharField(max_length=1, choices=EXERCISE_LEVEL_CHOICES, default='M')
    user_gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    def __str__(self):
        return f"{self.user.username}'s Profile"

class Meals(models.Model):
    meal_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    meal_name = models.CharField(max_length=255)
    ingredient_list = models.TextField()

    def __str__(self):
        return self.meal_name

class Feedback(models.Model):
    feedback_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    meal = models.ForeignKey(Meals, on_delete=models.CASCADE, default=1)
    feedback = models.TextField()

    def __str__(self):
        return f"Feedback from {self.user.username} for {self.meal.meal_name}"
