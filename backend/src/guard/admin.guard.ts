import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.currentUser) { //if not sign in, return false
      return false;
    }

    return request.currentUser.isAdmin; //return true if the logged in user is admin.
  }
}