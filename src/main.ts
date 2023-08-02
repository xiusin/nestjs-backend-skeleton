import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import compression from '@fastify/compress';
import {
  FastifyAdapter,
  NestFastifyApplication
} from "@nestjs/platform-fastify";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false })
  );

  app.enableCors();
  await app.register(compression);

  await app.listen(3000, "0.0.0.0");
  console.log(`Application is running on: http://localhost:3000/`);
}

bootstrap();
