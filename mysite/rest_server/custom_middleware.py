from django.contrib.auth import get_user_model
import jwt
import requests

User = get_user_model()

class MyAuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
 
    def __call__(self, request):
        if 'jwt_token' in request.session:
            jwt_token = request.session.get('jwt_token')
            print("session called")
        else:
            jwt_token = self.get_jwt_token(request)
            request.session['jwt_token'] = jwt_token
        if jwt_token:
            if 'user_details' in request.session:
                user_details = request.session.get('user_details')
            else:
                user_details = self.decode_jwt_token(jwt_token)
                request.session['user_details'] = user_details

            user= User.objects.get(email=user_details['email'])
            print(user)
            if user is None:
                user = User.objects.create_user(email=user_details['email'], given_name=user_details['given_name'], family_name=user_details['family_name'], gid=user_details['gid'], org_code=user_details['org_code'])
                user.save()
            
            # Set the authenticated user in the request
            request.user = user
 
        # Continue with the request processing
        response = self.get_response(request)
        return response
 
    def get_jwt_token(self, request):
        # url = 'auth/.me'      
        # response = requests.get('https://your-domain/.auth/me')
        # if response.status_code == 200:
        #     data = response.json()
        #     id_token = data[0].get('id_token')
        #     return id_token
        # else:
        #     return None
        id_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJmNTA1MWE4Ny1kZGM5LTQ5M2MtODYxOS1mZThkYWJlYjk2ZTQiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vMzhhZTNiY2QtOTU3OS00ZmQ0LWFkZGEtYjQyZTE0OTVkNTVhL3YyLjAiLCJpYXQiOjE3MTE0NDAxNDYsIm5iZiI6MTcxMTQ0MDE0NiwiZXhwIjoxNzExNDQ0MDQ2LCJhaW8iOiJBZFFBSy84V0FBQUFBZkdnWWhFM292N0tCZGpmRlZ4emNHZmloS2tmdTNtMjljd3BsQi9jRmR6ZzJXYndPc3JzM1Y0SmgxRmszbWt5LzhWZm42b3FyZlRjYldybTZzeDk0a1RzVW1PMW1GTWJyM2kyek8ra244Tng2MGh5YVhmWVlnS0NrbkdZSjBTL3RjQTdmWUFvRk1kdGhGMHY4bG02U0tsM09yL2ZrSEh6VkY2SUdicHYvTDdHdS9sUDJrMlJCSStTNmxWRnM1RW5vVmhjbWk0dWs5N1QzcmIzSFh1aUxTY2IyYWl2dUlQclhwN2llWGdzYXREbThjRHVISko4NFp6RzZtUDl1ZUJLdURpa0IzOC80aDJveHR1UlM2SlYwdz09IiwiZW1haWwiOiJwb29qYS5hQHNpZW1lbnMuY29tIiwibmFtZSI6IkEsIFBvb2phIChBRFYgRCBJTiBEQVNTIFBMVCBURTQgREFDMikiLCJub25jZSI6IjU0NWU2MjY4ODljMDQ2NTdiOTFkZGU3ZTBiZWZmZmM4XzIwMjQwMzI2MDgxMjE2Iiwib2lkIjoiZmI4NWRlODgtMWViMy00ODViLTkwNGEtMTRiMDM0YjNjNTIzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicG9vamEuYUBzaWVtZW5zLmNvbSIsInJoIjoiMC5BVHdBelR1dU9IbVYxRS10MnJRdUZKWFZXb2NhQmZYSjNUeEpoaG4tamF2cmx1UThBQ2MuIiwic3ViIjoiZmhDRGh1UzJzVzBrcXY2b1RFdUppQ2tSb2hkUnZvTzQyU1NQVzhTeE14NCIsInRpZCI6IjM4YWUzYmNkLTk1NzktNGZkNC1hZGRhLWI0MmUxNDk1ZDU1YSIsInV0aSI6IkYwS3ZBMW45dzAtb2dMTklVQ21iQUEiLCJ2ZXIiOiIyLjAiLCJhZGRyZXNzX2xvY2F0aW9uIjoiRmlyc3QgTWFpbiBSb2FkIiwiYXJlIjoiNTY2MyIsImNpdHkiOiJCYW5nYWxvcmUiLCJjb21wYW55X3VuaXQiOiJBRFYiLCJjb3N0X2NlbnRlciI6IjY1MTEyNDQxIiwiY291bnRyeSI6IklOIiwiZW1wbG95ZWVfaWQiOiJaMDA0SzhBQyIsImVtcGxveWVlX3R5cGUiOiJJU0UiLCJmYW1pbHlfbmFtZSI6IkEiLCJnaWQiOiJaMDA0SzhBQyIsImdpdmVuX25hbWUiOiJQb29qYSIsImluY291bnRyeV9tYW5hZ2VyIjoiWjAwMEtCMFkiLCJtYWlsIjoicG9vamEuYUBzaWVtZW5zLmNvbSIsIm9iamVjdF9zaWQiOiJTLTEtNS0yMS0xMjY0MzI2NjYtMTI3MDkxMzkyNi0zNjc5MTUzNDEzLTQ0MjYzNzQiLCJvcmdfY29kZSI6IkFEViBEIElOIERBU1MgUExUIFRFNCBEQUMyIiwib3JnX2lkIjoiQTExMDQ1NzEiLCJwb3N0YWxfY29kZSI6IjU2MDEwMCIsInByZWZlcnJlZF9mYW1pbHlfbmFtZSI6IkEiLCJwcmVmZXJyZWRfZ2l2ZW5fbmFtZSI6IlBvb2phIiwic2FtX2FjY291bnRfbmFtZSI6InowMDRrOGFjIiwiZGlzcGxheV9uYW1lIjoiQSwgUG9vamEgKEFEViBEIElOIERBU1MgUExUIFRFNCBEQUMyKSIsImxvY2F0aW9uIjoiSU4vQkxSIFNILy0vLSJ9.KSbonNi89eNO4qMEj0I7kIAVeBusAEzOhnsCnnnrjrFv3oacHB120D3hKJ226dHIFx7ejmbJMpX86Zlw2sqv8sdPcXGFDvbvTsn3hKZj1Mr-3ezJ-ayq-0ZxzsGV5rPCcH43C0wByZ3d-b5dj3QgbGGwOQ4jEy9V-u0YzuHr1pqeKr9NcQQpIhMEoXeF_KrxWhUBMEYZ69A5MmrV5KnobD6NAiSG8zsk1jbZ8KOA3o73DYfvmY7IaMFWZ_SULUVOT0O0WhioZR8sBnqMRcBHmZWYwDN1mS4lP9EUYFcRNqQi3JtwOmaq5vDPU_sdwojHyOjw3biZoL9dY_9RoZdRYQ"
        return id_token
 
    def decode_jwt_token(self, jwt_token):
        decoded_token = jwt.decode(jwt_token, options={"verify_signature": False})
        print(decoded_token)
        user_details = {'email': decoded_token['email'], 'given_name': decoded_token['given_name'], 'family_name': decoded_token['family_name'], 'gid': decoded_token['gid'], 'org_code':decoded_token['org_code']}
        print(user_details)
        return user_details 
 