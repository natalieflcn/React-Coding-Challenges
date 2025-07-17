import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2enFvbWVkandldGx4b2l3cXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NzM2NzgsImV4cCI6MjA2ODM0OTY3OH0.mLWOMV3J98vm9aptAhGGYg_l-XLbF34t_ab-0SiA6Xg";
const supabase = createClient(
  "https://yvzqomedjwetlxoiwqrs.supabase.co",
  supabaseKey
);

export default supabase;
