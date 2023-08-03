import { Controller, Get, Inject } from "@nestjs/common";
import AbstractController from "../abstract.controller";
import { AdminService } from "./admin.service";
import { AppModule } from "../app.module";
import { NestFactory } from "@nestjs/core";

@Controller("admin")
export class AdminController extends AbstractController {

  @Inject()
  public readonly service: AdminService;

  @Get()
  async login() {
    await this.getService();
    return this.success(this.service.findOne(1));
  }


  /**
   * 获取服务关系
   */
  async getService() {
    const app = await NestFactory.createApplicationContext(AppModule);
    console.log(app.get(AdminService));
  }

}
