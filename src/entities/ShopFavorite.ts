import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index(
  "idx_user_id_entity_type_entity_id",
  ["userId", "entityType", "entityId"],
  {}
)
@Entity("shop_favorite", { schema: "pddmai" })
export class ShopFavorite {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "entity_type", length: 255 })
  entityType: string;

  @Column("int", { name: "entity_id", unsigned: true, default: () => "'0'" })
  entityId: number;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
