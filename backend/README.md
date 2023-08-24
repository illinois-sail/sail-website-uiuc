# sail-website-uiuc
# Instructions to set up backend (how I set it up on Windows 11)
0) Navigate to backend/
1) make sure you have pipenv (https://realpython.com/pipenv-guide/)
2) Run 'pipenv shell' and then `pipenv install -r requirements.txt`
3) Put .env file in sail-website-uiuc/backend/sail2023
    .env files contains sensitive information
4) In sail-website-uiuc/backend run `python manage.py makemigrations` and `python manage.py migrate`
5) Create superuser with `python manage.py createsuperuser`
    This is used to log in to http://127.0.0.1:8000/admin/
5) Run python manage.py runserver

6) Here are the examples of routes you can test below. More can be found on https://djoser.readthedocs.io/en/latest/base_endpoints.html 
   based on the routes specified in the Djoser configuration in settings.py
    http://127.0.0.1:8000/auth/users
    http://127.0.0.1:8000/auth/users/activate/ 
    
