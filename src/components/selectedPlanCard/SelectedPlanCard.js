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
      className={`card lg:w-1/3 sm:w-1/3 xs:h-1/3 sm:h-full lg:h-full rounded-lg lg:p-5 sm:p-5 xs:p-2 cursor-pointer ${
        selectedCard === plan.name ? 'border border-violet-900' : 'border border-light-gray'
      } xs:flex xs:gap-x-4  sm:block lg:block`}
      onClick={() => handleCardClick(plan)}
    >
      <img className='lg:mb-10 sm:mb-10 xs:mb-0' src={plan.icon} alt='' />
      <div className='plan-info'>
        <h5 className='text-marine-blue font-extrabold'>{plan.name}</h5>
        <h5 className='text-cool-gray'>
          {selectedPlan.type === 'yearly' ? `$${plan.yearly}/yr` : `$${plan.monthly}/mo`}
        </h5>
        {selectedPlan.type === 'yearly' && <p className='text-xs text-marine-blue'>2 months free</p>}
      </div>
    </div>
  );
};

export default SelectedPlanCard;
