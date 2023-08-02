export default abstract class AbstractController {
  /**
   * 响应成功数据
   * @param message
   * @param data
   */
  success(message: string | object = "success", data: object = null) {
    if (typeof message === "object" && data === null) {
      data = message as object;
      message = "success";
    }
    return { "code": 200, "message": message, "data": data };
  }

  /**
   * 响应异常数据
   * @param message 消息内容
   * @param data
   */
  error(message: string|Error = "failed", data: object = null) {
    return { "code": 500, "message": message, "data": data };
  }

}
