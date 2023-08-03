import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa,} from '@supabase/auth-ui-shared'

export const Supabase   = createClient(
    "https://wbjvlyaxbvabjrzxiuma.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndianZseWF4YnZhYmpyenhpdW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODE5ODQsImV4cCI6MjAwNjU1Nzk4NH0.9MS69jw2kbaKNCjuC2J2W4sIlDjKYb5yhyKK8rOfLQ4")


export default function Supa () {

    return (
    <Auth
      supabaseClient={Supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
    />
    )
  }
  

