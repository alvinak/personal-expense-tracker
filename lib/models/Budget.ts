import mongoose, { Schema, Types } from "mongoose";

export interface IBudget {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  categoryId: Types.ObjectId;
  year: number;
  month: number; // 1–12
  amount: number; // stored in cents
  createdAt: Date;
  updatedAt: Date;
}

const BudgetSchema = new Schema<IBudget>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true, min: 1, max: 12 },
    amount: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

BudgetSchema.index(
  { userId: 1, categoryId: 1, year: 1, month: 1 },
  { unique: true }
);

const Budget =
  (mongoose.models.Budget as mongoose.Model<IBudget>) ||
  mongoose.model<IBudget>("Budget", BudgetSchema);

export default Budget;
