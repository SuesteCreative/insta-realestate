import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

async function test() {
  try {
    const products = await stripe.products.list({ limit: 1 });
    console.log('Successfully connected to Stripe!');
    console.log(`Found ${products.data.length} products.`);
  } catch (e: any) {
    console.error('Stripe Error:', e.message);
    if (e.raw) console.error('Raw Error:', JSON.stringify(e.raw, null, 2));
  }
}

test();
