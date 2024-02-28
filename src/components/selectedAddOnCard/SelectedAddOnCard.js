import React, { useContext, useEffect } from 'react';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';

const SelectedAddOnCard = ({ selectedAddOn }) => {
  const { selectedPlan } = useContext(SelectedServiceContext);

  useEffect(() => {
    console.log('selectedPlan: ', selectedPlan);
  }, []);

  return (
    <div className='summary flex justify-between'>
      <p className='text-cool-gray'>{selectedAddOn.name}</p>
      <p>{selectedPlan.type === 'monthly' ? `+$${selectedAddOn.monthly}/mo` : `+$${selectedAddOn.yearly}/yr`}</p>
    </div>
  );
};

export default SelectedAddOnCard;
