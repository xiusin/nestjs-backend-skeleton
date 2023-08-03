import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { JwtMiddleware } from "./middlewares/jwt.middleware";
import jwtConfig from "./config/jwt.config";
import databaseConfig from "./config/database.config";

@Module({
  imports: [
    AdminModule,

    // 配置模块
    ConfigModule.forRoot({ isGlobal: true }),

    // Jwt模块
    JwtModule.register(jwtConfig),

    // 注册TypeOrm模块
    TypeOrmModule.forRoot(databaseConfig)
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*');
  }
}
