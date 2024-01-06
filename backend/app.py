from flask import Flask, request, jsonify, render_template

app = Flask(__name__, static_url_path='', static_folder='build', template_folder='build')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    
    return jsonify({'username': username, 'password': password})