import env from "../common/env.ts";

export default {
    global: true,
    secret: env.get('JWT_SECRET', 'secret') as string,
    signOptions: { expiresIn: env.get('JWT_TTL', '3600s') as string }
}
