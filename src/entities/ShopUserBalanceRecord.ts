import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_user_balance_record", { schema: "pddmai" })
export class ShopUserBalanceRecord {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("decimal", {
    name: "balance",
    comment: "变化后余额",
    precision: 10,
    scale: 0,
    default: () => "'0'",
  })
  balance: string;

  @Column("decimal", {
    name: "change_balance",
    comment: "变化余额",
    precision: 10,
    scale: 0,
  })
  changeBalance: string;

  @Column("text", { name: "reason" })
  reason: string;

  @Column("varchar", { name: "change_type", comment: "变化类型", length: 50 })
  changeType: string;

  @Column("int", {
    name: "entity_id",
    comment: "变化类型对应实体ID",
    unsigned: true,
  })
  entityId: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
