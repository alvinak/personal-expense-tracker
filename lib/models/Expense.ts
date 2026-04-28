import mongoose, { Schema, Types } from "mongoose";

export interface IExpense {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  categoryId: Types.ObjectId;
  amount: number; // stored in cents to avoid floating-point precision issues
  type: "expense" | "income";
  description: string;
  date: Date; // transaction date (user-supplied), not createdAt
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ExpenseSchema = new Schema<IExpense>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    amount: { type: Number, required: true, min: 1 },
    type: { type: String, enum: ["expense", "income"], required: true },
    description: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

ExpenseSchema.index({ userId: 1, date: -1 });
ExpenseSchema.index({ userId: 1, categoryId: 1 });

const Expense =
  (mongoose.models.Expense as mongoose.Model<IExpense>) ||
  mongoose.model<IExpense>("Expense", ExpenseSchema);

export default Expense;
