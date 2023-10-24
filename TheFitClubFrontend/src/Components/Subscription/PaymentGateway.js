import React, { useState, useEffect } from 'react';
import './SubscriptionPlans.css'

const PaymentGateway = ({ trainerId, name, selectedPlan }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending');

  useEffect(() => {
    // Simulate a payment process
    simulatePayment()
      .then(() => {
        setPaymentStatus('success');
      })
      .catch(() => {
        setPaymentStatus('failed');
      });
  }, []);

  const simulatePayment = async () => {
    // Simulate a payment API call
    return new Promise((resolve, reject) => {
      // In a real-world scenario, you would make a request to your payment service's API here
      // For this example, we'll simulate success after a delay
      setTimeout(() => {
        resolve();
      }, 2000); // Simulated 2-second delay
    });
  };

  return (
    <div className='Subscribe'>
      <h2>Payment Gateway</h2>
      <p>Processing payment for {name}'s subscription ({selectedPlan})...</p>
      {paymentStatus === 'success' && (
        <div className="payment-success">
          <p>Payment successful!</p>
          <p>You are now subscribed to {name}'s {selectedPlan} plan.</p>
        </div>
      )}
      {paymentStatus === 'failed' && (
        <div className="payment-failed">
          <p>Payment failed. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;
