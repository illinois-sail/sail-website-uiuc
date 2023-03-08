from djoser import email

# class CustomActivationEmail(email.ActivationEmail):
#     template_name = 'users/activation.html'
class CustomConfirmationEmail(email.ConfirmationEmail):
    template_name = 'users/registration_confirmation.html'