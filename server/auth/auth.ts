"use server";
import { signInMock } from "@/services/signin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signinAction = async (email: string, password: string) => {
  const logged = await signInMock(email, password);

  if (!logged) {
    return false;
  }

  //set cookies
  const cookiesHandler = await cookies();
  cookiesHandler.set("isLogged", "ok");

  const username = {
    id: 1,
    name: "Gabo",
    lastname: "Gomez",
    email: "gabo@example.com",
  };

  cookiesHandler.set("username", JSON.stringify(username));

  return redirect("/dashboard");
};

export const signoutAction = async () => {
  const cookiesHandlerOut = await cookies();
  cookiesHandlerOut.delete("isLogged");
  cookiesHandlerOut.delete("username");

  return redirect("/");
};
