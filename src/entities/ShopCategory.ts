import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_category", { schema: "pddmai" })
export class ShopCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "category_name", nullable: true, length: 255 })
  categoryName: string | null;

  @Column("int", {
    name: "parent_id",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  parentId: number | null;

  @Column("tinyint", { name: "sort", nullable: true, default: () => "'0'" })
  sort: number | null;

  @Column("varchar", { name: "icon_url", nullable: true, length: 255 })
  iconUrl: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
