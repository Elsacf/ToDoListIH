import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://piiufyflcgzpxnvroixz.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaXVmeWZsY2d6cHhudnJvaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIwNDQ1MTQsImV4cCI6MTk3NzYyMDUxNH0.-Zeuy0kKPbH-BxYS8i5La-q8-PqWbOShdahUOtRSf9w';

export default createClient(supabaseUrl, supabaseAnonToken);
