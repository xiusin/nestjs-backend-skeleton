import { Controller, Get, Inject } from "@nestjs/common";
import AbstractController from "../abstract.controller.ts";
import { AdminService } from "./admin.service.ts";
import { AppModule } from "../app.module.ts";
import { NestFactory } from "@nestjs/core";

@Controller("admin")
export class AdminController extends AbstractController {
    // constructor(@Inject(AdminService) public readonly service: AdminService) { super(); }

    @Get()
    async login() {
        // await this.getService();
        return this.success(this.service.findOne(1));
    }


    /**
     * 获取服务关系
     */
    // async getService() {
    //     const app = await NestFactory.createApplicationContext(AppModule);
    //     console.log(app.get(AdminService));
    // }

}
