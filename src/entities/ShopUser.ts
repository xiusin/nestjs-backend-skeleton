import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_user", { schema: "pddmai" })
export class ShopUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nickname", nullable: true, length: 255 })
  nickname: string | null;

  @Column("varchar", { name: "avatar", nullable: true, length: 255 })
  avatar: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 255 })
  mobile: string | null;

  @Column("varchar", { name: "sex", nullable: true, length: 255 })
  sex: string | null;

  @Column("varchar", { name: "wechat_id", nullable: true, length: 32 })
  wechatId: string | null;

  @Column("date", { name: "birthday", nullable: true, comment: "生日" })
  birthday: string | null;

  @Column("varchar", { name: "remark", nullable: true, length: 255 })
  remark: string | null;

  @Column("varchar", {
    name: "occupation",
    nullable: true,
    comment: "职位",
    length: 255,
  })
  occupation: string | null;

  @Column("int", { name: "level_id", nullable: true, comment: "会员等级ID" })
  levelId: number | null;

  @Column("decimal", {
    name: "balance",
    unsigned: true,
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  balance: string;

  @Column("int", {
    name: "score",
    nullable: true,
    comment: "积分",
    unsigned: true,
    default: () => "'0'",
  })
  score: number | null;

  @Column("varchar", { name: "invite_code", nullable: true, length: 255 })
  inviteCode: string | null;

  @Column("varchar", { name: "apple_id", nullable: true, length: 50 })
  appleId: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", {
    name: "invite_user_id",
    nullable: true,
    default: () => "'0'",
  })
  inviteUserId: number | null;

  @Column("varchar", { name: "password", nullable: true, length: 60 })
  password: string | null;
}
