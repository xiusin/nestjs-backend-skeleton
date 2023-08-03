export interface Response {
  code: number;
  message: string | Error;
  data: object;
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
    return <Response>{ "code": 200, "message": message, "data": data };
  }

  /**
   * 响应异常数据
   * @param message 消息内容
   * @param data
   * @return Response
   */
  error(message: string | Error = "failed", data: object = null) {
    return <Response>{ "code": 500, "message": message, "data": data };
  }

}
