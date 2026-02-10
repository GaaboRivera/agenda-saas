"use client";
import { useState } from "react";

import { Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { setNewPassword } from "@/server/login/actions";
import { redirect } from "next/navigation";

export const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      setIsLoading(false);
      return;
    }

    // llamada a la API para restablecer la contraseña
    await setNewPassword(password);

    setIsLoading(false);
    toast.success("Contraseña restablecida correctamente");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 ">
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
          "Restablecer contraseña"
        )}
      </Button>
    </form>
  );
};
