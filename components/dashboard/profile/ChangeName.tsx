"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { changeNameProfile } from "@/server/login/actions";
import { useState } from "react";
import { toast } from "sonner";

interface ChangeNameProps {
  name: string;
}

export const ChangeName = ({ name }: ChangeNameProps) => {
  const [newName, setNewName] = useState(name);

  const handleChangeName = async () => {
    // Lógica para cambiar el nombre del usuario
    await changeNameProfile(newName);
    toast.success("Nombre cambiado exitosamente");
  };

  return (
    <div className="my-5">
      <h2>Cambiar Nombre</h2>
      <Input
        placeholder="Nuevo nombre"
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <Button className="mt-2" onClick={handleChangeName}>
        Guardar
      </Button>
    </div>
  );
};
