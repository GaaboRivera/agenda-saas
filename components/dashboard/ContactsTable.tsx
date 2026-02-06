"use client";

import { MoreHorizontal, Phone, Mail, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const contacts = [
  {
    id: 1,
    name: "Maria Garcia",
    initials: "MG",
    email: "maria@empresa.com",
    phone: "+34 612 345 678",
    status: "activo",
    calls: 24,
    favorite: true,
  },
  {
    id: 2,
    name: "Carlos Lopez",
    initials: "CL",
    email: "carlos@tech.com",
    phone: "+34 698 765 432",
    status: "activo",
    calls: 18,
    favorite: false,
  },
  {
    id: 3,
    name: "Ana Martinez",
    initials: "AM",
    email: "ana@studio.com",
    phone: "+34 654 321 987",
    status: "inactivo",
    calls: 7,
    favorite: true,
  },
  {
    id: 4,
    name: "Pedro Sanchez",
    initials: "PS",
    email: "pedro@mail.com",
    phone: "+34 678 123 456",
    status: "activo",
    calls: 32,
    favorite: false,
  },
  {
    id: 5,
    name: "Laura Fernandez",
    initials: "LF",
    email: "laura@corp.com",
    phone: "+34 623 456 789",
    status: "activo",
    calls: 15,
    favorite: true,
  },
];

export function ContactsTable() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-foreground">
              Contactos Recientes
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Los contactos mas activos en tu agenda
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-foreground border-border bg-transparent"
          >
            Ver todos
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Contacto</TableHead>
              <TableHead className="text-muted-foreground hidden md:table-cell">
                Telefono
              </TableHead>
              <TableHead className="text-muted-foreground hidden lg:table-cell">
                Estado
              </TableHead>
              <TableHead className="text-muted-foreground text-right">
                Llamadas
              </TableHead>
              <TableHead className="text-muted-foreground w-10">
                <span className="sr-only">Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id} className="border-border">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                        {contact.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-medium text-foreground text-sm">
                          {contact.name}
                        </span>
                        {contact.favorite && (
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {contact.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Phone className="h-3.5 w-3.5" />
                    {contact.phone}
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Badge
                    variant={
                      contact.status === "activo" ? "default" : "secondary"
                    }
                    className={
                      contact.status === "activo"
                        ? "bg-emerald-500/10 text-emerald-500 border-0 hover:bg-emerald-500/20"
                        : "bg-secondary text-muted-foreground border-0"
                    }
                  >
                    {contact.status === "activo" ? "Activo" : "Inactivo"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-sm font-medium text-foreground">
                  {contact.calls}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Abrir menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Phone className="h-4 w-4 mr-2" />
                        Llamar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Enviar correo
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
