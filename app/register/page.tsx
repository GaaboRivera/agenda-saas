import { RegisterForm } from "@/components/register/RegisterForm";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default async function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm">
        <Link href="/">
          <div className="flex flex-col items-center justify-center mb-8">
            <div>
              <BookOpen
                className="h-12 w-12 text-foreground"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                PhoneBook
              </h2>
            </div>
          </div>
        </Link>
        <RegisterForm />
        <div className="text-center p-5">
          <Link
            href="/login"
            className="text-sm text-blue-400 hover:text-blue-500 hover:underline"
          >
            Ya tienes una cuenta? Inicia Sesion
          </Link>
        </div>
      </div>
    </div>
  );
}
