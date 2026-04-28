import mongoose, { Schema, Types } from "mongoose";

export interface ICategory {
  _id: Types.ObjectId;
  userId: Types.ObjectId | null; // null = system default visible to all users
  name: string;
  color: string;
  icon?: string;
  type: "expense" | "income" | "both";
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema<ICategory>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", default: null },
    name: { type: String, required: true, trim: true },
    color: { type: String, required: true },
    icon: { type: String },
    type: { type: String, enum: ["expense", "income", "both"], required: true },
    isArchived: { type: Boolean, default: false },
  },
  { timestamps: true }
);

CategorySchema.index({ userId: 1, name: 1 }, { unique: true });

const Category =
  (mongoose.models.Category as mongoose.Model<ICategory>) ||
  mongoose.model<ICategory>("Category", CategorySchema);

export default Category;
