import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsThaiPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isThaiPhoneNumber',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          if (!value)
            return false;
          return value.length === 10 && (value.startsWith("08") || value.startsWith("09") || value.startsWith("06"))
        },
      },
    });
  };
}