import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("shop_coupon", { schema: "pddmai" })
export class ShopCoupon {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "coupon_name",
    nullable: true,
    comment: "优惠券名称",
    length: 255,
  })
  couponName: string | null;

  @Column("varchar", {
    name: "remark",
    nullable: true,
    comment: "备注",
    length: 255,
  })
  remark: string | null;

  @Column("varchar", {
    name: "coupon_type",
    nullable: true,
    comment: "优惠券类型",
    length: 255,
  })
  couponType: string | null;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    comment: "是否可用",
    unsigned: true,
    default: () => "'0'",
  })
  isActive: number | null;

  @Column("int", {
    name: "stock",
    nullable: true,
    comment: "总数",
    unsigned: true,
    default: () => "'0'",
  })
  stock: number | null;

  @Column("tinyint", {
    name: "limit_num",
    nullable: true,
    comment: "每人限制数量， 0为不限",
    default: () => "'0'",
  })
  limitNum: number | null;

  @Column("datetime", {
    name: "expiration_date",
    nullable: true,
    comment: "过期时间",
  })
  expirationDate: Date | null;

  @Column("varchar", {
    name: "use_scope",
    nullable: true,
    comment: "可用范围",
    length: 255,
  })
  useScope: string | null;

  @Column("json", { name: "scope_values", nullable: true, comment: "范围值" })
  scopeValues: object | null;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    comment: "优惠券额度，用于满减券",
    precision: 10,
    scale: 2,
  })
  amount: string | null;

  @Column("decimal", {
    name: "enough",
    nullable: true,
    comment: "消费满",
    precision: 10,
    scale: 2,
  })
  enough: string | null;

  @Column("decimal", {
    name: "discount",
    nullable: true,
    comment: "折扣，用于折扣券",
    precision: 10,
    scale: 2,
  })
  discount: string | null;

  @Column("decimal", {
    name: "max_amount",
    nullable: true,
    comment: "最多优惠额度",
    precision: 10,
    scale: 2,
  })
  maxAmount: string | null;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
