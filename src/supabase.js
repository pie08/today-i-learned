import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://befagikyrhoxnilkfsod.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZmFnaWt5cmhveG5pbGtmc29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNzU0MTYsImV4cCI6MTk5OTg1MTQxNn0.Ufiq48UZQwJ3pCzuLQkQ6pe86ZWtmCyfXeQRH4qZu6U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
