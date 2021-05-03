import React from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';
import { API } from './config';

const CARD_OPTIONS = {
  style: {
      base: {
          iconColor: "#ccc",
          color: "#ccc",
          fontWeight: 500,
          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          fontSize: "16px",
          fontSmoothing: "antialiased",
          "::placeholder": {
              color: "#a2a2a2"
          }
      },
      invalid: {
          iconColor: "#ffc7ee",
          color: "#ffc7ee"
      }
  }
};

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async e => {
        console.log(elements);
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        });
        if(error){
            console.log(error);
        } else {
            console.log(paymentMethod);
            elements.getElement(CardNumberElement).clear();
            const { id } = paymentMethod;
            // Other important data
            // const { brand, last4, exp_month, exp_year } = paymentMethod.billing_details;
            // const data = {
            //   stripeToken: id
            // }
            // const result = await fetch(`${API}getStripeToken`, {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            //   body: JSON.stringify(data),
            // });
            // console.log(result);
        }
    };

    return (
        <form 
            onSubmit={handleSubmit}
        >
          <div className="container">
            <fieldset className="FormGroup w-100">
                <CardNumberElement options={CARD_OPTIONS}/>
            </fieldset>
            <fieldset className="FormGroup w-50">
                <CardExpiryElement options={CARD_OPTIONS}/>
            </fieldset>
            <fieldset className="FormGroup w-50">
                <CardCvcElement options={CARD_OPTIONS}/>
            </fieldset>
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
          </div>
        </form>
    )
}

export default CheckoutForm;