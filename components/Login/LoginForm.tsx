"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    // Simula una llamada a la API
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 2000);
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        id="email"
        placeholder="Correo electronico"
        required
        type="email"
        className="w-full"
      />
      <Input
        id="password"
        placeholder="Contrasena"
        required
        type="password"
        className="w-full"
      />
      <Button
        className="w-full bg-gray-800 hover:bg-gray-700 text-white cursor-pointer"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Iniciar sesión"
        )}
      </Button>
    </form>
  );
};
