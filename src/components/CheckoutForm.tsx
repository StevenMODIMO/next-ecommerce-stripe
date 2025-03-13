"use client";
import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutProducts from "./CheckoutProducts";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.BASE_URL}/checkout/success`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message || "An unexpected error occurred.");
    } else if (paymentIntent?.status === "succeeded") {
      setMessage("Payment successful!");
      localStorage.removeItem("cart");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-lg shadow-md"
    >
      <PaymentElement options={{ layout: "accordion" }} />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
      {message && <p className="text-red-500 mt-2">{message}</p>}
    </form>
  );
}

export default function CheckoutWrapper() {
  const [clientSecret, setClientSecret] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleProceedToPayment = async (subtotal: number) => {
    setLoading(true);
    setSubtotal(subtotal);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: subtotal * 100, currency: "usd" }),
      });

      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setLoading(false);
      } else {
        setLoading(false);
        console.error("Failed to get clientSecret", data);
      }
    } catch (error) {
      console.error("Error fetching payment intent:", error);
    }
  };

  return (
    <div>
      {!clientSecret ? (
        <CheckoutProducts
          onProceed={handleProceedToPayment}
          loading={loading}
        />
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
              variables: {
                colorPrimary: "#e27210",
              },
            },
          }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
