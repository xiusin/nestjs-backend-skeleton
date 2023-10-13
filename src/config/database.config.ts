import env from "../common/env.ts";

export default {
    type: env.get('DB_DRIVER') || 'mysql',
    host: env.get('DB_HOST') || 'localhost',
    port: parseInt(env.get('DB_PORT', '3306') as string),
    username: env.get('DB_USERNAME') || 'root',
    password: env.get('DB_PASSWORD') || 'root',
    database: env.get('DB_DATABASE') || 'test',
    autoLoadEntities: true
}
