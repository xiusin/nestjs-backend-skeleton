import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_payment_callback_record", { schema: "pddmai" })
export class ShopPaymentCallbackRecord {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "order_id", nullable: true })
  orderId: number | null;

  @Column("varchar", { name: "order_no", nullable: true, length: 255 })
  orderNo: string | null;

  @Column("varchar", { name: "payment_type", nullable: true, length: 255 })
  paymentType: string | null;

  @Column("json", { name: "callback_data", nullable: true })
  callbackData: object | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
