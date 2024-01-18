


class StudentAccount(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(80), nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    shirt_size = db.Column(db.String(80), nullable=False)
    parent_name = db.Column(db.String(80), nullable=False)
    parent_email = db.Column(db.String(80), nullable=False)
    
    def __str__(self):
        return f'User: {self.email}, Name: {self.first_name} {self.last_name}'
    
    def __repr__(self):
        return f'<User: {self.email}, Name: {self.first_name} {self.last_name}>'