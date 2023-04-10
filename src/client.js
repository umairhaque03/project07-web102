import { createClient } from '@supabase/supabase-js'

const URL = 'https://wwswqwsfjsziwwsffhlx.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3c3dxd3NmanN6aXd3c2ZmaGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTYyNjksImV4cCI6MTk5NjIzMjI2OX0.AEI3xmC3mK8wyVfm5nDtOQ08V63UE9RkMhI6pgL07JA';

export const supabase = createClient(URL, API_KEY);
