from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.http import FileResponse, Http404


# """ STUFF USED FOR SENDING ACTIVATION EMAIL """
# from django.contrib.sites.shortcuts import get_current_site
# from django.core.mail import EmailMessage
# from django.template.loader import render_to_string
# from django.utils.encoding import force_bytes
# from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
# from .token_generator import account_activation_token

from .models import Teacher, Student, Follower
# from .forms import (SailUserCreationForm,
#                     SailUserUpdateForm,
#                     TeacherCreationForm,
#                     StudentCreationForm,
#                     FollowerCreationForm,
# )

import os
from rest_framework import generics
from .serializers import StudentSerializer

#POST
class StudentView(generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


# # Credits to https://blog.hlab.tech/part-ii-how-to-sign-up-user-and-send-confirmation-email-in-django-2-1-and-python-3-6/
# def _send_register_confirmation_email(request, user, to_email):
#     email_subject = 'Activate your Sail Account'
#     current_site = get_current_site(request)

#     message = render_to_string('users/register_activate_email.html', {
#         'user': user,
#         'domain': current_site.domain,
#         'uid': urlsafe_base64_encode(force_bytes(user.pk)),
#         'token': account_activation_token.make_token(user)
#     })

#     email = EmailMessage(email_subject, message, to=[to_email])
#     email.send()

# def activate_account(request, uidb64, token):
#     try:
#         uid = force_bytes(urlsafe_base64_decode(uidb64))
#         user = get_user_model().objects.get(pk=uid)
#     except(TypeError, ValueError, OverflowError, get_user_model().DoesNotExist):
#         user = None
#     if user is not None and account_activation_token.check_token(user, token):
#         user.is_active = True
#         user.save()
#         messages.success(request, 'Your account has been activated successfully. You may login now!')
#         return redirect('users-login')
#     else:
#         messages.error(request, 'The activation link seems to be invalid!')
#         return redirect('sail-home')

# """ Menu to select whether to sign up as teacher or student """
# # def register(request):
# #     return render(request, 'users/register.html', {'title':'Register'})

# def register_teacher(request):
#     if request.method == 'POST':
#         u_form = SailUserCreationForm(request.POST)
#         p_form = TeacherCreationForm(request.POST)
#         if u_form.is_valid() and p_form.is_valid():
#             user = u_form.save(commit=False)
#             user.is_active = False  # user is added to our database, but would not be able to login until they activate their account
#             user.role = get_user_model().TEACHER
#             user.save()

#             teacher = p_form.save(commit=False)
#             teacher.user = user
#             teacher.save()

#             _send_register_confirmation_email(request, user, u_form.cleaned_data['email'])

#             messages.success(request, 'Account created! You will need to verify your account in your email before you can login.')
#             return redirect('users-login')
#     else:
#         u_form = SailUserCreationForm()
#         p_form = TeacherCreationForm()
    
#     context = {'u_form':u_form, 'p_form':p_form, 'title':'Teacher Register'}
#     return render(request, 'users/register_form.html', context)

# def register_student(request):
#     if request.method == 'POST':
#         u_form = SailUserCreationForm(request.POST)
#         p_form = StudentCreationForm(request.POST)
#         if u_form.is_valid() and p_form.is_valid():
#             user = u_form.save(commit=False)
#             user.is_active = False  # user is added to our database, but would not be able to login until they activate their account
#             user.role = get_user_model().STUDENT
#             user.save()

#             student = p_form.save(commit=False)
#             student.user = user
#             student.save()

#             _send_register_confirmation_email(request, user, u_form.cleaned_data['email'])

#             messages.success(request, 'Account created! You will need to verify your account in your email before you can login.')
#             return redirect('users-login')
#     else:
#         u_form = SailUserCreationForm()
#         p_form = StudentCreationForm()
    
#     context = {'u_form':u_form, 'p_form':p_form, 'title':'Student Register'}
#     return render(request, 'users/register_form.html', context)

# def register_follower(request):
#     if request.method == 'POST':
#         form = FollowerCreationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             messages.success(request, 'Thank you for your interest in Sail; we will email you updates on the event!')
#             return redirect('sail-home')
#     else:
#         form = FollowerCreationForm()
    
#     return render(request, 'users/interest_form.html', {'form':form, 'title':'Interest Form'})

# """ Displays a user's profile, and allows them to update or delete their account """
# @login_required
# def profile(request):
#     if request.method == 'POST':
#         if request.POST['action'] == 'Update':
#             form = SailUserUpdateForm(request.POST, instance=request.user)
#             if form.is_valid():
#                 form.save()
#                 messages.success(request, 'Account updated!')
#                 return redirect('users-profile')
#         elif request.POST['action'] == 'Delete':
#             request.user.delete()
#             messages.success(request, 'Account deleted')
#             return redirect('sail-home')
#     else:
#         form = SailUserUpdateForm(instance=request.user)

#     return render(request, 'users/profile.html', {'form':form, 'title':'Profile'})

# """ Displays and allows participants to e-sign forms/waivers """
# @login_required
# def forms(request):
#     if request.method == 'POST':
#         if 'submit-participant-form' in request.POST:
#             if request.POST.get('full-name') == (f'{request.user.first_name} {request.user.last_name}'):
#                 messages.success(request, 'Participant form successfully signed!')
#                 request.user.signed_participant_form = True
#                 request.user.save()
#             else:
#                 messages.warning(request, 'Your name in the signature form must exactly match your name in your profile.')
#             return redirect('users-forms')
#         elif 'submit-photo-form' in request.POST:
#             if request.POST.get('full-name') == (f'{request.user.first_name} {request.user.last_name}'):
#                 messages.success(request, 'Photo form successfully signed!')
#                 request.user.signed_photo_form = True
#                 request.user.save()
#             else:
#                 messages.warning(request, 'Your name in the signature form must exactly match your name in your profile.')
#             return redirect('users-forms')
#         elif 'unsubmit-participant-form' in request.POST:
#             request.user.signed_participant_form = False
#             request.user.save()
#         elif 'unsubmit-photo-form' in request.POST:
#             request.user.signed_photo_form = False
#             request.user.save()

#     return render(request, 'users/forms.html')

# @login_required 
# def medical_form_pdf(request):
#     curr_dir = os.path.dirname(__file__)
#     file_path = os.path.join(curr_dir, './static/users/emergency_medical_form.pdf')

#     try:
#         return FileResponse(open(file_path, 'rb'), content_type='application/pdf')
#     except FileNotFoundError:
#         raise Http404()