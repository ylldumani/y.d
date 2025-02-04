/*
  # Fix RLS Policies for INSERT operations

  1. Changes
    - Update INSERT policies to use WITH CHECK instead of USING
    - Maintain existing security rules but with correct syntax
  
  2. Security
    - Maintains same security rules but fixes syntax
    - Ensures proper RLS enforcement for INSERT operations
*/

-- Drop existing INSERT policies
DROP POLICY IF EXISTS "Products are insertable by admin" ON products;
DROP POLICY IF EXISTS "Blog posts are insertable by admin" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON contact_messages;

-- Recreate INSERT policies with WITH CHECK
CREATE POLICY "Products are insertable by admin"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

CREATE POLICY "Blog posts are insertable by admin"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);