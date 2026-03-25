import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    if (!supabase) {
      console.error('Database connection failed: Supabase client not initialized');
      return new NextResponse("Service Unavailable", { status: 503 });
    }

    const { error } = await supabase.from('subscriptions').insert({
      stripe_customer_id: session.customer as string,
      stripe_subscription_id: session.subscription as string,
      status: subscription.status,
      price_id: subscription.items.data[0].price.id,
      email: session.customer_details?.email,
    });

    if (error) console.error('Database Error:', error.message);
    else console.log(`🔔 New Subscription: ${subscription.id}`);
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;
    
    if (!supabase) {
      console.error('Database connection failed: Supabase client not initialized');
      return new NextResponse("Service Unavailable", { status: 503 });
    }

    const { error } = await supabase
      .from('subscriptions')
      .update({ status: 'canceled' })
      .eq('stripe_subscription_id', subscription.id);

    if (error) console.error('Database Error:', error.message);
    else console.log(`❌ Subscription Deleted: ${subscription.id}`);
  }

  return new NextResponse(null, { status: 200 });
}
