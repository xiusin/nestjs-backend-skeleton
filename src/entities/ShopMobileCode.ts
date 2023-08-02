import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_mobile_code", { schema: "pddmai" })
export class ShopMobileCode {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "mobile",
    nullable: true,
    comment: "手机号",
    length: 255,
  })
  mobile: string | null;

  @Column("varchar", {
    name: "type",
    nullable: true,
    comment: "验证码类型",
    length: 255,
  })
  type: string | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "验证码内容",
    length: 255,
  })
  code: string | null;

  @Column("datetime", {
    name: "expire_time",
    nullable: true,
    comment: "过期时间",
  })
  expireTime: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
