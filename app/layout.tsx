import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AgendaPro - Tu Agenda Digital Inteligente",
  description:
    "Organiza tu vida profesional con AgendaPro. Gestiona citas, reuniones y tareas de manera eficiente con nuestra plataforma de agenda digital en la nube.",
  keywords: [
    "agenda digital",
    "gestión de citas",
    "calendario online",
    "productividad",
    "SaaS",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
