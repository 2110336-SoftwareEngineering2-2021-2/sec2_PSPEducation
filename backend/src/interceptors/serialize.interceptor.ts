import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable  } from "rxjs";
import { map } from "rxjs";
import { plainToClass } from "class-transformer";

interface ClassConstructor {
new (...args: any[]): {}
}
// create serialize as a decorator
export function Serialize(dto: ClassConstructor) {
return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor{
constructor(private dto: any) {}

intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
// Run something before a request is handled by the request handled

return handler.handle().pipe(
  map((data: any) => {
    // Run something before the response is sent out
      // data is the incoming entity
      return plainToClass(this.dto, data, {
        excludeExtraneousValues: true
      })
  })
)
}
}