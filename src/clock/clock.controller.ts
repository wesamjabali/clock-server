import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import UserInfo from '../dto/user.dto';
import { ClockService } from './clock.service';

@Controller({ path: 'clock' })
export class ClockController {
  constructor(private readonly clockService: ClockService) {}

  @Get(':id')
  getUser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): UserInfo {
    return this.clockService.getUser(id);
  }
}
