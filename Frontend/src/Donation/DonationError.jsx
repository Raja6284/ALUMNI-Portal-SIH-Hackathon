import React from 'react';
import { useLocation } from 'react-router-dom';

const DonationError = () => {
  const location = useLocation();
  const { error } = location.state || {};

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Donation Failed</h1>
      <div className="text-center">
        <p>Sorry, there was an error processing your donation.</p>
        <p>Error: {error}</p>
      </div>
    </div>
  );
};

export default DonationError;
