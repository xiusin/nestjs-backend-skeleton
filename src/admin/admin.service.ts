import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShopUser } from "../entities/ShopUser";
import { Repository } from "typeorm";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(ShopUser) private usersRepository: Repository<ShopUser>
  ) {
  }

  async findOne(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }
}
