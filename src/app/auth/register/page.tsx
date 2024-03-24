"use client";

import { useRegister } from "@/api";
import { Button } from "@/components/elements";
import { TextField } from "@/components/forms";
import { RegisterDTO } from "@/types/auth";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Register() {
  const form = useForm<RegisterDTO>();
  const register = useRegister();

  const handleSubmit = form.handleSubmit((data) => {
    register.mutate(
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
      <h1 className="font-bold text-2xl mb-2">Register</h1>
      <form className="space-y-3 mt-2" onSubmit={handleSubmit}>
        <div>
          <TextField
            {...form.register("name")}
            name="name"
            label="Name"
            error={form.formState.errors["name"]?.message}
          />
        </div>
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
            Register
          </Button>
        </div>
      </form>
      <div className="border-t border-slate-200 mt-4">
        <div className="py-4 text-slate-700 text-sm">
          Already have account?{" "}
          <Link
            href="/auth/login"
            className="text-sunglow-600 hover:text-sunglow-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
