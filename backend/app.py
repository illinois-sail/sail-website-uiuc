from flask import Flask, request, jsonify, render_template, redirect, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
from hash_password import hash_password
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_cors import CORS
import pandas as pd
#imports for reset password
from flask_mail import Mail
from datetime import datetime, timedelta, timezone
import pytz
import secrets
from flask_mail import Message
import sqlite3

# GET emails
# curl -X POST -H "Content-Type: application/json" -d '{"token":"<adminTokenhere>"}' https://sail.cs.illinois.edu/get_emails
# curl -X POST -H "Content-Type: application/json" -d '{"token":"ilovekennychensomuchandheistheloveofmylifekenny4eva38240239847083924"}' http://172.16.0.51:5000/get_students

remainingSeats = pd.read_csv("instance/ClassAndCapacity.csv")

load_dotenv()

app = Flask(__name__, static_url_path='/', static_folder='./build', template_folder='./build')
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///student_accounts.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///new_student_accounts.db'

# CORS(app, supports_credentials=True, origins=['http://sail.cs.illinois.edu:3000', 'http://localhost:5000', 'http://192.168.1.9:5000'])
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

def migrate_data():
    old_conn = sqlite3.connect('student_accounts.db')
    old_cursor = old_conn.cursor()

    old_cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    print(old_cursor.fetchall())
    rows = old_cursor.fetchall()

    for row in rows:
        student = Student()
        student.id = row[0]
        student.email = row[1]
        student.password_hash = row[2]
        student.first_name = row[3]
        student.last_name = row[4]
        student.shirt_size = row[5]
        student.parent_name = row[6]
        student.parent_email = row[7]
        student.classes = row[8]
        db.session.add(student)

    db.session.commit()
    old_conn.close()

with app.app_context():
    db.create_all()
    migrate_data()

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

@app.route('/registration', methods=['GET'])
def registration():
    return render_template('index.html')

@app.route('/reset_password', methods=['GET'])
def reset_password_page():
    return render_template('index.html')

SERVER_URL = os.environ.get('SERVER_URL', 'http://172.18.216.34:5000')

# Define the production and test server URLs
PROD_SERVER = "https://sail.cs.illinois.edu"
TEST_SERVER = "http://172.18.216.34:5000"

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
    # print("Student",student, student.reset_token_expiration,"Now", now)
    # print("Valid Time:", student.reset_token_expiration.replace(tzinfo=None) > now)
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

                # print the students password from the DB
                print(f"Password: {student.password_hash}")
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

    # if the email is already in use, return an error
    if Student.query.filter_by(email=student_data['email']).first():
        return jsonify({}), 401
    
    new_student = Student(**student_data)
    
    db.session.add(new_student)
    db.session.commit()
    
    return jsonify({
        "email": new_student.email,
        "first_name": new_student.first_name,
        "last_name": new_student.last_name,
        "shirt_size": new_student.shirt_size,
        "parent_name": new_student.parent_name,
        "parent_email": new_student.parent_email,
        "classes": new_student.classes
    }), 200

# @TODO: Develop the get students route
@app.route('/get_students', methods=['POST'])
def get_students():
    response = request.json
    token = response['token']
    
    print(f"Token: {token}")
    
    if token == os.getenv('ADMIN_TOKEN'):
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
        return jsonify(student_list), 200
    return "invalid API token", 401

@app.route('/reset_database', methods=['POST'])
def reset_database():
    response = request.json
    reset_database_token = response['token']
    if reset_database_token != os.getenv('RESET_DATABASE_PASSWORD'):
        return "invalid RESET_DATABASE_PASSWORD", 401
    db.drop_all()
    db.create_all()
    return "The database has been reset", 200
    
    
@app.route("/remove_user/<email>", methods=['POST'])
def remove_user(email):
    response = request.json
    remove_user_token = response['token']
    
    if remove_user_token != os.getenv('REMOVE_USER_PASSWORD'):
        return "invalid REMOVE_USER_PASSWORD", 401
    
    # remove the user from the database
    student = Student.query.filter_by(email=email).first()
    print(f"student: {student}")
    db.session.delete(student)
    db.session.commit()
    return f"The user with the email {email} has been removed"

@app.route('/add_speen_user', methods=['GET'])
def add_speen_user():
    # if the user is already in the database, return an error
    if Student.query.filter_by(email="ssadler5@illinois.edu").first():
        return "The user is already in the database", 400
    
    # add a user to the database
    student_data = {
        "email": "ssadler5@illinois.edu",
        "password_hash": hash_password("test"),
        "first_name": "Spencer",
        "last_name": "Sadler",
        "shirt_size": "M",
        "parent_name": "Clayton Sadler",
        "parent_email": "claysadman@gmail.com",
        "classes": "0" * 100
    }
    
    db.session.add(Student(**student_data))
    db.session.commit()
    print("The user has been added")
    return "The user has been added", 200

@app.route('/add_test_user', methods=['GET'])
def add_test_user():
    if Student.query.filter_by(email="test").first():
        return "The user is already in the database", 400
    
    # add a user to the database
    student_data = {
        "email": "test",
        "password_hash": hash_password("test"),
        "first_name": "Test",
        "last_name": "Test",
        "shirt_size": "M",
        "parent_name": "Test",
        "parent_email": "test",
        "classes": "0" * 100
    }
    
    db.session.add(Student(**student_data))
    db.session.commit()
    
    print("The user has been added")
    
    return "The user has been added", 200

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

@app.route('/change_user_info', methods=['POST'])
def change_user_info():
    response = request.json
    print(response)
    
    # gather the information from the request
    firstName = response['firstName'].capitalize()
    lastName = response['lastName'].capitalize()
    oldEmail = response['oldEmail']
    newEmail = response['newEmail']
    parent_email = response['parentEmail']
    parent_name = response['parentName']
    shirt_size = response['shirtSize']
    
    # find the user in the database
    user = Student.query.filter_by(email=oldEmail).first()
    
    # update the user's information if the user exists
    if (user):
        user.first_name = firstName.capitalize()
        user.last_name = lastName.capitalize()
        user.email = newEmail
        user.parent_email = parent_email
        user.parent_name = parent_name
        user.shirt_size = shirt_size
        db.session.commit()
        
        user_data = {
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "shirt_size": user.shirt_size,
            "parent_name": user.parent_name,
            "parent_email": user.parent_email,
            "classes": user.classes
        }
        
        return jsonify(user_data), 200
    else:
        return "User not found", 400
    
@app.route('/isRegisteredForCourse', methods=['POST'])
def is_registered_for_course():
    response = request.json
    print(response)
    
    email = response['email']
    classIndex = response['classIndex']
    
    user = Student.query.filter_by(email=email).first()
    if user:
        if user.classes[classIndex] == '1':
            return {"isRegistered": True}, 200
        else:
            return {"isRegistered": False}, 200
    else:
        return "User not found", 400
    
@app.route('/registerForCourse', methods=['POST'])
def register_for_course():
    response = request.json
    
    email = response['email']
    classIndex = response['classIndex']
    print(email, classIndex)
    
    # if already registered, return an error
    if Student.query.filter_by(email=email).first().classes[classIndex] == '1':
        return "The user is already registered for the class", 402
    
    user = Student.query.filter_by(email=email).first()
    if user:
        user.classes = user.classes[:classIndex] + '1' + user.classes[classIndex+1:]
        if (len(user.classes) != 100):
            print("The user's classes are not 100 characters long")
        db.session.commit()
        user_classes = Student.query.filter_by(email=email).first().classes
        print(f"User classes: {user_classes}")
        authUser = {
            "classes": user_classes,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "shirt_size": user.shirt_size,
            "parent_name": user.parent_name,
            "parent_email": user.parent_email
        }
        
        if remainingSeats["remainingSeats"].iloc[classIndex] <= 0:
            return "The class is full", 401
        
        remainingSeats.loc[classIndex, "remainingSeats"] = remainingSeats["remainingSeats"].iloc[classIndex] - 1
        remainingSeats.to_csv("instance/ClassAndCapacity.csv", index=False)
        
        print(f"Class Name: {remainingSeats['courseName'].iloc[classIndex]}, Remaining Seats: {remainingSeats['remainingSeats'].iloc[classIndex]}")
        
        return {"classIndex" : classIndex, "authUser" : authUser}, 200
    else:
        return {"error" : "User not found"}, 400
    
@app.route('/unregisterForCourse', methods=['POST'])
def unregister_for_course():
    print("Unregistering for course ---")
    response = request.json
    email = response['email']
    classIndex = response['classIndex']
    print(email, classIndex)
    
    # if not registered, return an error
    if Student.query.filter_by(email=email).first().classes[classIndex] == '0':
        return "The user is not registered for the class", 402
    
    user = Student.query.filter_by(email=email).first()
    if user:
        user.classes = user.classes[:classIndex] + '0' + user.classes[classIndex + 1:]
        if (len(user.classes) != 100):
            print("The user's classes are not 100 characters long")
        db.session.commit()
        user_classes = Student.query.filter_by(email=email).first().classes
        print(f"User classes: {user_classes}")
        authUser = {
            "classes": user_classes,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "shirt_size": user.shirt_size,
            "parent_name": user.parent_name,
            "parent_email": user.parent_email
        }
        
        remainingSeats.loc[classIndex, "remainingSeats"] = remainingSeats["remainingSeats"].iloc[classIndex] + 1
        remainingSeats.to_csv("instance/ClassAndCapacity.csv", index=False)
        
        return {"classIndex" : classIndex, "authUser" : authUser}, 200
    else:
        return {"error" : "User not found"}, 400

@app.route('/check_email', methods=['POST'])
def check_email():
    response = request.json
    email = response['email']
    user = Student.query.filter_by(email=email).first()
    if user:
        return "The email is already in use", 400
    else:
        return "The email is not in use", 200

@app.route('/get_classes/<email>', methods=['GET'])
def get_classes(email):
    user = Student.query.filter_by(email=email).first()
    if user:
        return {"classes" : user.classes}, 200
    else:
        return "User not found", 400
    
@app.route('/get_seats_remaining', methods=['GET'])
def get_seats_remaining():
    remainingSeats = pd.read_csv("instance/ClassAndCapacity.csv")
    remainingSeats = remainingSeats.to_dict(orient='records')
    return remainingSeats, 200
    
@app.route('/get_emails', methods=['POST'])
def get_emails():
    response = request.json
    token = response['token']
    
    if token != os.getenv('ADMIN_TOKEN'):
        return "invalid ADMIN TOKEN", 401
    
    students = Student.query.all()
    emails = [student.email for student in students]
    return { "emails" : emails, "number of registrations" : len(emails) }, 200

@app.route('/reset_test_account_classes', methods=['PUT'])
def reset_test_account_classes():
    user = Student.query.filter_by(email="testaccount@gmail.com").first()
    user.classes = "0" * 100
    db.session.commit()
    return "The test account's classes have been reset", 200

@app.route('/recompute_remaining_seats', methods=['POST'])
def recompute_remaining_seats():
    response = request.json
    token = response['token']
    if token != os.getenv('ADMIN_TOKEN'):
        return "invalid ADMIN TOKEN", 401
    for i in range(len(remainingSeats)):
        user_count = 0
        for user in Student.query.all():
            if user.classes[i] == '1':
                user_count += 1
        print(i, remainingSeats.loc[i, "capacity"] - user_count, type(remainingSeats.loc[i, "capacity"]- user_count))
        remainingSeats.loc[i, "remainingSeats"] = (remainingSeats.loc[i, "capacity"]) - user_count
    remainingSeats.to_csv("instance/ClassAndCapacity.csv", index=False)
    return "The remaining seats have been recomputed", 200
    
    
if __name__ == '__main__':
    app.run(debug=True)