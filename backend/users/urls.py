from django.urls import path
from . import views
from .views import StudentView
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    # path('register/', views.register, name='users-register'),
    # path('register/teachers/', views.register_teacher, name='users-register-teacher'),
    # path('register/students/', views.register_student, name='users-register-student'),
    # path('activate/<uidb64>/<token>/', views.activate_account, name='users-activate'),
    # path('profile/', views.profile, name='users-profile'),
    # path('forms/', views.forms, name='users-forms'),
    # path('forms/medical-form', views.medical_form_pdf, name='users-forms-medical'),
    # path('interest-form/', views.register_follower, name='users-interest-form'), 
    path('home', StudentView.as_view()),
    
]