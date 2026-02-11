"use client";
import { createNewContact } from "@/actions/database/contacts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { create } from "domain";
import { useState } from "react";
import { toast } from "sonner";

interface CreateContactDialogProps {
  // Define any props if needed
  getContacts: () => Promise<void>;
}

export function CreateContactDialog({ getContacts }: CreateContactDialogProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [informacion, setInformacion] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
    age: 0,
  });

  const handleSaveNewContact = async (e: React.FormEvent) => {
    // Aquí puedes agregar la lógica para enviar la información al servidor o a tu base de datos
    setLoading(true);
    await createNewContact(informacion);
    await getContacts();
    setInformacion({
      name: "",
      last_name: "",
      phone: "",
      email: "",
      age: 0,
    });

    setLoading(false);
    setShowDialog(false);
    toast.success("Contacto creado exitosamente"); // Mostrar un mensaje de éxito al crear el contacto
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button type="button">Agregar contacto</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Crear un nuevo contacto</DialogTitle>
          <DialogDescription>
            Agrega un contacto a tu lista de contactos para mantener toda tu
            información organizada.
          </DialogDescription>
        </DialogHeader>
        <FieldGroup>
          <Field>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              name="name"
              defaultValue={informacion.name}
              onChange={(e) => {
                setInformacion({
                  ...informacion,
                  name: e.target.value,
                });
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="last_name">Apellido</Label>
            <Input
              id="last_name"
              name="last_name"
              defaultValue={informacion.last_name}
              onChange={(e) => {
                setInformacion({
                  ...informacion,
                  last_name: e.target.value,
                });
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              defaultValue={informacion.phone}
              onChange={(e) => {
                setInformacion({
                  ...informacion,
                  phone: e.target.value,
                });
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              name="email"
              defaultValue={informacion.email}
              onChange={(e) => {
                setInformacion({
                  ...informacion,
                  email: e.target.value,
                });
              }}
            />
          </Field>
          <Field>
            <Label htmlFor="age">Edad</Label>
            <Input
              id="age"
              name="age"
              type="number"
              defaultValue={informacion.age}
              onChange={(e) => {
                setInformacion({
                  ...informacion,
                  age: Number(e.target.value),
                });
              }}
            />
          </Field>
        </FieldGroup>
        <DialogFooter>
          <Button
            type="button"
            onClick={handleSaveNewContact}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
