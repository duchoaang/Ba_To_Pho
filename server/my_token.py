from itsdangerous import URLSafeTimedSerializer
from server import app


def generate_confirmation_token(email):
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])
    return serializer.dumps(email, salt=app.config['SECURITY_PASSWORD_SALT'])


<<<<<<< HEAD
def confirm_token(token, expiration=30):
=======
def confirm_token(token, expiration=3600):
>>>>>>> origin/backend-phat
    serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])
    try:
        email = serializer.loads(
            token,
            salt=app.config['SECURITY_PASSWORD_SALT'],
            max_age=expiration
        )
    except:
        return False
    return email


