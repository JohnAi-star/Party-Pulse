import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_CONFIG } from './config';

if (!STRIPE_CONFIG.publishableKey) {
  throw new Error('Missing STRIPE_PUBLISHABLE_KEY');
}

let stripePromise: Promise<any> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    //@ts-ignore
    stripePromise = loadStripe(STRIPE_CONFIG.publishableKey);
  }
  return stripePromise;
};