"use client";
import { useState } from "react";

import { signinAction } from "@/server/auth/auth";
import { Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Simula una llamada a la API
    await signinAction(email, password);

    toast.error("Correo o contraseña incorrectos");
    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 ">
      <Input
        id="email"
        name="email"
        placeholder="Correo electronico - demo@demo.com"
        required
        type="email"
        className="w-full"
      />
      <Input
        id="password"
        name="password"
        placeholder="Contrasena - 12345"
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
