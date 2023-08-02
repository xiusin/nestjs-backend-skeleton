import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_payment", { schema: "pddmai" })
export class ShopPayment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("varchar", {
    name: "class",
    nullable: true,
    comment: "处理类",
    length: 255,
  })
  class: string | null;

  @Column("varchar", { name: "icon", nullable: true, length: 100 })
  icon: string | null;

  @Column("json", { name: "config", nullable: true, comment: "对应平台配置" })
  config: object | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
