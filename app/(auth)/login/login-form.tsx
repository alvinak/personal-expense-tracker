"use client";

import { Field, SubmitButton } from "../_components/field";

export function LoginForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // UI only: authentication is not wired up yet.
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
      />
      <Field
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
        required
      />
      <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <input
          type="checkbox"
          name="remember"
          className="size-4 rounded border-zinc-300 accent-emerald-600"
        />
        Remember me
      </label>
      <SubmitButton>Log in</SubmitButton>
    </form>
  );
}
