import React from 'react';
import { useLocation } from 'react-router-dom';

const DonationSuccess = () => {
  const location = useLocation();
  const { details } = location.state || {};

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Donation Successful!</h1>
      <div className="text-center">
        <p>Thank you for your donation!</p>
        <p>Transaction ID: {details?.id}</p>
        <p>Payment Amount: ${details?.purchase_units[0]?.amount?.value}</p>
        <p>Email: {details?.payer?.email_address}</p>
      </div>
    </div>
  );
};

export default DonationSuccess;
