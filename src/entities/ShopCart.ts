import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uk_user_product", ["userId", "productId"], { unique: true })
@Entity("shop_cart", { schema: "pddmai" })
export class ShopCart {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", comment: "用户ID", default: () => "'0'" })
  userId: number;

  @Column("int", {
    name: "product_id",
    comment: "商品ID",
    default: () => "'0'",
  })
  productId: number;

  @Column("int", {
    name: "count",
    comment: "选择数量",
    unsigned: true,
    default: () => "'0'",
  })
  count: number;

  @Column("tinyint", {
    name: "is_checked",
    comment: "是否选择",
    unsigned: true,
    default: () => "'0'",
  })
  isChecked: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
