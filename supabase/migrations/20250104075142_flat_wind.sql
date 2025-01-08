/*
  # Add Performance Indexes

  1. Changes
    - Add indexes for frequently queried columns
    - Add composite indexes for common query patterns
  
  2. Performance
    - Improve query performance for location searches
    - Optimize price range queries
    - Speed up date-based booking queries
*/

-- Add indexes for activities
CREATE INDEX IF NOT EXISTS activities_location_idx ON activities (location);
CREATE INDEX IF NOT EXISTS activities_price_idx ON activities (price);
CREATE INDEX IF NOT EXISTS activities_created_at_idx ON activities (created_at);

-- Add indexes for bookings
CREATE INDEX IF NOT EXISTS bookings_date_idx ON bookings (date);
CREATE INDEX IF NOT EXISTS bookings_user_id_idx ON bookings (user_id);
CREATE INDEX IF NOT EXISTS bookings_activity_id_idx ON bookings (activity_id);
CREATE INDEX IF NOT EXISTS bookings_status_idx ON bookings (status);
CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at);

-- Add composite indexes for common queries
CREATE INDEX IF NOT EXISTS bookings_user_date_idx ON bookings (user_id, date);
CREATE INDEX IF NOT EXISTS activities_location_price_idx ON activities (location, price);