import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_address", { schema: "pddmai" })
export class ShopAddress {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @Column("varchar", { name: "address_name", nullable: true, length: 255 })
  addressName: string | null;

  @Column("varchar", { name: "address_line1", nullable: true, length: 255 })
  addressLine1: string | null;

  @Column("varchar", { name: "address_line2", nullable: true, length: 255 })
  addressLine2: string | null;

  @Column("varchar", { name: "province", nullable: true, length: 255 })
  province: string | null;

  @Column("varchar", { name: "city", nullable: true, length: 255 })
  city: string | null;

  @Column("varchar", { name: "postal_code", nullable: true, length: 255 })
  postalCode: string | null;

  @Column("tinyint", {
    name: "default_shipping",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  defaultShipping: number | null;

  @Column("tinyint", {
    name: "default_returns",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  defaultReturns: number | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
