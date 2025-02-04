/*
  # Initial Schema Setup
  
  1. Tables
    - products
    - testimonials
    - blog_posts
    - newsletter_subscribers
    - contact_messages
    
  2. Security
    - RLS enabled on all tables
    - Appropriate policies for each table
*/

-- Products Table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  features text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are viewable by everyone"
  ON products FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Products are insertable by admin"
  ON products FOR INSERT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author_id uuid NOT NULL,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT fk_author
    FOREIGN KEY (author_id)
    REFERENCES auth.users (id)
    ON DELETE CASCADE
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are viewable by everyone"
  ON blog_posts FOR SELECT
  TO authenticated, anon
  USING (true);

CREATE POLICY "Blog posts are insertable by admin"
  ON blog_posts FOR INSERT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  USING (true);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admin can view contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));