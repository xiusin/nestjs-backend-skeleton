import { env } from "process";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";

export default <TypeOrmModuleOptions>{
  type: "mysql",
  host: env.DB_HOST || 'localhost',
  port: parseInt(env.DB_PORT) || 3306,
  username: env.DB_USERNAME || 'root',
  password: env.DB_PASSWORD || 'root',
  database: env.DB_DATABASE || 'test',
  autoLoadEntities: true
}
