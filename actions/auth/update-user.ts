'use server';
import { createClient } from "@/lib/supabase/server";

export const updateUser = async (name: string) => {
  const supabase = await createClient();
  try {
    const {
      data: { user: session },
    } = await supabase.auth.updateUser({
      data: {
        name,
      },
    });

    if (!session) {
      return null;
    }

    return session;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
};
