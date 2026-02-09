"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function login(email: string, password: string) {
  const supabase = await createClient();
  const data = {
    email,
    password,
  };

  const { error, data: authData } =
    await supabase.auth.signInWithPassword(data);

  if (error) {
    return error;
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
}
