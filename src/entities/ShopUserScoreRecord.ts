import { Column, Entity } from "typeorm";

@Entity("shop_user_score_record", { schema: "pddmai" })
export class ShopUserScoreRecord {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", {
    name: "score",
    comment: "变化后积分数",
    default: () => "'0'",
  })
  score: number;

  @Column("int", { name: "change_score", comment: "变化数" })
  changeScore: number;

  @Column("text", { name: "reason" })
  reason: string;

  @Column("datetime", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("datetime", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
