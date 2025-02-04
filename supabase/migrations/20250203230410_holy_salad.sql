/*
  # Fix Database Schema

  1. Changes
    - Drop all existing tables to start fresh
    - Recreate all tables with proper constraints
    - Add RLS policies
    - Insert initial product data

  2. Tables Created
    - products
    - blog_posts
    - newsletter_subscribers
    - contact_messages

  3. Security
    - Enable RLS on all tables
    - Add appropriate policies for each table
*/

-- Drop existing tables if they exist
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;
DROP TABLE IF EXISTS contact_messages CASCADE;

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for products
CREATE POLICY "Products are viewable by everyone"
  ON products FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Products are insertable by admin"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

-- Create policies for blog_posts
CREATE POLICY "Blog posts are viewable by everyone"
  ON blog_posts FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Blog posts are insertable by admin"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

-- Create policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policies for contact_messages
CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admin can view contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

-- Insert initial products
INSERT INTO products (name, description, price, features) VALUES
(
  'Enterprise Suite',
  'Complete business management solution for growing enterprises',
  999.99,
  ARRAY[
    'Unlimited users',
    'Advanced analytics',
    'Custom integrations',
    '24/7 priority support',
    'Dedicated account manager',
    'Custom training sessions'
  ]
),
(
  'Professional Plan',
  'Perfect for small to medium-sized businesses',
  499.99,
  ARRAY[
    'Up to 50 users',
    'Basic analytics',
    'Standard integrations',
    'Business hours support',
    'Monthly training sessions',
    'Cloud storage'
  ]
),
(
  'Starter Package',
  'Essential features for startups and small teams',
  199.99,
  ARRAY[
    'Up to 10 users',
    'Basic reporting',
    'Email support',
    'Standard features',
    'Online documentation',
    'Community access'
  ]
);