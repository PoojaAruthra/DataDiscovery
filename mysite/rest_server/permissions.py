from rest_framework import permissions
class PostOnlyPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in ('create', 'add' ):
            return True
        return False

class IsStaffOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if (request.method in permissions.SAFE_METHODS) or request.user.is_staff:
            return True
        return False