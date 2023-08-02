import { Controller, Get, Inject } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { JwtService } from "@nestjs/jwt";

@Controller("admin")
export class AdminController {
  @Inject()
  private readonly service: AdminService;

  @Inject()
  private readonly jwt: JwtService;

  @Get()
  async login() {
    const user = await this.service.findOne(1);
    return {
      user: user,
      token: await this.jwt.signAsync({ id: user.id, username: user.nickname })
    };
  }
}
