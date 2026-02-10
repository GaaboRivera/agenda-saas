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

export async function signup(email: string, password: string) {
  const supabase = await createClient();
  const data = {
    email,
    password,
  };

  const { error, data: authData } = await supabase.auth.signUp(data);

  if (error) {
    return error;
  }

  revalidatePath("/", "layout");
  redirect("/login");
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
}

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function changeNameProfile(newName: string) {
  const supabase = await createClient();

  await supabase.auth.updateUser({
    data: {
      display_name: newName,
    },
  });

  revalidatePath("/dashboard/profile", "page");
}

export const resetPassword = async (host: string) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.email) {
    await supabase.auth.resetPasswordForEmail(user?.email, {
      redirectTo: `${host}/resetPassword`,
    });
    return true;
  }

  return false;
};

export async function setNewPassword(newPassword: string) {
  const supabase = await createClient();

  await supabase.auth.updateUser({
    password: newPassword,
  });

  supabase.auth.signOut();
}
