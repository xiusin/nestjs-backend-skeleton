import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_order_item", { schema: "pddmai" })
export class ShopOrderItem {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "order_id",
    comment: "关联订单ID",
    default: () => "'0'",
  })
  orderId: number;

  @Column("int", { name: "user_id", comment: "创建人ID" })
  userId: number;

  @Column("int", { name: "seller_user_id", comment: "卖家ID" })
  sellerUserId: number;

  @Column("int", { name: "product_id", comment: "商品ID" })
  productId: number;

  @Column("int", { name: "count", comment: "数量" })
  count: number;

  @Column("varchar", { name: "product_name", comment: "商品名称", length: 255 })
  productName: string;

  @Column("varchar", { name: "img_url", comment: "商品图", length: 255 })
  imgUrl: string;

  @Column("decimal", {
    name: "price",
    comment: "购买时价格",
    precision: 10,
    scale: 2,
  })
  price: string;

  @Column("decimal", {
    name: "total_amount",
    comment: "总价格",
    precision: 10,
    scale: 2,
  })
  totalAmount: string;

  @Column("datetime", { name: "cart_time", comment: "加入购物车时间" })
  cartTime: Date;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;
}
