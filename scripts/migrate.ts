import pkg from 'pg';
const { Client } = pkg;
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const connectionString = 'postgresql://postgres:INSTA.REALESTATE1*@db.cuwxlavrdnbsnaudujcq.supabase.co:5432/postgres';

async function migrate() {
  const client = new Client({
    connectionString: connectionString,
  });

  await client.connect();
  console.log('--- CONNECTED TO SUPABASE POSTGRES ---');

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS subscriptions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      stripe_customer_id TEXT NOT NULL,
      stripe_subscription_id TEXT NOT NULL,
      status TEXT NOT NULL,
      price_id TEXT NOT NULL,
      email TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await client.query(createTableQuery);
    console.log('✅ Subscriptions table created successfully.');
  } catch (err) {
    console.error('❌ Migration Error:', err);
  } finally {
    await client.end();
  }
}

migrate();
