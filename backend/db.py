import mysql.connector
from flask import jsonify, session
import os

def open_connection():
    mydb = mysql.connector.connect(
      host=os.environ['HOST'],
      user=os.environ['USER'],
      password=os.environ['PASSWORD'],
      database=os.environ['DATABASE'],
    )
    mydb.autocommit = True
    return mydb


def show_users():
  mydb = open_connection()
  query = ("SELECT * FROM users")
  cursor = mydb.cursor()
  cursor.execute(query)
  columns = cursor.description 
  result = [{columns[index][0]:column for index, column in enumerate(value)} for value in cursor.fetchall()]
  print(result)
  assignments = jsonify(result)
  cursor.close()
  mydb.close()
  return assignments

def insert_user(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("INSERT INTO users(email, password, name) VALUES (%s, %s, %s)", (data["email"], data["password"], data["name"]))
  cursor.close()
  mydb.close()
  return 'INSERTED USER'

def update_password(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("UPDATE users SET password=%s WHERE email=%s", (data['password'], data['email']))
  cursor.close()
  mydb.close()
  return 'UPDATED'

def delete_account(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("DELETE FROM users WHERE email=%s", (data['email'],))
  cursor.close()
  mydb.close()
  return 'DELETED ACCOUNT'

def login(data):
  mydb = open_connection()
  cursor = mydb.cursor()
  cursor.execute("SELECT * FROM users WHERE email=%s AND password=%s" , (data['email'], data['password']))
  columns = cursor.description 
  result = {columns[index][0]:column for index, column in enumerate(cursor.fetchone())}
  account = result
          # If account exists in accounts table in out database
  if account:
        # Create session data, we can access this data in other routes
    session['loggedin'] = True
    session['email'] = account['email']
    session['password'] = account['password']
        # Redirect to home page
    return account
  else:
        # Account doesnt exist or username/password incorrect
    msg = 'Incorrect username/password!'
    print(msg)
  cursor.close()
  mydb.close()
