import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Repository } from "typeorm";

@Injectable()
export class AdminService {
    constructor(
        // @InjectRepository(ShopUser) private usersRepository: Repository<ShopUser>
    ) {
    }

    async findOne(id: number) {
        console.log(`find one ${id}`);
        // return await this.usersRepository.findOneBy({ id });
    }
}
