import { ForbiddenException } from '@nestjs/common';

export function checkUserIdWithSession(userId: string, userIdSession: string) {
  if (userId !== userIdSession) {
    throw new ForbiddenException("You don't have permission");
  }
}