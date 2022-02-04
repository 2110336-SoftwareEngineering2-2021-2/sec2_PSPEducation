import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // data: never = we will not accept any parameter in the decorator
    // context: ExecutionContext = incoming request

    // get the request
    const request = context.switchToHttp().getRequest();
    return request.CurrentUser;
  }
)