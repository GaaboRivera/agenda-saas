"use client";

import { sendRecoveryEmail } from "@/actions/auth/auth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ChangePasswordProps {
  email: string;
}

export const ChangePassword = (email: ChangePasswordProps) => {
  const handleResetPassword = async () => {
    // Lógica para cambiar la contraseña del usuario
    const result = await sendRecoveryEmail(email);

    if (result.success) toast.success(result.message);
    else toast.error(result.message);
  };
  return (
    <div className="my-5">
      <Button onClick={handleResetPassword}>Cambiar contraseña</Button>
    </div>
  );
};
