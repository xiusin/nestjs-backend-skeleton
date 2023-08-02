import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_dict", { schema: "pddmai" })
export class ShopDict {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "group_key", length: 255 })
  groupKey: string;

  @Column("varchar", { name: "dict_key", nullable: true, length: 255 })
  dictKey: string | null;

  @Column("varchar", { name: "dict_name", nullable: true, length: 255 })
  dictName: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
