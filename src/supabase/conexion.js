import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hyqzlxbutccqzartkhhe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cXpseGJ1dGNjcXphcnRraGhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2NzgzOTUsImV4cCI6MjA1ODI1NDM5NX0.e9eqbKIaiSgLAWHUEnyWqU6QaxPWbDQuMH_q-rv_190";
export const supabase = createClient(supabaseUrl, supabaseKey);

export const crearPost = async (post) => {
  const { data, error } = await supabase.from("posts").insert([post]).select().limit(1);

  if (error) throw new Error("Not load post");

  return data;
};

export const obtenerPosts = async () => {
   const posts = await supabase.from('posts').select("*")

   return posts
}