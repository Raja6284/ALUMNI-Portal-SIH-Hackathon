import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransactionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { amount, email, description } = location.state || {};

  // Your actual PayPal Client ID
  const PAYPAL_CLIENT_ID = "AcH3IaxkZk-1sbj1njvASwytQWkSp2jGYiQY1dr8lqqPboVGMTzs9l_266-ezyHBRz7w-rGN7nyTyI3G";

  useEffect(() => {
    if (!amount || !email || !description) {
      console.error('Missing required payment details');
      navigate('/donation-error', { state: { error: 'Missing required payment details' } });
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
    script.addEventListener('load', () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount,
                },
                description: description,
              }],
              payer: {
                email_address: email,
              },
            });
          },
          onApprove: async (data, actions) => {
            return actions.order.capture().then((details) => {
              navigate('/donation-success', { state: { details } });
            });
          },
          onError: (err) => {
            console.error('PayPal Error: ', err);
            navigate('/donation-error', { state: { error: err.message } });
          },
        }).render('#paypal-button-container');
      }
    });
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [amount, email, description, navigate]);

  return (
    <div className="container mx-auto px-4 py-8 mt-20 items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-center">Complete Your Payment</h1>
      <div id="paypal-button-container" className="flex justify-center"></div>
    </div>
  );
};

export default TransactionPage;
