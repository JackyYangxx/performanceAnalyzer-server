import { Module } from '@nestjs/common';
import { HttpModule as AxiosHttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpService } from './http.service';

@Module({
  imports: [
    AxiosHttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        timeout: configService.get('externalApi.timeout'),
        maxRedirects: 5,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [HttpService],
  exports: [HttpService],
})
export class HttpModule {}
