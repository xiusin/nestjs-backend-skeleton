import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_admin", { schema: "pddmai" })
export class ShopAdmin {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("json", { name: "role_ids" })
  roleIds: object;

  @Column("varchar", { name: "mobile", length: 11 })
  mobile: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("tinyint", { name: "status", unsigned: true, default: () => "'1'" })
  status: number;
}
