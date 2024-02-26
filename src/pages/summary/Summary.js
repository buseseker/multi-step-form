import React, { useContext } from 'react';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';

const Summary = () => {
  const { selectedPlan, selectedCard, selectedAddOns, selectedAddOnPrices, selectedPrice } = useContext(SelectedServiceContext);

  // Seçilen plana göre fiyatı belirlemek
  const getPlanPrice = () => {
    return selectedPlan === 'monthly' ? selectedPrice.monthly : selectedPrice.yearly;
  };

    // Seçilen addon'ların ve fiyatlarının listesi
    const getSelectedAddOns = () => {
      return selectedAddOns.map((addOnId) => (
        <div className='summary flex justify-between' key={addOnId}>
          <p>{getAddOnName(addOnId)}</p>
          <p>+${getAddOnPrice(addOnId)}/mo</p>
        </div>
      ));
    };

      // Addon ID'sine göre addon ismini alma
  const getAddOnName = (addOnId) => {
    // Addon isimleri ve ID'leri burada alınacak
    // Örnek olarak sadece birkaç örnek gösteriyorum, gerçek verilere göre güncellenmeli
    switch (addOnId) {
      case 1:
        return 'Online Service';
      case 2:
        return 'Larger Storage';
      case 3:
        return 'Customizable Profile';
      default:
        return '';
    }
  };

   // Addon ID'sine göre addon fiyatını alma
   const getAddOnPrice = (addOnId) => {
    return selectedAddOnPrices[addOnId];
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
          <div className='add-ons flex flex-col gap-y-2 w-full border border-black'>
            <div className='summary flex justify-between'>
              <div className='service-text'>
                {selectedCard} {selectedPlan === 'monthly' ? '(Monthly)' : '(Yearly)'} <p className='cursor-pointer'>Change</p>
              </div>
              <div className='service-price'></div>
              <p>{getPlanPrice()}</p>
            </div>
            <hr />
            <div className='summary flex justify-between'>
              <p>Online Service</p>
              <p>+$1/mo</p>
            </div>
            <div className='summary flex justify-between'>
              <p>Larger Storage</p> 
              <p>+$2/mo</p>
            </div>
            <div className='summary total-price flex justify-between'>
              <p>Total (per month)</p>
              <p>+$12/mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
