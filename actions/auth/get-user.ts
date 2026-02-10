import { createClient } from "@/lib/supabase/server";

export const getUser = async () => {
  const supabase = await createClient();
  try {
    const {
      data: { user: session },
    } = await supabase.auth.getUser();
    
    if (!session) {
      return null;
    }
    // const userId = session.id;
    // const { data: userData, error: userError } = await supabase
    //   .from("profiles")
    //   .select("*")
    //   .eq("id", userId)
    //   .single();

    // if (userError) {
    //   console.error("error fetching user:", userError);
    //   return null;
    // }
    return session;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
};
