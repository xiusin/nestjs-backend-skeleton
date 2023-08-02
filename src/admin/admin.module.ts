import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopUser } from "../entities/ShopUser";
import { AdminService } from "./admin.service";

@Module({
  imports: [TypeOrmModule.forFeature([ShopUser])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {
}
