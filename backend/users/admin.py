from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.utils.translation import gettext_lazy as _
from .models import SailUser, Teacher, Student, Follower

# Credits to https://www.fomfus.com/articles/how-to-use-email-as-username-for-django-authentication-removing-the-username

""" Define admin model for custom User model with no username field """
# @admin.register(SailUser)
# class SailUserAdmin(DjangoUserAdmin):
#     fieldsets = (
#         (None, {'fields': ('email', 'password', 'role', 'signed_participant_form', 'signed_photo_form')}),
#         (_('Personal info'), {'fields': ('first_name', 'last_name')}),
#         (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
#                                        'groups', 'user_permissions')}),
#         (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'password1', 'password2'),
#         }),
#     )
#     list_display = ('email', 'first_name', 'last_name', 'role', 'signed_participant_form', 'signed_photo_form', 'is_staff')
#     search_fields = ('email', 'first_name', 'last_name')
#     ordering = ('email',)

#fields = ['first_name', 'last_name', 'gender_identification', 'dietary_restrictions', 'shirt_size', 
# 'home_city', 'home_state', 'home_zip_code', 'high_school', 'year_in_school', 
# 'phone_number', 'parent_name', 'parent_phone_number',
# 'parent_email', 'admitted_student', 'parent_attending', 'dietary_restrictions']
#add the fields above to the admin page
@admin.register(SailUser)
class SailUserAdmin(DjangoUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'gender_identification', 'home_city', 'home_state', 'home_zip_code', 'high_school', 'year_in_school', 'phone_number', 'dietary_restrictions', 'shirt_size')}),
        (_('Parent info'), {'fields': ('parent_name', 'parent_phone_number', 'parent_email', 'parent_attending')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )


    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    # list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

admin.site.register(Teacher)
admin.site.register(Student)
admin.site.register(Follower)