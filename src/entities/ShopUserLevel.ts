import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_user_level", { schema: "pddmai" })
export class ShopUserLevel {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "level_name", nullable: true, length: 255 })
  levelName: string | null;

  @Column("int", {
    name: "level_min_score",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  levelMinScore: number | null;

  @Column("tinyint", {
    name: "status",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  status: number | null;
}
