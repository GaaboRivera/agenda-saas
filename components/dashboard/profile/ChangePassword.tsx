"use client";

import { Button } from "@/components/ui/button";
import { resetPassword } from "@/server/login/actions";
import { toast } from "sonner";

export const ChangePassword = () => {
  const handleResetPassword = async () => {
    const host = window.location.origin;

    // Lógica para cambiar la contraseña del usuario
    const result = await resetPassword(host);

    if (result)
      toast.success("Se ha enviado un correo para restablecer la contraseña");
    else
      toast.error("No se pudo enviar el correo para restablecer la contraseña");
  };
  return (
    <div className="my-5">
      <Button onClick={handleResetPassword}>Cambiar contraseña</Button>
    </div>
  );
};
