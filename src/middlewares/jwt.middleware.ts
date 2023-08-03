import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  @Inject()
  private readonly service: JwtService;

  use(req: any, res: any, next: () => void) {
    // console.log(req.headers); // parse
    console.log(this.service.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiLpmYjmiJDlvazwn5iC8J-NgyIsImlhdCI6MTY5MDk1Mzg4NCwiZXhwIjoxNjkwOTU3NDg0fQ.orJVK_bjb7CACTFoxZU5gXZX_ZbmgesvXLztbvJwMjQ"))

    next(); // TODO 终止请求

    return res
  }
}
