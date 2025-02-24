import { createClient } from "@supabase/supabase-js";
import { Database } from "../lib/supabase.types";
const supabaseUrl = "https://atgoappruokcxjmyskvf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0Z29hcHBydW9rY3hqbXlza3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMDAyODAsImV4cCI6MjA0MjY3NjI4MH0.jXUZ_WqgD3dUkhDjlqu2JT426ZebiOPjTmB1WrULFMc";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
