import { Get, Controller, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

  @Get('/pages/*')
  root(@Res() res: Response) {
    const url = res.req ? res.req.url: ''
    return res.render(
      'index',
      { message: 'Hello world!', url },
    );
  }
}
