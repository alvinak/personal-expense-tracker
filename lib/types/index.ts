import type { HydratedDocument } from "mongoose";
import type { IUser } from "@/lib/models/User";
import type { ICategory } from "@/lib/models/Category";
import type { IExpense } from "@/lib/models/Expense";
import type { IBudget } from "@/lib/models/Budget";
import type { IMonthlySummary } from "@/lib/models/MonthlySummary";

// Hydrated document types — use these inside Server Actions and API routes
// where you work with live Mongoose documents.
export type UserDocument = HydratedDocument<IUser>;
export type CategoryDocument = HydratedDocument<ICategory>;
export type ExpenseDocument = HydratedDocument<IExpense>;
export type BudgetDocument = HydratedDocument<IBudget>;
export type MonthlySummaryDocument = HydratedDocument<IMonthlySummary>;

// Plain interface re-exports — use these in Server Components and anywhere
// you pass serialised data (e.g. after .lean() or JSON serialisation).
export type { IUser, ICategory, IExpense, IBudget, IMonthlySummary };
