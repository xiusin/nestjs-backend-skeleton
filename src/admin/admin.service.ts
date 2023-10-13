import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma.service.ts";

@Injectable()
export class AdminService {
    constructor(
        @Inject(PrismaService) private prisma: PrismaService
    ) { }

    async findOne(id: number) {
        const ret = await this.prisma.user.findFirst({ where: { id } })
        console.log(`find one ${id} -> ${ret}`);
        return ret;
    }
}
