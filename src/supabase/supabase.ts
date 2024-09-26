import { createClient } from "@supabase/supabase-js";
import { Database } from "../lib/supabase.types";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
