import { supabase } from "./supabase";

export async function getParticipants() {
  const { data, error } = await supabase
    .from("participants")
    .select("*")
    .order("id");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}