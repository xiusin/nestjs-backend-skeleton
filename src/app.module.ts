import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { JwtMiddleware } from "./middlewares/jwt.middleware";
import { AdminController } from "./admin/admin.controller";
import jwtConfig from "./config/jwt.config";
import {env} from "process";

@Module({
  imports: [
    AdminModule,
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register(jwtConfig),

    // 注册TypeOrm模块
    TypeOrmModule.forRoot({
      type: "mysql",
      host: env.DB_HOST,
      port: parseInt(env.DB_PORT),
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      autoLoadEntities: true
    })
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes(AdminController);
  }
}
