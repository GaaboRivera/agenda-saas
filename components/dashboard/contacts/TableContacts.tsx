"use client";
import { getAllContacts } from "@/actions/database/contacts";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ContactModel } from "@/models/contact.model";
import { useEffect, useState } from "react";
import { CreateContactDialog } from "./CreateContactDialog";

interface TableContactsProps {
  // Define any props if needed
  id: string;
}

export const TableContacts = ({ id }: TableContactsProps) => {
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContacts();
    return () => {};
  }, []);

  const getContacts = async () => {
    const contactsData = await getAllContacts(id);
    setContacts(contactsData);
    setLoading(false);
  };

  return (
    <div>
      <Table>
        {/* <TableCaption>{id}</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>LastName</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium">{contact.id}</TableCell>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.last_name}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell className="text-right">{contact.age}</TableCell>
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
      <CreateContactDialog />
    </div>
  );
};
