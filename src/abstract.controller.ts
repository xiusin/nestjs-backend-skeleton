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
  /**
   * 响应成功数据
   * @param message
   * @param data
   * @return Response
   */
  success(message: string | object = "success", data: object = null) {
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
  error(message: string | Error = "failed", data: object = null) {
    return <Response>{ "code": StatusCode.ERR, "message": message, "data": data };
  }

}
