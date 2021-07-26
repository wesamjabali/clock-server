import { Injectable } from '@nestjs/common';
import UserInfo from 'src/dto/user.dto';

@Injectable()
export class ClockService {
  getUser(id: number): UserInfo {
    return { first: id.toString(), last: 'b', username: 'p', email: 'e' };
  }
}
