import React, { useContext } from 'react';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';

const SelectedPlanCard = ({ plan }) => {
  const { selectedPlan, setSelectedPlan, selectedCard, setSelectedCard } = useContext(SelectedServiceContext);

  const handleCardClick = (plan) => {
    if (selectedCard === plan.name) {
      setSelectedCard(null);
    } else {
      setSelectedCard(plan.name);
      setSelectedPlan({ id: plan.id, type: selectedPlan.type });
    }
  };

  return (
    <div
      className={`card w-1/3 rounded-lg p-5 cursor-pointer ${selectedCard === plan.name ? 'border border-violet-900' : 'border border-light-gray'}`}
      onClick={() => handleCardClick(plan)}
    >
      <img className='mb-10' src={plan.icon} alt='' />
      <h5 className='text-marine-blue font-extrabold'>{plan.name}</h5>
      <h5 className='text-cool-gray'>{selectedPlan.type === 'yearly' ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo`}</h5>
      {selectedPlan.type === 'yearly' && <p className='text-xs text-marine-blue'>2 months free</p>}
    </div>
  );
};

export default SelectedPlanCard;
