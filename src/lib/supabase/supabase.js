import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hhmjbibgsakrulyknqdk.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhobWpiaWJnc2FrcnVseWtucWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyNDM1MDYsImV4cCI6MjA1MDgxOTUwNn0.xigiWq3jQyLG4T7hvgBx6ud2_Dox7JyKuWgR1eFwYHA'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
