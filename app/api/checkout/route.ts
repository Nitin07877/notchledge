import { NextRequest, NextResponse } from "next/server";

// Point CHECKOUT_URL at your Lemon Squeezy / Paddle / Stripe Checkout link.
// Keeping this as a server route means the site's buy buttons never need to
// change even if you swap payment providers later.
export async function GET(request: NextRequest) {
  const destination = process.env.CHECKOUT_URL;

  if (!destination) {
    return NextResponse.redirect(new URL("/#pricing", request.url));
  }

  return NextResponse.redirect(destination);
}
