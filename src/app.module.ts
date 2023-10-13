import { Global, MiddlewareConsumer, Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module.ts";
import { ConfigModule } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { JwtMiddleware } from "./middlewares/jwt.middleware.ts";
import jwtConfig from "./config/jwt.config.ts";
import { CommonModule } from "./common/common.module.ts";

@Module({
    imports: [
        CommonModule,
        AdminModule,
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.register(jwtConfig),
    ]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).forRoutes('*');
    }
}
