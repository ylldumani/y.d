/*
  # Final Database Setup

  1. Tables
    - Recreate products table
    - Recreate blog_posts table with proper foreign key
    - Set up RLS and policies
    - Add initial product data

  2. Security
    - Enable RLS on all tables
    - Add policies for viewing and creating records
*/

-- Drop existing tables if they exist
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;

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

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

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