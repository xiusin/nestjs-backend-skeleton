import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_user_coupon", { schema: "pddmai" })
export class ShopUserCoupon {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "coupon_id", nullable: true })
  couponId: number | null;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("datetime", { name: "used_time", nullable: true })
  usedTime: Date | null;

  @Column("datetime", { name: "expire_time", nullable: true })
  expireTime: Date | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
