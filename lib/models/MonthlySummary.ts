import mongoose, { Schema, Types } from "mongoose";

interface ICategorySummary {
  categoryId: Types.ObjectId;
  total: number; // in cents
}

export interface IMonthlySummary {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  year: number;
  month: number; // 1–12
  totalIncome: number; // in cents
  totalExpenses: number; // in cents
  netSavings: number; // in cents (totalIncome - totalExpenses)
  byCategory: ICategorySummary[];
  expenseCount: number;
  incomeCount: number;
  computedAt: Date; // when this summary was last aggregated
  createdAt: Date;
  updatedAt: Date;
}

const CategorySummarySchema = new Schema<ICategorySummary>(
  {
    categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    total: { type: Number, required: true },
  },
  { _id: false }
);

const MonthlySummarySchema = new Schema<IMonthlySummary>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    year: { type: Number, required: true },
    month: { type: Number, required: true, min: 1, max: 12 },
    totalIncome: { type: Number, required: true, default: 0 },
    totalExpenses: { type: Number, required: true, default: 0 },
    netSavings: { type: Number, required: true, default: 0 },
    byCategory: { type: [CategorySummarySchema], default: [] },
    expenseCount: { type: Number, required: true, default: 0 },
    incomeCount: { type: Number, required: true, default: 0 },
    computedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

MonthlySummarySchema.index({ userId: 1, year: 1, month: 1 }, { unique: true });

const MonthlySummary =
  (mongoose.models.MonthlySummary as mongoose.Model<IMonthlySummary>) ||
  mongoose.model<IMonthlySummary>("MonthlySummary", MonthlySummarySchema);

export default MonthlySummary;
