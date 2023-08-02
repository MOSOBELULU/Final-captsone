
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wbjvlyaxbvabjrzxiuma.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndianZseWF4YnZhYmpyenhpdW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODE5ODQsImV4cCI6MjAwNjU1Nzk4NH0.9MS69jw2kbaKNCjuC2J2W4sIlDjKYb5yhyKK8rOfLQ4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase