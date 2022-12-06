from flask import Flask, jsonify, request, url_for, session
import db
import os
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)
app.config['SECRET_KEY']  = os.environ['SECRET_KEY']

@app.route('/')
def home():
    return db.show_users()

@app.route('/login', methods=['POST'])
def login():
    return db.login(request.get_json())

@app.route('/insert_user', methods=['POST'])
def insert_user():
  db.insert_user(request.get_json())
  return db.show_users()

@app.route('/delete_user', methods=['DELETE'])
def delete_account():
  db.delete_account(request.get_json())
  return db.show_users()

@app.route('/update_password', methods=['PUT'])
def update_password():
  db.update_password(request.get_json())
  return db.show_users()

if __name__ == "__main__":
    app.run(debug=True)