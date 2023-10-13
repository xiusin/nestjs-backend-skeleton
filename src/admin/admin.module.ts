import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller.ts";
// import { TypeOrmModule } from "@nestjs/typeorm";
// import { ShopUser } from "../entities/ShopUser.ts";
import { AdminService } from "./admin.service.ts";

@Module({
    // imports: [TypeOrmModule.forFeature([ShopUser])],
    controllers: [AdminController],
    providers: [AdminService]
})
export class AdminModule {
}
