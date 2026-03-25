import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

async function find() {
  const prices = await stripe.prices.list({ active: true, limit: 10 });
  console.log('--- START PRICE LIST ---');
  prices.data.forEach(p => {
    console.log(`FOUND_PRICE: ${p.id} | ${p.unit_amount! / 100} ${p.currency.toUpperCase()}`);
  });
  console.log('--- END PRICE LIST ---');
}

find().catch(console.error);
