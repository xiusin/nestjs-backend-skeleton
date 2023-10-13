import { Module } from "@nestjs/common";
import { AdminController } from "./admin.controller.ts";
import { AdminService } from "./admin.service.ts";
import { PrismaService } from "../common/prisma.service.ts";

@Module({
    controllers: [AdminController],
    providers: [AdminService, PrismaService],
})
export class AdminModule {
}
