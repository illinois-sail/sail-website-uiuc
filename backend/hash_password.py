import hashlib

def hash_password(password):
    sha256_hash_object = hashlib.sha256()
    sha256_hash_object.update(password.encode('utf-8'))
    hashed_password = sha256_hash_object.hexdigest()
    return hashed_password