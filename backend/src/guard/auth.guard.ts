import { CanActivate, ExecutionContext } from "@nestjs/common";

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    // if there exist an userId in session (already logged in) 
    // -> the request is proceeded

    // but if there isn't exist an userId in session (user isn't signed in) 
    // -> the request is rejected
    return request.session.userId;
  }
}