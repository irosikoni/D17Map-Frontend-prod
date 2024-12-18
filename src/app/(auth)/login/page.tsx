import { login } from "@/auth/login";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="m-auto w-[25vw] justify-center rounded-md bg-white/25 p-10">
      <form
        action={async (formData) => {
          "use server";
          const username = formData.get("username") as string | undefined;
          const password = formData.get("password") as string | undefined;
          if (!username || !password) {
            return;
          }
          await login(username, password);
        }}
        className="flex flex-col gap-4"
      >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button
          type="submit"
          className="w-44 self-center rounded-md border-b-2 border-l-2 border-primary p-2"
        >
          Login
        </button>
        <Link
          className="w-44 self-center rounded-md border-b-2 border-l-2 border-primary p-2 text-center"
          href="/register"
        >
          Nowy
        </Link>
      </form>
    </div>
  );
}
