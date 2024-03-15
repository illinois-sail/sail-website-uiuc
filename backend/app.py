from flask import Flask, request, jsonify, render_template, redirect, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
from hash_password import hash_password
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from flask_cors import CORS
import pandas as pd
import numpy as np

# GET emails
# curl -X POST -H "Content-Type: application/json" -d '{"token":"<adminTokenhere>"}' https://sail.cs.illinois.edu/get_emails
# curl -X POST -H "Content-Type: application/json" -d '{"token":"ilovekennychensomuchandheistheloveofmylifekenny4eva38240239847083924"}' http://172.16.0.51:5000/get_students

load_dotenv()

app = Flask(__name__, static_url_path='/', static_folder='./build', template_folder='./build')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///student_accounts.db'
# CORS(app, supports_credentials=True, origins=['http://sail.cs.illinois.edu:3000', 'http://localhost:5000', 'http://192.168.1.9:5000'])
db = SQLAlchemy(app)

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
    print(response)
    email = response['email']
    classIndex = response['classIndex']
    
    user = Student.query.filter_by(email=email).first()
    if user:
        user.classes = user.classes[:classIndex] + '1' + user.classes[classIndex+1:]
        db.session.commit()
        user_classes = Student.query.filter_by(email=email).first().classes
        print(f"User classes: {user_classes}")
        return {"classIndex" : classIndex}, 200
    else:
        return {"error" : "User not found"}, 400
    
@app.route('/unregisterForCourse', methods=['POST'])
def unregister_for_course():
    response = request.json
    print(response)
    email = response['email']
    classIndex = response['classIndex']
    
    user = Student.query.filter_by(email=email).first()
    if user:
        user.classes = user.classes[:classIndex] + '0' + user.classes[classIndex+1:]
        db.session.commit()
        user_classes = Student.query.filter_by(email=email).first().classes
        print(f"User classes: {user_classes}")
        return {"classes" : user_classes}, 200
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
        return user.classes, 200
    else:
        return "User not found", 400
    
@app.route('/get_emails', methods=['POST'])
def get_emails():
    response = request.json
    token = response['token']
    
    if token != os.getenv('ADMIN_TOKEN'):
        return "invalid ADMIN TOKEN", 401
    
    students = Student.query.all()
    emails = [student.email for student in students]
    return jsonify(emails), 200

    
if __name__ == '__main__':
    app.run(debug=True)