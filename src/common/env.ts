import { env } from "process";

export default {
    get: (key: string, _default: string | null | number = null) => {
        return env[key] || _default
    }
}