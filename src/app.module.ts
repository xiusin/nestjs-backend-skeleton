import { SequelizeModule } from '@nestjs/sequelize';

import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module.ts";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { JwtMiddleware } from "./middlewares/jwt.middleware.ts";
import jwtConfig from "./config/jwt.config.ts";
import databaseConfig from "./config/database.config.ts";

@Module({
    imports: [
        // MikroOrmModule.forRoot(databaseConfig),
        // SequelizeModule.forRoot({
        //     dialect: 'mysql',
        //     host: 'localhost',
        //     port: 3306,
        //     username: 'root',
        //     password: 'root',
        //     database: 'test',
        //     models: [],
        // }),

        AdminModule,

        // 配置模块
        ConfigModule.forRoot({ isGlobal: true }),

        // Jwt模块
        JwtModule.register(jwtConfig),
    ]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).forRoutes('*');
    }
}
