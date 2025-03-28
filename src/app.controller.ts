import { Controller, Get, Post, Body, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from './http/http.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get('/health')
  healthCheck() {
    return this.appService.healthCheck();
  }

  @Get('/proxy/get')
  async proxyGet(
    @Query('path') path: string,
    @Query() queryParams: any,
    @Headers() headers: any,
  ) {
    return this.httpService.get(path, queryParams, headers);
  }

  @Post('/proxy/post')
  async proxyPost(
    @Query('path') path: string,
    @Body() body: any,
    @Headers() headers: any,
  ) {
    return this.httpService.post(path, body, headers);
  }
}
