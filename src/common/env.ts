// import { env } from "process"; // bun or node
import { env } from "node:process";

export default {
    get: (key: string, _default: string | null | number = null) => {
        return env[key] || _default
    }
}