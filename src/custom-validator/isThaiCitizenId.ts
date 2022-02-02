import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsThaiCitizenId(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isThaiCitizenId',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          if (!/^[0-9]{13}$/g.test(value)) {
            return false
          }
          var i; 
          var sum = 0
          for ((i = 0), (sum = 0); i < 12; i++) {
            sum += Number.parseInt(value.charAt(i)) * (13 - i)
          }
          const checkSum = (11 - sum % 11) % 10
          if (checkSum === Number.parseInt(value.charAt(12))) {
            return true
          }
          return false
        },
      },
    });
  };
}