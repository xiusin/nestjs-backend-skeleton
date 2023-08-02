import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_order", { schema: "pddmai" })
export class ShopOrder {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "order_no", length: 255 })
  orderNo: string;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "status" })
  status: number;

  @Column("json", { name: "product_ids" })
  productIds: object;

  @Column("int", { name: "address_id", nullable: true })
  addressId: number | null;

  @Column("varchar", { name: "address_name", nullable: true, length: 255 })
  addressName: string | null;

  @Column("varchar", { name: "address_info", nullable: true, length: 255 })
  addressInfo: string | null;

  @Column("varchar", { name: "order_type", length: 255 })
  orderType: string;

  @Column("decimal", { name: "price", precision: 10, scale: 2 })
  price: string;

  @Column("int", { name: "express_id", nullable: true })
  expressId: number | null;

  @Column("int", { name: "express_no", nullable: true })
  expressNo: number | null;

  @Column("json", { name: "express_info", nullable: true })
  expressInfo: object | null;

  @Column("datetime", { name: "express_time", nullable: true })
  expressTime: Date | null;

  @Column("int", { name: "refund_express_id", nullable: true })
  refundExpressId: number | null;

  @Column("int", { name: "refund_express_no", nullable: true })
  refundExpressNo: number | null;

  @Column("json", { name: "refund_express_info", nullable: true })
  refundExpressInfo: object | null;

  @Column("text", { name: "remark", nullable: true })
  remark: string | null;

  @Column("int", { name: "payment_id", comment: "支付方式ID" })
  paymentId: number;

  @Column("varchar", { name: "out_trade_no", nullable: true, length: 100 })
  outTradeNo: string | null;

  @Column("int", { name: "is_negotiate", default: () => "'0'" })
  isNegotiate: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
