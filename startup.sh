cd mysite
python manage.py migrate
python manage.py collectstatic --noinput
cd ..
gunicorn --bind=0.0.0.0:8000 --timeout 600 --chdir mysite mysite.wsgi
