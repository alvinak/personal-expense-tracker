import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <>
      <div className="mb-6 space-y-1 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Log in to keep track of your spending.
        </p>
      </div>
      <LoginForm />
      <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-emerald-600 hover:underline dark:text-emerald-500"
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
