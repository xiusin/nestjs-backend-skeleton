import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_banner", { schema: "pddmai" })
export class ShopBanner {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", nullable: true, length: 255 })
  title: string | null;

  @Column("varchar", { name: "image_url", nullable: true, length: 255 })
  imageUrl: string | null;

  @Column("varchar", { name: "link", nullable: true, length: 255 })
  link: string | null;

  @Column("varchar", { name: "is_active", nullable: true, length: 255 })
  isActive: string | null;

  @Column("int", {
    name: "sort",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sort: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
