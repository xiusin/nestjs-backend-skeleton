import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_product", { schema: "pddmai" })
export class ShopProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "product_name", nullable: true, length: 255 })
  productName: string | null;

  @Column("decimal", {
    name: "origin_price",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  originPrice: string | null;

  @Column("int", {
    name: "price",
    nullable: true,
    comment: "到手价",
    unsigned: true,
  })
  price: number | null;

  @Column("int", { name: "brand_id", nullable: true })
  brandId: number | null;

  @Column("int", {
    name: "stock",
    nullable: true,
    comment: "库存",
    unsigned: true,
    default: () => "'0'",
  })
  stock: number | null;

  @Column("varchar", {
    name: "sale_type",
    comment: "销售类型",
    length: 255,
    default: () => "'SALE_TYPE_PLATFORM'",
  })
  saleType: string;

  @Column("tinyint", { name: "status", nullable: true, default: () => "'0'" })
  status: number | null;

  @Column("varchar", {
    name: "image_url",
    nullable: true,
    comment: "默认图片",
    length: 255,
  })
  imageUrl: string | null;

  @Column("json", { name: "image_urls", nullable: true })
  imageUrls: object | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;

  @Column("int", {
    name: "category_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  categoryId: number | null;

  @Column("int", { name: "quality_id", nullable: true, default: () => "'0'" })
  qualityId: number | null;

  @Column("int", { name: "style_id", nullable: true, default: () => "'0'" })
  styleId: number | null;

  @Column("int", { name: "element_id", nullable: true, default: () => "'0'" })
  elementId: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("tinyint", { name: "is_live", default: () => "'0'" })
  isLive: number;
}
