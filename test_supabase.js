const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://uzfbwdjhzpreglutabdo.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_9cpzLJVHH2EgGN8bPsvxGQ_RG3lyJy2';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function check() {
  const { data, error } = await supabase.storage.listBuckets();
  console.log("Error:", error);
  console.log("Buckets:", data);
}

check();
