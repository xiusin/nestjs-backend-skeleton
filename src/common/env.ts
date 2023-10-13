import { env } from "node:process";

export default {
    get: (key: string, value: string | null | number = null) => {
        return env[key] || value
    }
}