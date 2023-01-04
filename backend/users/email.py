from djoser import email

class CustomActivationEmail(email.ActivationEmail):
    template_name = 'users/activation.html'
class CustomConfirmationEmail(email.ActivationEmail):
    template_name = 'users/confirmation.html'