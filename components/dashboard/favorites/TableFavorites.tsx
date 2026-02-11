"use client";
import {
  getAllContacts,
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

interface TableFavoritesProps {
  // Define any props if needed
  id: string;
}

export const TableFavorites = ({ id }: TableFavoritesProps) => {
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    setLoading(true);
    const contactsData = await getAllContacts(id);
    const favoriteContacts = contactsData.filter(
      (contact) => contact.is_favorite,
    );

    setContacts(favoriteContacts);
    setLoading(false);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>LastName</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.last_name}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell className="text-right">{contact.age}</TableCell>
              </TableRow>
            ))
          ) : !loading ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                No hay contactos favoritos.
              </TableCell>
            </TableRow>
          ) : null}
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
    </div>
  );
};
