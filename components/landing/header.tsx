"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Características", href: "#caracteristicas" },
  { name: "Servicios", href: "#servicios" },
  { name: "Planes", href: "#planes" },
  { name: "Opiniones", href: "#opiniones" },
  { name: "Contacto", href: "#contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5">
            <Calendar className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-foreground">AgendaPro</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menú principal</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Iniciar Sesión</Link>
          </Button>
          <Button asChild>
            <Link href="#planes">Comenzar Gratis</Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 py-4 bg-background border-t border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full bg-transparent"
                asChild
              >
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="#planes">Comenzar Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
