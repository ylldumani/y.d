/*
  # Add Initial Products

  This migration adds initial products to the products table.
*/

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