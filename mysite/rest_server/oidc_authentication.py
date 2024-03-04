from mozilla_django_oidc.auth import OIDCAuthenticationBackend


class MyOIDCAB(OIDCAuthenticationBackend):
    def create_user(self, claims):
        user = super(MyOIDCAB, self).create_user(claims)
        user.email = claims.get('email', '')
        user.given_name = claims.get('given_name', '')
        user.family_name = claims.get('family_name', '')
        user.gid = claims.get('gid', '')
        user.org_code = claims.get('org_code', '')
        user.save()

        return user

    def update_user(self, user, claims):
        user.email = claims.get('email', '')
        user.given_name = claims.get('given_name', '')
        user.family_name = claims.get('family_name', '')
        user.gid = claims.get('gid', '').lower()
        user.org_code = claims.get('org_code', '')
        user.save()

        return user
        