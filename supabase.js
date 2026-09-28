const SUPABASE_URL = "https://pinakafjbpqrzuarisba.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_8Im6kUB_A9T0DHX4kjzzig_bPVYE4n0";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);