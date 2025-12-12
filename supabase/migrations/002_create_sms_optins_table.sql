-- 002_create_sms_optins_table.sql
-- Adds a table to store SMS/text opt-ins, consent and opt-out tracking.

create extension if not exists pgcrypto;

create table if not exists public.sms_opt_ins (
  id uuid primary key default gen_random_uuid(),
  phone text not null,
  phone_e164 text,
  consent boolean default true,
  consent_text text,
  source text,
  utm jsonb,
  ip text,
  opted_out boolean default false,
  opt_out_at timestamptz,
  provider_id text,
  meta jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists idx_sms_phone_unique on public.sms_opt_ins (phone);
create index if not exists idx_sms_phone_e164 on public.sms_opt_ins (phone_e164);
create index if not exists idx_sms_created_at on public.sms_opt_ins (created_at);
