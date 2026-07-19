import { createClient } from "@/app/_lib/supabase-server";

export async function getLeads() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getLeads error:", error.message);
    throw new Error("Leads could not be loaded");
  }

  return data;
}
