import React, { useState } from 'react';
import PaymentGateway from './PaymentGateway'; // Import the Payment Gateway component
import './SubscriptionPlans.css';
import axios from 'axios';

const SubscriptionPlans = ({ trainerId, name }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [redirectToPayment, setRedirectToPayment] = useState(false);
  

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };
  const userid=sessionStorage.getItem('user');
  const handleSubscribe = async() => {
    if (selectedPlan) {
      setRedirectToPayment(true);
      const response = await axios.put(`http://localhost:8080/users/updateUser/${userid}/${trainerId}`);

    } else {
      alert('Please select a subscription plan.');
    }
  };

  // Redirect to the payment gateway component if selected
  if (redirectToPayment) {
    return <PaymentGateway trainerId={trainerId} name={name} selectedPlan={selectedPlan} />;
  }

  return (
    <div className='Subscribe'>
      <h2>Choose a Subscription Plan</h2>
      <ul className='sublist'>
        <li className='suballlist'>
          <strong>Plan 1:</strong> $10/month
          <button onClick={() => handlePlanSelect('Plan 1')}>Select</button>
        </li><br></br>
        <li className='suballlist'>
          <strong>Plan 2:</strong> $20/month
          <button onClick={() => handlePlanSelect('Plan 2')}>Select</button>
        </li><br></br>
        <li className='suballlist'>
          <strong>Plan 3:</strong> $30/month
          <button onClick={() => handlePlanSelect('Plan 3')}>Select</button>
        </li>
      </ul>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default SubscriptionPlans;
