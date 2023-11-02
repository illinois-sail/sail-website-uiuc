# sail-website-uiuc
# Instructions to set up backend 
On Windows 11

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
    
On Mac (ARM Based)

0) Navigate to backend/
1) Refer to Windows 11 pipenv directions (optional)
2) Run `pip install -r requirements.txt`
3) Create .env file in sail-website-uiuc/backend/sail2023
    .env files contains sensitive information
4) Ensure that `.env` file contains NAME, USER, PASSWORD, SECRET_KEY, EMAIL_USERNAME, EMAIL_PWD
5) Ensure that `.env` file is included within `.gitignore`
6) Navigate to /sail-website
7) Run `npm i react-scripts --legacy-peer-deps` to install required node_modules
8) Run `npm run build` to create build folder within sail-website directory
8) Navigate to base project directory
9) Run `mv i sail-website/build backend/frontend/` to move build folder to necessary directory
10) Navigate to /backend and run `python manage.py makemigrations` and `python manage.py migrate`
11) Create superuser with `python manage.py createsuperuser`
    This is used to log in to http://127.0.0.1:8000/admin/
12) Run `python manage.py runserver`

13) Here are the examples of routes you can test below. More can be found on https://djoser.readthedocs.io/en/latest/base_endpoints.html 
   based on the routes specified in the Djoser configuration in settings.py
    http://127.0.0.1:8000/auth/users
    http://127.0.0.1:8000/auth/users/activate/ 
