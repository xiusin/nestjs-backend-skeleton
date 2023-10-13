import { Global, Inject, Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service.ts";

@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class CommonModule { }
