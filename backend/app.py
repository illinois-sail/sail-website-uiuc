from flask import Flask, request, jsonify, render_template, redirect, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
from hash_password import hash_password
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
#imports for reset password
from flask_mail import Mail
from datetime import datetime, timedelta, timezone
import pytz
import secrets
from flask_mail import Message
#from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
load_dotenv()

app = Flask(__name__, static_url_path='/', static_folder='../frontend/build', template_folder='../frontend/build')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///student_accounts.db'
db = SQLAlchemy(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_USERNAME'] = 'cssailnoreply@gmail.com'
app.config['MAIL_PASSWORD'] = 'arjo dlse slfd payb' #$CS$5S@a!L$
app.config['MAIL_PORT'] = 587  # Use 465 for SSL
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USE_TLS'] = True


mail = Mail(app)

class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), nullable=False)
    first_name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    shirt_size = db.Column(db.String(120), nullable=False)
    parent_name = db.Column(db.String(120), nullable=False)
    parent_email = db.Column(db.String(120), nullable=False)
    classes = db.Column(db.String(100), nullable=True)
    reset_token = db.Column(db.String(100), unique=True, nullable=True)
    reset_token_expiration = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f"{self.first_name} {self.last_name} <{self.email}>"
    
with app.app_context():
    db.create_all()

# GET ROUTES
@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/classes', methods=['GET'])
def classes():
    return render_template('index.html')

@app.route('/login', methods=['GET'])
def login_page():
    return render_template('index.html')

@app.route('/signup', methods=['GET'])
def signup_page():
    return render_template('index.html')

@app.route('/aboutus', methods=['GET'])
def aboutus():
    return render_template('index.html')

@app.route('/profile', methods=['GET'])
def profile():
    return render_template('index.html')

@app.route('/logout', methods=['GET'])
def logout():
    return render_template('index.html')

@app.route('/reset_password', methods=['GET'])
def reset_password_page():
    return render_template('index.html')

# @app.route('/reset_password/<token>', methods=['GET'])
# def reset_token_page(token):
#     return render_template('index.html')
# Get the server URL from an environment variable
SERVER_URL = os.environ.get('SERVER_URL', 'http://172.29.187.146:5000')

# Define the production and test server URLs
PROD_SERVER = "https://sail.cs.illinois.edu"
TEST_SERVER = "http://172.29.187.146:5000"

# Assign the server URL based on the environment variable
if SERVER_URL == PROD_SERVER:
    SERVER_URL = PROD_SERVER
else:
    SERVER_URL = TEST_SERVER

@app.route('/reset_password', methods=['POST'])
def reset_password():
    response = request.json
    email = response['email']

    student = Student.query.filter_by(email=email).first()

    if student:
        # Generate a unique reset token
        token = secrets.token_urlsafe(32)
        student.reset_token = token
        # Get the UTC timezone object
        utc = pytz.UTC
        # Set the expiration time for the reset token
        student.reset_token_expiration = utc.localize(datetime.now()) + timedelta(hours=1)
        db.session.commit()

        # Send an email with the reset token
        send_password_reset_email(student)

        return "Password reset instructions have been sent to your email.", 200
    else:
        return "No user found with that email address.", 400

def send_password_reset_email(student):
    token = student.reset_token
    msg = Message('Password Reset Request', sender='cssailnoreply@gmail.com', recipients=[student.email])
    reset_url = f"{SERVER_URL}/reset_password/{token}"
    msg.body = f"""To reset your password, visit the following link:

{reset_url}

If you did not make this request, simply ignore this email and no changes will be made."""
    mail.send(msg)


@app.route("/reset_password/<token>", methods=['GET', 'POST'])
def reset_token(token):
    print("Received a reset request!")
    student = Student.query.filter_by(reset_token=token).first()
    # utc = pytz.UTC
    now = datetime.now().replace(tzinfo=None)
    print("Student",student, student.reset_token_expiration,"Now", now)
    print("Valid Time:", student.reset_token_expiration.replace(tzinfo=None) > now)
    if student:
        if student.reset_token_expiration.replace(tzinfo=None) > now:
            if request.method == 'POST':
                print("POST")
                # Logic to handle password reset form submission
                new_password = request.json['new_password']
                student.password_hash = hash_password(new_password)
                print('New Password:', new_password, student.password_hash)
                student.reset_token = None
                student.reset_token_expiration = None
                db.session.commit()
                return "Password has been successfully reset."
        # else:
        #     return "Token has expired. Please request a new password reset."

        return render_template('index.html')
    else:
        return "Invalid or expired token. Please try again."

# @TODO: Develop the login route
@app.route('/login', methods=['POST'])
def login():
    print("Received a login request!")
    response = request.json
    
    email = response['email']
    password = response['password']
    hashed_password = hash_password(password)
    
    print(response)
    print(f"Email: {email}, Password: {password}")
    
    # query the database for the the student with the email and return the first result
    student = Student.query.filter_by(email=email).first()
    
    print(f"Student Found: {student}")
    
    if not student:
        print("The student does not exist")
        return jsonify({}), 400
    
    elif (student.password_hash == hashed_password):
        # return a dictionary with the user's information in a key called "user"
        print("The password is correct")
        return jsonify({
            "email": student.email,
            "first_name": student.first_name,
            "last_name": student.last_name,
            "shirt_size": student.shirt_size,
            "parent_name": student.parent_name,
            "parent_email": student.parent_email,
            "classes": student.classes
        }), 200
    
    else:
        print("Incorrect password")
        return jsonify({}), 400



# test account at Email: testaccount@gmail.com, Password: password
@app.route('/signup', methods=['POST'])
def signup():
    # gather the information from the request
    response = request.json
    student_data = {
        "email": response['email'],
        "password_hash": hash_password(response['password']),
        "first_name": response['firstName'],
        "last_name": response['lastName'],
        "shirt_size": response['shirtSize'],
        "parent_name": response['parentName'],
        "parent_email": response['parentEmail'],
        "classes": "0" * 100
    }
    
    new_student = Student(**student_data)
    
    db.session.add(new_student)
    db.session.commit()
    
    return redirect(url_for('index'))

# @TODO: Develop the get students route
@app.route('/get-students', methods=['GET'])
def get_students():
    # print all the information from the database
    students = Student.query.all()
    student_list = []
    for student in students:
        student_list.append({
            "email": student.email,
            "first_name": student.first_name,
            "last_name": student.last_name,
            "shirt_size": student.shirt_size,
            "parent_name": student.parent_name,
            "parent_email": student.parent_email,
            "classes": student.classes
        })
    print(student_list)
    return jsonify(student_list)

@app.route('/reset_database', methods=['GET'])
def reset_database():
    # ask for double confirmation and a password
    confirmation = input("Are you sure you want to reset the database? (yes/no): ")
    if confirmation == "yes":
        password = input("Please enter the password: ")
        if password == os.getenv('RESET_DATABASE_PASSWORD'):
            # reset the database
            db.drop_all()
            db.create_all()
            return "The database has been reset"
        else:
            return "The password is incorrect"
    else:
        return "The database has not been reset"
    
    
@app.route("/remove_user/<email>", methods=['GET'])
def remove_user(email):
    # remove the user from the database
    student = Student.query.filter_by(email=email).first()
    db.session.delete(student)
    db.session.commit()
    return f"The user with the email {email} has been removed"

@app.route('/api/user/profile', methods=['GET'])
@login_required
def get_user_profile():
    user = current_user
    
    profile_date = {
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "shirt_size": user.shirt_size,
        "parent_name": user.parent_name,
        "parent_email": user.parent_email,
        "classes": user.classes
    }
    
    return jsonify(profile_date)

    
if __name__ == '__main__':
    app.run(debug=True)

'''
Created user with the following information:
Email: szwejkowski.adrian@gmail.com
Password: test1234
First Name: adrian
Last Name: szwejk
Shirt Size: M
Parent Name: Dad
Parent Email: Dad@gmail.com

CURL command:
curl -X POST -H "Content-Type: application/json" -d '{"email": "szwejkowski.adrian@gmail.com", "oldPassword": "test1234", "newPassword": "newpassword1234"}' http://localhost:5000/reset_password

'''