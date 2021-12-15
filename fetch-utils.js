// 'anonymous key' assigned by supabase for this project
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzkzMywiZXhwIjoxOTU1MDgzOTMzfQ.EBPUcU_WWpLifNiYHK0-7lDB2fZtodlhB2Yb7rOSIek';
// the url supabase assigned for the database
const SUPABASE_URL = 'https://knhiasotugxozbbkbqrw.supabase.co';
// client object to get data from supabase database
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeanies() {
    const response = await client
        .from('Rarest Beanie Babies of All Time')
        .select()
        .order('name');
        
    return response.data;
}