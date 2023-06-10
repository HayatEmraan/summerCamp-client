import React from "react";
import { useCart } from "../../Hooks/useCart";
import StripePayment from "../../libs/StripePayment/StripePayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, curr) => acc + curr.price, 0);
  const price = parseFloat(total.toFixed(2));
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <StripePayment price={price} cart={cart}></StripePayment>
      </Elements>
    </div>
  );
};

export default Checkout;
