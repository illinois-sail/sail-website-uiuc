from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from .managers import SailUserManager

# class SailUser(AbstractUser):
#     username = None
#     email = models.EmailField(_('email address'), unique=True)
#     first_name = models.CharField(max_length=128)
#     last_name = models.CharField(max_length=128)

#     USERNAME_FIELD = 'email'

#     TEACHER = 'Teacher'
#     STUDENT = 'Student'
#     STAFF = 'Staff'
#     ROLE_CHOICES = (
#         (TEACHER, 'Teacher'),
#         (STUDENT, 'Student'),
#         (STAFF, 'Staff')
#     )
#     role = models.CharField(max_length=10, 
#                             choices=ROLE_CHOICES, 
#                             null=True)
#     REQUIRED_FIELDS = ['first_name', 'last_name', 'role']
    
#     signed_participant_form = models.BooleanField(default=False)
#     signed_photo_form = models.BooleanField(default=False)

#     objects = SailUserManager()

#     def __str__(self):
#         return f'{self.first_name} {self.last_name}'

class SailUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(max_length=128)
    last_name = models.CharField(max_length=128)
    role = 'Student'
    USERNAME_FIELD = 'email'

    # REQUIRED FIELDS
    MALE = 'Male'
    FEMALE = 'Female'
    NON_BIN = 'Non_Binary'
    GENDER_ID_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
        (NON_BIN, 'Non-binary')
    )
    gender_identification = models.CharField(max_length=10, 
                                             choices=GENDER_ID_CHOICES, 
                                             default=MALE)

    XS = 'XS'
    S = 'S'
    M = 'M'
    L = 'L'
    XL = 'XL'
    SHIRT_SIZE_CHOICES = (
        (XS, 'XS'),
        (S, 'S'),
        (M, 'M'),
        (L, 'L'),
        (XL, 'XL')
    )
    shirt_size = models.CharField(max_length=5, 
                                  choices=SHIRT_SIZE_CHOICES,
                                  default=XS)

    home_city = models.CharField(max_length=50)
    home_zip_code = models.CharField(max_length=10)
    high_school = models.CharField(max_length=50)

    FRESHMAN = 'Freshman'
    SOPHOMORE = 'Sophomore'
    JUNIOR = 'Junior'
    SENIOR = 'Senior'
    YEAR_IN_SCHOOL_CHOICES = (
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
    )
    year_in_school = models.CharField(max_length=10,
                                      choices=YEAR_IN_SCHOOL_CHOICES,
                                      default=FRESHMAN)
    
    phone_number = models.CharField(blank=True, max_length=12)
    parent_name = models.CharField(max_length=100)
    parent_phone_number = models.CharField(blank=True, max_length=12)
    parent_email = models.EmailField(default='')

    # OPTIONAL FIELDS (specified with blank=True)
    dietary_restrictions = models.CharField(max_length=50, blank=True)
    home_state = models.CharField(max_length=2, blank=True)
    admitted_student = models.BooleanField(default=True)

    # FOR INTERNAL LOGISTICS
    # signed_medical_form = models.BooleanField(default=True)

    # Parent attending sail parent session ?
    parent_attending = models.BooleanField(default=True)
    objects = SailUserManager()
    REQUIRED_FIELDS = ['first_name', 'last_name', 'home_state', 'home_city', 'home_zip_code', 'high_school', 'year_in_school', 'phone_number', 'parent_name', 'parent_phone_number', 'parent_email', 'parent_attending', 'gender_identification', 'shirt_size', 'dietary_restrictions', 'admitted_student']
    

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Teacher(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, primary_key=True)

    # REQUIRED FIELDS
    major = models.CharField(max_length=50)

    FRESHMAN = 'Freshman'
    SOPHOMORE = 'Sophomore'
    JUNIOR = 'Junior'
    SENIOR = 'Senior'
    YEAR_IN_SCHOOL_CHOICES = (
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
    )
    year_in_school = models.CharField(max_length=10,
                                      choices=YEAR_IN_SCHOOL_CHOICES,
                                      default=FRESHMAN)
    
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'

class Student(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, primary_key=True)

    # REQUIRED FIELDS
    MALE = 'Male'
    FEMALE = 'Female'
    NON_BIN = 'Non_Binary'
    GENDER_ID_CHOICES = (
        (MALE, 'Male'),
        (FEMALE, 'Female'),
        (NON_BIN, 'Non-binary')
    )
    gender_identification = models.CharField(max_length=10, 
                                             choices=GENDER_ID_CHOICES, 
                                             default=MALE)

    XS = 'XS'
    S = 'S'
    M = 'M'
    L = 'L'
    XL = 'XL'
    SHIRT_SIZE_CHOICES = (
        (XS, 'Unisex XS'),
        (S, 'Unisex S'),
        (M, 'Unisex M'),
        (L, 'Unisex L'),
        (XL, 'Unisex XL')
    )
    shirt_size = models.CharField(max_length=5, 
                                  choices=SHIRT_SIZE_CHOICES,
                                  default=XS)

    home_city = models.CharField(max_length=50)
    home_zip_code = models.PositiveIntegerField()
    high_school = models.CharField(max_length=50)

    FRESHMAN = 'Freshman'
    SOPHOMORE = 'Sophomore'
    JUNIOR = 'Junior'
    SENIOR = 'Senior'
    YEAR_IN_SCHOOL_CHOICES = (
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
    )
    year_in_school = models.CharField(max_length=10,
                                      choices=YEAR_IN_SCHOOL_CHOICES,
                                      default=FRESHMAN)
    
    phone_number = models.PositiveIntegerField()
    parent_name = models.CharField(max_length=100)
    parent_phone_number = models.PositiveIntegerField()
    parent_email = models.EmailField()

    # OPTIONAL FIELDS (specified with blank=True)
    dietary_restrictions = models.CharField(max_length=50, blank=True)
    home_state = models.CharField(max_length=2, blank=True)
    admitted_student = models.BooleanField(blank=True)

    # FOR INTERNAL LOGISTICS
    signed_medical_form = models.BooleanField(blank=True)

    # Parent attending sail parent session ?
    parent_attending = models.BooleanField(blank=True)

    
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'

""" This model describes someone who is "interested" (i.e. we will email them with event updates) """
class Follower(models.Model):
    email = models.EmailField()

    P_TEACHER = 'Prospective Teacher'
    P_STUDENT = 'Prospective Student'
    PARENT = 'Parent'
    ROLE_CHOICES = (
        (P_TEACHER, 'Prospective Teacher'),
        (P_STUDENT, 'Prospective Student'),
        (PARENT, 'Parent / Interested Person'),
    )
    role = models.CharField(max_length=20,
                            choices=ROLE_CHOICES,
                            default=P_TEACHER)

    def __str__(self):
        return self.email