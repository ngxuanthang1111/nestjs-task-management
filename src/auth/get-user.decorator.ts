import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  async (_data, req): Promise<User> => {
    return req.args[0].user;
  },
);
