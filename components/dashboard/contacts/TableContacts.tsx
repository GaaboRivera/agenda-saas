"use client";
import {
  getAllContacts,
  getFavoirtesContacts,
  updateContactFavorite,
} from "@/actions/database/contacts";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactModel } from "@/models/contact.model";
import { useEffect, useState } from "react";
import { CreateContactDialog } from "./CreateContactDialog";
import { Star } from "lucide-react";
import { DeleteDialog } from "./DeleteDialog";

interface TableContactsProps {
  // Define any props if needed
  id: string;
  favorites: boolean;
}

export const TableContacts = ({ id, favorites }: TableContactsProps) => {
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    setLoading(true);
    let contactsData;
    if (favorites) {
      contactsData = await getFavoirtesContacts(id);
    } else {
      contactsData = await getAllContacts(id);
    }
    setContacts(contactsData);
    setLoading(false);
  };

  const handleFavoriteToggle = async (contact: ContactModel) => {
    const stateCurretFavorite = contact.is_favorite;

    // Se realiza la actualización optimista del estado para mejorar la experiencia del usuario
    const updatedContacts = contacts.map((c) => {
      if (c.id === contact.id) {
        return { ...c, is_favorite: !stateCurretFavorite };
      }
      return c;
    });

    setContacts(updatedContacts);

    // Se realiza la actualización en la base de datos
    const error = await updateContactFavorite(contact.id, !stateCurretFavorite);

    // Si no hay error, se mantiene el estado actualizado, de lo contrario se revierte al estado anterior
    if (error === null) {
      if (favorites) {
        getContacts();
      }
      return;
    }

    // Si hay un error, se revierte el estado al valor anterior
    const newContactsReturn = contacts.map((c) => {
      if (c.id === contact.id) {
        return { ...c, is_favorite: stateCurretFavorite };
      }
      return c;
    });

    setContacts(newContactsReturn);
  };
  return (
    <div>
      <Table>
        {/* <TableCaption>{id}</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">Eliminar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>LastName</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Age</TableHead>
            <TableHead className="text-right">Favorite</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium">
                <DeleteDialog
                  id={contact.id}
                  getContacts={getContacts}
                  name={contact.name}
                />
              </TableCell>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.last_name}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell className="text-right">{contact.age}</TableCell>
              <TableCell className="flex justify-end">
                <Star
                  className={`${contact.is_favorite ? "text-yellow-500" : "text-muted-foreground"} cursor-pointer`}
                  onClick={async () => handleFavoriteToggle(contact)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && (
        <div className="flex w-full flex-col gap-2 mt-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex gap-4" key={index}>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>
      )}
      {!favorites && (
        <div className="mt-4">
          <CreateContactDialog getContacts={getContacts} />
        </div>
      )}
    </div>
  );
};
