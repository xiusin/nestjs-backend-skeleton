import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_brand", { schema: "pddmai" })
export class ShopBrand {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "brand_name", nullable: true, length: 255 })
  brandName: string | null;

  @Column("varchar", { name: "brand_en_name", nullable: true, length: 255 })
  brandEnName: string | null;

  @Column("int", {
    name: "sort",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sort: number | null;

  @Column("varchar", { name: "brand_icon", nullable: true, length: 255 })
  brandIcon: string | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("varchar", { name: "product_icon", nullable: true, length: 255 })
  productIcon: string | null;

  @Column("tinyint", {
    name: "is_hot",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isHot: boolean | null;

  @Column("tinyint", {
    name: "is_new",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isNew: boolean | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
