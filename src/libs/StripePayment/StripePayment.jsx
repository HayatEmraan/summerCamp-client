import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { set } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useCart } from "../../Hooks/useCart";
import { useNavigate } from "react-router-dom";

const StripePayment = ({ cart, price }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const { refetch } = useCart();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/api/payment", { price: price })
        .then((res) => {
          setClientSecret(res.data.Intent);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (elements == null || !stripe) return;
    const card = elements.getElement(CardElement);
    const { error: submitError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (submitError) setError(submitError.message);
    else setError(null);
    setProcessing(true);
    const { paymentIntent, error: ConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || unknown,
            email: user?.email || unknown,
          },
        },
      });
    if (ConfirmError) setError(ConfirmError.message);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user?.email,
        date: new Date().toLocaleDateString(),
        price: price,
        status: "success",
        courses: cart,
      };
      axiosSecure.post("/payment", payment).then((res) => {
        if (res.data.insertedId) {
          refetch();
          toast.success("Payment Successful");
          navigate("/dashboard/payment", { replace: true });
        }
      });
    }
  };
  return (
    <div>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default StripePayment;
