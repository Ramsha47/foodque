# Generated by Django 5.0.6 on 2024-06-05 13:36

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('profile_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_age', models.IntegerField()),
                ('user_weight', models.FloatField(help_text='Weight in kilograms')),
                ('user_height', models.FloatField(help_text='Height in inches')),
                ('user_goals', models.CharField(choices=[('LW', 'Lose Weight'), ('GW', 'Gain Weight'), ('MW', 'Maintain Weight'), ('IF', 'Improve Fitness')], default='IF', max_length=2)),
                ('user_exercise_level', models.CharField(choices=[('L', 'Low'), ('M', 'Medium'), ('A', 'Active')], default='M', max_length=1)),
                ('user_gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='home.users')),
            ],
        ),
        migrations.CreateModel(
            name='Meals',
            fields=[
                ('meal_id', models.AutoField(primary_key=True, serialize=False)),
                ('meal_name', models.CharField(max_length=255)),
                ('ingredient_list', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.users')),
            ],
        ),
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('feedback_id', models.AutoField(primary_key=True, serialize=False)),
                ('feedback', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='home.users')),
            ],
        ),
    ]