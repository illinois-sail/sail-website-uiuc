from flask import Flask, request, jsonify, render_template, redirect, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv
import sqlite3
import hashlib
from hash_password import hash_password

load_dotenv()

app = Flask(__name__, static_url_path='/', static_folder='../frontend/build', template_folder='../frontend/build')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///student_accounts.db'
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
        return f"{self.first_name} {self.last_name} <{self.mail}>"
    
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

@app.route('/change_password', methods=['POST'])
def change_password():
    # gather the information from the request
    response = request.json
    email = response['email']
    old_password = response['oldPassword']
    new_password = response['newPassword']
    
    # find the student
    student = Student.query.filter_by(email=email).first()
    
    # check if the old password is correct
    if student.password_hash == hash_password(old_password):
        # change the password
        student.password_hash = hash_password(new_password)
        db.session.commit()
        return "The password has been changed"
    else:
        return "The old password is incorrect"

# @TODO: Develop the login route
@app.route('/login', methods=['POST'])
def login():
    # gather the information from the request
    response = request.json
    email = response['email']
    password = response['password']
    
    # find the student
    student = Student.query.filter_by(email=email).first()
    print('student:', student)
    # check if the password is correct
    if student.password_hash == hash_password(password):
        return "The password is correct"
    else:
        return "The password is incorrect"

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
            "password_hash": student.password_hash,
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
    
if __name__ == '__main__':
    app.run(debug=True)