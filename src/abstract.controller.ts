import { Inject, Logger } from "@nestjs/common";
import { AdminService } from "./admin/admin.service";

/**
 * 响应结构体
 */
export interface Response {
    code: StatusCode;
    message: string | Error | object;
    data: object;
}

/**
 * 响应状态码
 */
enum StatusCode {
    OK = 200,
    ERR = 500
}

export default abstract class AbstractController {

    @Inject(AdminService)
    public readonly service: AdminService;

    public readonly logger: Logger;

    /**
     * 构造控制器专属服务
     */
    constructor() {
        console.log(this.constructor.name + '::constructor');
        this.logger = new Logger(this.constructor.name);
    }

    /**
     * 响应成功数据
     * @param message
     * @param data
     * @return Response
     */
    success(message: string | object = "success", data: unknown = null) {
        if (typeof message === "object" && data === null) {
            data = message as object;
            message = "success";
        }
        return <Response>{ "code": StatusCode.OK, "message": message, "data": data };
    }

    /**
     * 响应异常数据
     * @param message 消息内容
     * @param data
     * @return Response
     */
    error(message: string | Error = "failed", data: unknown = null) {
        if (message instanceof Error) {
            const err = message.stack?.split("\n").filter((it: string) => !it.includes("node_modules")).join("\n")
            this.logger.error(err);
            message = message.message;
        }

        return <Response>{ "code": StatusCode.ERR, "message": message, "data": data };
    }
}
