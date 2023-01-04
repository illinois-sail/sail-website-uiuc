from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import SailUser, Teacher, Student, Follower

class SailUserCreationForm(UserCreationForm):
    first_name = forms.CharField()
    last_name = forms.CharField()

    class Meta:
        model = SailUser
        fields = ['email', 'first_name', 'last_name', 'password1', 'password2']

class SailUserUpdateForm(forms.ModelForm):
    first_name = forms.CharField()
    last_name = forms.CharField()

    class Meta:
        model = SailUser
        fields = ['email', 'first_name', 'last_name']  # TODO: allow logged-in users to change passwords (without using forgot password link)

class TeacherCreationForm(forms.ModelForm):
    class Meta:
        model = Teacher
        fields = ['major', 'year_in_school']
        exclude = ('user',)  # We exclude 'user' because we automatically associate this Teacher with a SailUser (see register_teacher() in views.py)

class StudentCreationForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['gender_identification', 'dietary_restrictions', 'shirt_size', 
                  'home_city', 'home_state', 'home_zip_code', 'high_school', 'year_in_school', 
                  'phone_number', 'parent_name', 'parent_phone_number',
                  'parent_email', 'admitted_student']
        help_texts = {
            'dietary_restrictions': "Describe any dietary restrictions you have. Leave blank if you don't have any.",
            'home_state': "Enter the two-letter abbreviation for your state, in all caps. Leave blank if not in the U.S."
        }
        exclude = ('user',) # We exclude 'user' because we automatically associate this Student with a SailUser (see register_student() in views.py)

class FollowerCreationForm(forms.ModelForm):
    class Meta:
        model = Follower
        fields = ['email', 'role']
        help_texts = {'email':"Your email will be added to our interest list, and we will send you any updates related to Sail!"}
        labels = {'role':"I am a"}