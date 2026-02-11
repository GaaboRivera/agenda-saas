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

export const getFavoirtesContacts = async (id: string) => {
  const contactsList: ContactModel[] = [];
  const supabase = await createClient();
  const contactsResponse = await supabase
    .from("contacts")
    .select("*")
    .eq("user_id", id)
    .eq("is_favorite", true);

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

  await supabase.from("contacts").insert({ ...contact, user_id });
};

export const updateContactFavorite = async (
  id: number,
  is_favorite: boolean,
) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const user_id = user?.id ?? "";

  const contactUpdateResponse = await supabase
    .from("contacts")
    .update({ is_favorite })
    .eq("id", id)
    .eq("user_id", user_id);

  return contactUpdateResponse.error;
};

export const deleteContactById = async (id: number) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const user_id = user?.id ?? "";

  await supabase.from("contacts").delete().eq("id", id).eq("user_id", user_id);
};
