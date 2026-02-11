"use server";

import { createClient } from "@/lib/supabase/server";
import { ContactCreateModel, ContactModel } from "@/models/contact.model";

export const getAllContacts = async (id: string) => {
  const contactsList: ContactModel[] = [];
  const supabase = await createClient();
  const contactsResponse = await supabase
    .from("contacts")
    .select("*")
    .eq("user_id", id);

  contactsResponse.data?.forEach((contact: ContactModel) => {
    contactsList.push(contact);
  });

  return contactsList;
};

export const createNewContact = async (contact: ContactCreateModel) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const user_id = user?.id ?? "";

  const contactResponse = await supabase
    .from("contacts")
    .insert({ ...contact, user_id });
  console.log({ contactResponse });
};
