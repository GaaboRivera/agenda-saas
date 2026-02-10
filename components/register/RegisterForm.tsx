"use client";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { signup } from "@/server/login/actions";

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }

    // Simula una llamada a la API
    const resp = await signup(email, password);

    toast.error(resp.message);
    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 ">
      <Input
        id="email"
        name="email"
        placeholder="Correo electronico"
        required
        type="email"
        className="w-full"
      />
      <Input
        id="password"
        name="password"
        placeholder="Contraseña"
        required
        type="password"
        className="w-full"
      />
      <Input
        id="confirm-password"
        name="confirm-password"
        placeholder="Confirmar Contraseña"
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
          "Registrarse"
        )}
      </Button>
    </form>
  );
};
