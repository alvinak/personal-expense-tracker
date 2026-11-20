"use client";

import { useState } from "react";
import { Field, SubmitButton } from "../_components/field";

const MIN_PASSWORD_LENGTH = 8;

export function SignupForm() {
  const [errors, setErrors] = useState<{ password?: string; confirm?: string }>(
    {},
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // UI only: account creation is not wired up yet.
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirmPassword") ?? "");

    const next: typeof errors = {};
    if (password.length < MIN_PASSWORD_LENGTH) {
      next.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }
    if (password !== confirm) {
      next.confirm = "Passwords don't match.";
    }
    setErrors(next);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field
        label="Name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Jane Doe"
        required
      />
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
        autoComplete="new-password"
        placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
        required
        error={errors.password}
      />
      <Field
        label="Confirm password"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        placeholder="Re-enter your password"
        required
        error={errors.confirm}
      />
      <SubmitButton>Create account</SubmitButton>
    </form>
  );
}
