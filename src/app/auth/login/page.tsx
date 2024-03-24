"use client";

import { useLogin } from "@/api";
import { Button } from "@/components/elements";
import { TextField } from "@/components/forms";
import { LoginDTO } from "@/types/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const form = useForm<LoginDTO>();
  const login = useLogin();

  const handleSubmit = form.handleSubmit((data) => {
    login.mutate(
      { data },
      {
        onError: ({ response }) => {
          const errors = response?.data.errors;
          const message = response?.data.message;

          if (!errors) return form.setError("root", { message });

          for (const key of Object.keys(errors)) {
            form.setError(key as any, { message: errors[key] });
          }
        },
      }
    );
  });

  return (
    <div className="max-w-xs sm:max-w-sm w-full px-4">
      <h1 className="font-bold text-2xl mb-2">Sign In</h1>
      <form className="space-y-3 mt-2" onSubmit={handleSubmit}>
        <div>
          <TextField
            {...form.register("username")}
            name="username"
            label="Username"
            error={form.formState.errors["username"]?.message}
          />
        </div>
        <div>
          <TextField
            {...form.register("password")}
            name="password"
            label="Password"
            type="password"
            error={form.formState.errors["password"]?.message}
          />
        </div>
        <div className="flex items-center justify-between py-3">
          <Button className="text-sm" type="submit">
            Login
          </Button>
        </div>
      </form>
      <div className="border-t border-slate-200 mt-4">
        <div className="py-4 text-slate-700 text-sm">
          Not registered yet?{" "}
          <Link
            href="/auth/register"
            className="text-sunglow-600 hover:text-sunglow-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
