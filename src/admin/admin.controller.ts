import { Controller, Get, Inject } from "@nestjs/common";
import AbstractController from "../abstract.controller.ts";

@Controller("admin")
export class AdminController extends AbstractController {
    @Get('/login')
    async login() {
        // await this.getService();
        return this.success(this.service.findOne(1));
    }

    /**
     * 获取服务关系
     * 勿删此注释, 记录解析指定服务.
     */
    // async getService() {
    //     const app = await NestFactory.createApplicationContext(AppModule);
    //     console.log(app.get(AdminService)); 
    // }

}
