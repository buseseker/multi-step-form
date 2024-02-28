import React, { useContext } from 'react';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';
import SelectedAddOnCard from '../../components/selectedAddOnCard/SelectedAddOnCard';
import { useNavigate } from 'react-router-dom';

const Summary = () => {
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

  return (
    <div className='body bg-light-gray h-screen flex justify-center items-center font-ubuntu'>
      <div className='form-container bg-white flex h-[65vh] w-1/2 p-4 rounded-lg'>
        <div className='form-sidebar h-full w-[45%] bg-desktop-sidebar bg-center bg-no-repeat bg-cover rounded-xl flex flex-col p-8 gap-y-8'>
          <div className='step flex items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>1</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 1</h5>
              <h4 className='text-white font-bold'>YOUR INFO</h4>
            </div>
          </div>
          <div className='step flex items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>2</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 2</h5>
              <h4 className='text-white font-bold'>SELECT PLAN</h4>
            </div>
          </div>
          <div className='step flex items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>3</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 3</h5>
              <h4 className='text-white font-bold'>ADD-ONS</h4>
            </div>
          </div>
          <div className='step flex items-center gap-x-4'>
            <div className='step-number flex justify-center items-center bg-light-blue w-10 h-10 rounded-full'>
              <p className='text-black font-extrabold'>4</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 4</h5>
              <h4 className='text-white font-bold'>SUMMARY</h4>
            </div>
          </div>
        </div>
        <div className='plan-section flex items-center flex-col gap-y-8 w-full px-24 pt-10'>
          <div className='plan-header w-full flex flex-col gap-y-1'>
            <h1 className='text-h1 text-marine-blue font-black'>Finishing Up</h1>
            <p className='text-cool-gray '>Double-check everything looks OK before confirming.</p>
          </div>
          <div className='add-ons flex flex-col gap-y-2 w-full bg-magnolia p-5 rounded-lg'>
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
            <p className='text-cool-gray'>{`Total ${
              selectedPlan.type === 'monthly' ? '(per month)' : '(per year)'
            }`}</p>
            <p className='text-purplish-blue font-black text-xl'>
              +${getTotalPrice()}
              {selectedPlan.type === 'monthly' ? '/mo' : '/yr'}
            </p>
          </div>
      <div className='btn w-full flex justify-between mt-7'>
            <button className='btn text-cool-gray font-extrabold py-3 px-6 rounded-lg w-max self-end  mt-16 hover:text-marine-blue' onClick={handleGoBack}>
              Go Back
            </button>
            <button className='btn bg-purplish-blue text-white py-3 px-6 rounded-lg w-max self-end  mt-16 hover:bg-button-hover-blue' >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
