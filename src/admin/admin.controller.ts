import { Controller, Get } from "@nestjs/common";
import AbstractController from "../abstract.controller";

@Controller("admin")
export class AdminController extends AbstractController {
  @Get()
  async login() {
    return this.success()
  }
}
