from django.contrib.auth import get_user_model
import jwt
import requests

from mysite import settings

User = get_user_model()

class MyAuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
 
    def __call__(self, request):
        # if 'jwt_token' in request.session:
        #     jwt_token = request.session.get('jwt_token')
        #     print("session called")
        # else:
            # jwt_token = self.get_jwt_token(request)
            # request.session['jwt_token'] = jwt_token
        # if jwt_token:
            # if 'user_details' in request.session:
            #     user_details = request.session.get('user_details')
            # else:
                # user_details = self.decode_jwt_token(jwt_token)
                # request.session['user_details'] = user_details

            # user= User.objects.get(email=user_details['email'])
            # print(user)
            # if user is None:
            #     user = User.objects.create(email=user_details['email'], given_name=user_details['given_name'], family_name=user_details['family_name'], gid=user_details['gid'], org_code=user_details['org_code'])
            #     user.save()
            
            # # Set the authenticated user in the request
            # request.user = user
        # else:
        user= User.objects.get(email='pooja.a@siemens.com')
        print(user)
        if user is None:
            user = User.objects.create(email='pooja.a@siemens.com',given_name='Pooja',family_name='A',gid='Z004K8AC',org_code='ADV D IN DASS PLT TE4 DAC2')
            user.save()
        
        # Set the authenticated user in the request
        request.user = user

 
        # Continue with the request processing
        response = self.get_response(request)
        return response
 
    def get_jwt_token(self, request):
        # url = 'auth/.me'   
        
        url=settings.ProdURL+'auth/.me'   
        response = requests.get(url)
        print("called",response.status_code)
        if response.status_code == 200:
            data = response.json()
            id_token = data[0].get('id_token')
            print(id_token)
            return id_token
        else:
            return None
 
    def decode_jwt_token(self, jwt_token):
        decoded_token = jwt.decode(jwt_token, options={"verify_signature": False})
        print(decoded_token)
        user_details = {'email': decoded_token['email'], 'given_name': decoded_token['given_name'], 'family_name': decoded_token['family_name'], 'gid': decoded_token['gid'], 'org_code':decoded_token['org_code']}
        print(user_details)
        return user_details 
 