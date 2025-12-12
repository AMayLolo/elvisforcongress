-- 001_create_contact_volunteer_tables.sql
-- Run this in the Supabase SQL editor (or psql) to create the tables used by the site's API routes.

-- Enable pgcrypto for gen_random_uuid() if not already available
create extension if not exists pgcrypto;

-- Emails table: stores email signups and generic contact payloads
create table if not exists public.emails (
  id uuid primary key default gen_random_uuid(),
  email text,
  meta jsonb,
  submitted_at timestamptz default now()
);

-- Volunteers table: stores volunteer signups, SMS signups, and contact messages
create table if not exists public.volunteers (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  last_name text,
  email text,
  phone text,
  message text,
  consent boolean default false,
  submitted_at timestamptz default now(),
  meta jsonb
);

-- Optional: add indexes for common queries
create index if not exists idx_emails_email on public.emails (lower(email));
create index if not exists idx_volunteers_email on public.volunteers (lower(email));
