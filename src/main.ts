import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import compression from "@fastify/compress";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import fastifyCsrf from "@fastify/csrf-protection";
import helmet from "@fastify/helmet";
import {
  FastifyAdapter,
  NestFastifyApplication
} from "@nestjs/platform-fastify";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());


  const options = new DocumentBuilder()
    .setTitle("admin api")
    .setDescription("The admin API description")
    .setVersion("1.0")
    .addTag("admin")
    // .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("doc", app, document);

  app.setGlobalPrefix("/v1/api");
  app.enableCors();
  await app.register(helmet);
  await app.register(compression);
  await app.register(fastifyCsrf, { cookieOpts: { signed: true } });
  await app.listen(3000, "0.0.0.0");
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
