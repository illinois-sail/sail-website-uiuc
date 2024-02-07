from flask import Flask, request, jsonify, render_template, redirect, url_for, send_from_directory
import os
#from dotenv import load_dotenv
import sqlite3
import hashlib
from hash_password import hash_password



#load_dotenv()

app = Flask(__name__, static_url_path='/', static_folder='../frontend/build', template_folder='../frontend/build')

if __name__ == '__main__':
    app.run(debug=True)
    # Call your routes here to test them
    app.test_client().post('/signup', json={'first_name': 'John', 'last_name': 'Doe', 'email': 'johndoe@gmail.com', 'password': 'password', 'shirt_size': 'M', 'parent_name': 'Jane Doe', 'parent_email': 'janedoe@gmail.com'})
    print(app.test_client().get('/get-students').data)
    app.test_client().post('/login', json={'email': 'johndoe@gmail.com', 'password': 'password'})
    print(app.test_client().get('/get-students').data)
    app.test_client().post('/change_password', json={'email': 'johndoe@gmail.com', 'old_password': 'password', 'new_password': 'test'})
    print(app.test_client().get('/get-students').data)
    
index = 1

# define a connection and cursor
connection = sqlite3.connect('student_accounts.db')
cursor = connection.cursor()

# Create stores table
command = """CREATE TABLE IF NOT EXISTS student_accounts (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    shirt_size TEXT NOT NULL,
    parent_name TEXT NOT NULL,
    parent_email TEXT NOT NULL
);"""

cursor.execute(command)

test_student1 = (1, "testemail@gmail.com", "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", "Test", "Student", "M", "Test Parent", "testparentemail@gmail.com")
test_student2 = (2, "testemail2@gmail.com", "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", "Test2", "Student2", "M", "Test Parent2", "testparentemail2@gmail.com")

cursor.execute(f"INSERT INTO student_accounts VALUES {test_student1}")
cursor.execute(f"INSERT INTO student_accounts VALUES {test_student2}")

cursor.execute("SELECT * FROM student_accounts")
rows = cursor.fetchall()
print("------------------------Before------------------------")
print(rows)

#Change password for test_student1
print("------------------------After------------------------")
cursor.execute(f"UPDATE student_accounts SET password_hash = '{hash_password('newpassword')}' WHERE email = 'testemail@gmail.com' AND password_hash = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'")
cursor.execute("SELECT * FROM student_accounts")
rows = cursor.fetchall()
print(rows)



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/classes')
def classes():
    return render_template('index.html')

@app.route('/login', methods=['GET'])
def login_page():
    return render_template('index.html')

@app.route('/change_password', methods=['POST'])
def change_password():
    response = request.json
    email = response['email']
    old_password = response['old_password']
    new_password = response['new_password']
    hashed_old_password = hash_password(old_password)
    hashed_new_password = hash_password(new_password)

    cursor.execute("SELECT * FROM student_accounts")
    rows = cursor.fetchall()
    print(rows)

    for row in rows:
        #Check if email and password match before changing
        if row[1] == email and row[2] == hashed_old_password:
            cursor.execute(f"UPDATE student_accounts SET password_hash = '{hashed_new_password}' WHERE email = '{email}'")
            return "Password changed successfully", 200
        
    return "Invalid Email or Password", 400

@app.route('/login', methods=['POST'])
def login():
    response = request.json
    email = response['email']
    password = response['password']
    hashed_password = hash_password(password)
        
    # TODO: Validate username and password with the database
    cursor.execute("SELECT * FROM student_accounts")
    rows = cursor.fetchall()
    print(rows)
    
    for row in rows:
        if row[1] == email and row[2] == hashed_password:
            return { 'email': email, 'password': password }, 200
    
    return "Invalid username or password", 400

@app.route('/signup', methods=['POST'])
def signup():
    response = request.json
    first_name = response['first_name']
    last_name = response['last_name']
    email = response['email']
    password = response['password']
    shirt_size = response['shirt_size']
    parent_name = response['parent_name']
    parent_email = response['parent_email']
    print('Received:', first_name, last_name, email, password, shirt_size, parent_name, parent_email)
    
    cursor.execute("SELECT * FROM student_accounts")
    rows = cursor.fetchall()
    print("------------------------Test------------------------")
    print(rows)
    # TODO: Add the user to the database
    student = (index, email, hash_password(password), first_name, last_name, shirt_size, parent_name, parent_email)
    cursor.execute(f"INSERT INTO student_accounts VALUES {student}")
    index += 1
    
    return redirect(url_for('index'))

@app.route('/get-students', methods=['GET'])
def get_students():
    cursor.execute("SELECT * FROM student_accounts")
    rows = cursor.fetchall()
    print(rows)
    return jsonify(rows)
    