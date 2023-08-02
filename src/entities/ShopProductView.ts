import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("uni_user_id_product_id", ["userId", "productId"], { unique: true })
@Entity("shop_product_view", { schema: "pddmai" })
export class ShopProductView {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "product_id" })
  productId: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
