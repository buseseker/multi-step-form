import React, { useContext } from 'react';
import SelectedAddOnCard from '../selectedAddOnCard/SelectedAddOnCard';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';
import { useNavigate } from 'react-router-dom';

const SummaryCard = () => {
  const { selectedPlan, selectedCard, selectedAddOnIds, addOns, plans } = useContext(SelectedServiceContext);
  const navigate = useNavigate();

  const selectedAddOns = selectedAddOnIds.map((addOnId) => {
    return addOns.find((addOn) => addOn.id === addOnId);
  });

  let planPrice = 0;
  let addOnPrice = 0;

  // Seçilen plana göre fiyatı belirlemek
  const getPlanPrice = () => {
    plans.forEach((plan) => {
      if (plan.id === selectedPlan.id) {
        planPrice = selectedPlan.type === 'yearly' ? plan.yearly : plan.monthly;
      }
    });

    return planPrice;
  };

  const getTotalPrice = () => {
    selectedAddOns.forEach((addOn) => {
      addOnPrice += selectedPlan.type === 'yearly' ? addOn.yearly : addOn.monthly;
    });

    return planPrice + addOnPrice;
  };

  const handleGoBack = () => {
    navigate('/add-ons');
  };

  const handleConfirm = () => {
    navigate('/thank-you');
  };
  return (
    <div className='summary-section flex items-center flex-col lg:gap-y-8 sm:gap-y-8 xs:gap-y-4 lg:px-24 pt-10 pb-10 relative xs:px-6 lg:w-full xs:w-[95%] sm:w-[95%] xs:mx-auto sm:mx-auto xs:-my-16 sm:-my-16 lg:my-0 xs:bg-white sm:bg-white xs:rounded-lg sm:rounded-lg'>
          <div className='summary-header w-full flex flex-col gap-y-1 lg:px-16 sm:px-24'>
          <h1 className='lg:text-h1 text-marine-blue font-black xs:text-m'>Finishing up</h1>
        <p className='text-cool-gray '>Double-check everything looks OK before confirming.</p>
      </div>
      <div className='flex flex-col gap-y-2 w-full bg-magnolia p-5 rounded-lg'>
        <div className='summary'>
          <div className='service-text flex justify-between mb-2'>
            <p className='text-marine-blue font-black'>
              {selectedCard} {selectedPlan.type === 'monthly' ? '(Monthly)' : '(Yearly)'}
            </p>
            <div className='service-price text-marine-blue font-black'>
              <p>
                ${getPlanPrice()}
                {selectedPlan.type === 'monthly' ? '/mo' : '/yr'}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex flex-col gap-y-5 mt-2'>
          {selectedAddOns.map((selectedAddOn) => {
            return <SelectedAddOnCard key={selectedAddOn.id} selectedAddOn={selectedAddOn} />;
          })}
        </div>
      </div>
      <div className='flex justify-between bg-white w-full pr-5 pl-5'>
        <p className='text-cool-gray'>{`Total ${selectedPlan.type === 'monthly' ? '(per month)' : '(per year)'}`}</p>
        <p className='text-purplish-blue font-black text-xl'>
          +${getTotalPrice()}
          {selectedPlan.type === 'monthly' ? '/mo' : '/yr'}
        </p>
      </div>
      <div className='btn w-full h-[60px] flex justify-between absolute lg:bottom-4 sm:-bottom-60 xs:-bottom-20 lg:px-20 '>
        <button
              className='btn text-cool-gray font-extrabold py-3 px-6 rounded-lg w-max self-end  mt-16 hover:text-marine-blue'
              onClick={handleGoBack}
        >
          Go Back
        </button>
        <button
          className='btn bg-purplish-blue text-white py-3 px-6 rounded-lg w-max self-end  mt-16 hover:bg-button-hover-blue'
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
