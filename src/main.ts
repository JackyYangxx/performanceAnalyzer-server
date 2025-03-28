import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // 获取端口，确保有默认值
  const port = configService.get<number>('port') || 3000;

  // 启用 CORS
  app.enableCors({
    origin: configService.get('cors.origin'),
    methods: configService.get('cors.methods'),
  });

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
