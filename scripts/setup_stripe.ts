import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
});

async function setup() {
  console.log('Creating products...');

  const monthlyProduct = await stripe.products.create({
    name: 'Insta-RealEstate Pro Monthly',
    description: 'Unlimited property carousels and high-end marketing assets.',
  });

  const monthlyPrice = await stripe.prices.create({
    unit_amount: 2900, // 29.00€
    currency: 'eur',
    recurring: { interval: 'month' },
    product: monthlyProduct.id,
  });

  const annualProduct = await stripe.products.create({
    name: 'Insta-RealEstate Pro Annual',
    description: 'Annual access to Insta-RealEstate Pro (Get 2 months free).',
  });

  const annualPrice = await stripe.prices.create({
    unit_amount: 19900, // 199.00€
    currency: 'eur',
    recurring: { interval: 'year' },
    product: annualProduct.id,
  });

  console.log('--- Setup Complete ---');
  console.log(`Monthly Price ID: ${monthlyPrice.id}`);
  console.log(`Annual Price ID: ${annualPrice.id}`);
}

setup().catch(console.error);
