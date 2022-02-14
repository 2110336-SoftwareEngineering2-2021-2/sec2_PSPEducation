import { CanActivate, ExecutionContext } from '@nestjs/common';

export class TutorGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (!request.currentUser) { //if not sign in, return false
      return false;
    }

    return request.currentUser.type === 'tutor';
  }
}