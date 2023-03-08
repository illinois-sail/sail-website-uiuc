# from rest_framework import serializers
# from .models import Student, Teacher, Follower

# class StudentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Student
#         fields = (
#             # 'email', 'first_name', 'last_name', 'role',
#         #  'signed_participant_form', 'signed_photo_form', 
#          'gender_identification', 'shirt_size', 'home_city', 'home_zip_code', 'high_school', 
#          'year_in_school', 'phone_number', 'parent_name', 'parent_phone_number', 'parent_email', 
#          'dietary_restrictions', 'home_state', 'admitted_student', 'signed_medical_form')

from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
SailUser = get_user_model()

class StudentSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = SailUser
        fields = (
            'email'
            # 'email', 'first_name', 'last_name',
            #  'role',
        #  'signed_participant_form', 'signed_photo_form', 
        )