"""
Django settings for mysite project.

Generated by 'django-admin startproject' using Django 3.2.9.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path
import os
import whitenoise
from dotenv import load_dotenv
load_dotenv()
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient

credential = DefaultAzureCredential()

secret_client = SecretClient(vault_url="https://dac-datadiscovery.vault.azure.net/", credential=credential)
DBUser_Secret = secret_client.get_secret("DB-Username")
DBPass_Secret = secret_client.get_secret("DB-Password")
ClientId = secret_client.get_secret("CLIENT-ID")
Client_Secret = secret_client.get_secret("CLIENT-SECRET")
Secret_key_kv = secret_client.get_secret("SECRET-KEY")



# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('SECRET_KEY',Secret_key_kv)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG =  True
DB_USER = DBUser_Secret.value
DB_PASSWORD = DBPass_Secret.value

CSRF_TRUSTED_ORIGINS = ['http://localhost:4200','https://*.data-discovery.azurewebsites.net','http://*.md2qjyzc', 'https://discovery.dainsights.public.siemens.com', 'https://data-discovery-data-discovery-staging.azurewebsites.net']
ALLOWED_HOSTS = ['*']
CORS_ALLOW_HEADERS = [
    "accept",
    "accept-encoding",
    "authorization",
    "content-type",
    "dnt",
    "origin",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
]

assert DB_USER !='', 'No SQL User set'

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'mozilla_django_oidc',
    'rest_framework',
    'rest_server',
    'frontend',
    'corsheaders'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

ROOT_URLCONF = 'mysite.urls'
CORS_ORIGIN_ALLOW_ALL = True
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'mysite.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

if DEBUG:
        print('Using Debug Database')
        DATABASES = {
    'default': {
        'ENGINE': 'mssql',
        'PORT': '1433',
        'NAME': 'data-discovery',
        'PORT': 1433,
        'USER': DB_USER,
        'HOST': 'dac-data-discovery-sql.database.windows.net',
        'PASSWORD': DB_PASSWORD,
        'OPTIONS': {
                'driver': 'ODBC Driver 17 for SQL Server',
            },
        'CONN_MAX_AGE' : 100
    }
    }

else:
    DATABASES = {
    'default': {
        'ENGINE': 'mssql',
        'PORT': '1433',
        'NAME': 'data-discovery',
        'PORT': 1433,
        'USER': DB_USER,
        'HOST': 'dac-data-discovery-sql.database.windows.net',
        'PASSWORD': DB_PASSWORD,
        'OPTIONS': {
                'driver': 'ODBC Driver 17 for SQL Server',
            },
        'CONN_MAX_AGE' : 100
    }
    }


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_USER_MODEL = 'rest_server.SiemensUser'




# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

APPEND_SLASH = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

STATIC_ROOT = BASE_DIR / "staticfiles"

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# OIDC Configuration for Siemens QA System

AUTHENTICATION_BACKENDS = [
     #'rest_server.oidc_authentication.MyOIDCAB',
     #'mozilla_django_oidc.auth.OIDCAuthenticationBackend',
]


# if DEBUG:
#     OIDC_RP_CLIENT_ID = ClientId
#     OIDC_RP_CLIENT_SECRET = Client_Secret

#     OIDC_OP_AUTHORIZATION_ENDPOINT = "https://myid-qa.siemens.com/as/authorization.oauth2"
#     OIDC_OP_TOKEN_ENDPOINT = "https://myid-qa.siemens.com/as/token.oauth2"
#     OIDC_OP_USER_ENDPOINT = "https://myid-qa.siemens.com/idp/userinfo.openid"


#     OIDC_RP_SIGN_ALGO = 'RS256'
#     OIDC_OP_JWKS_ENDPOINT = "https://myid-qa.siemens.com/pf/JWKS"
#     # OIDC_VERIFY_JWT = False

#     OIDC_RP_SCOPES = 'openid email profile'

# else:
#     OIDC_RP_CLIENT_ID = ClientId
#     OIDC_RP_CLIENT_SECRET = Client_Secret

#     OIDC_OP_AUTHORIZATION_ENDPOINT = "https://myid.siemens.com/as/authorization.oauth2"
#     OIDC_OP_TOKEN_ENDPOINT = "https://myid.siemens.com/as/token.oauth2"
#     OIDC_OP_USER_ENDPOINT = "https://myid.siemens.com/idp/userinfo.openid"

#     OIDC_RP_SIGN_ALGO = 'RS256'
#     OIDC_OP_JWKS_ENDPOINT = "https://myid.siemens.com/pf/JWKS"
#     OIDC_RP_SCOPES = 'openid email profile'

# LOGIN_REDIRECT_URL = "/"
# LOGOUT_REDIRECT_URL = "/"

# ALLOW_LOGOUT_GET_METHOD = True

# Rest Framework

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
    #     'mozilla_django_oidc.contrib.drf.OIDCAuthentication',
    #     'rest_framework.authentication.SessionAuthentication',
    ]
}

#Images
MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR,"media/")