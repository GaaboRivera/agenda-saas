"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [textError, setTextError] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    // Simula una llamada a la API

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await fetch("/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await result.json();

      if (!data.success) {
        setIsLoading(false);
        setTextError("Correo electrónico o contraseña incorrectos.");
      } else {
        setIsLoading(false);
        setTextError("");
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);

      setTextError(
        "Ocurrió un error. Por favor, inténtalo de nuevo más tarde.",
      );
    }
  }
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        id="email"
        name="email"
        placeholder="Correo electronico"
        required
        type="email"
        className="w-full"
      />
      <Input
        id="password"
        name="password"
        placeholder="Contrasena"
        required
        type="password"
        className="w-full"
      />
      <Button
        className="w-full bg-gray-800 hover:bg-gray-700 text-white cursor-pointer"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          "Iniciar sesión"
        )}
      </Button>
      {textError !== "" && <p className="text-red-500 text-sm">{textError}</p>}
    </form>
  );
};
