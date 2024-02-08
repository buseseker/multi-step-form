import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddOns = () => {
  const navigate = useNavigate();

  const [selectedCards, setSelectedCards] = useState([]);

  const handleCheckBox = (card) => {
    if (selectedCards.includes(card)) {
      setSelectedCards(selectedCards.filter((c) => c !== card));
    } else {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const isSelected = (card) => selectedCards.includes(card);

  const handleGoBack = () => {
    navigate('/select-plan');
  };

  const handleNextStep = () => {
    navigate('/summary');
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
            <div className='step-number flex justify-center items-center bg-light-blue w-10 h-10 rounded-full'>
              <p className='text-black font-extrabold'>3</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 3</h5>
              <h4 className='text-white font-bold'>ADD-ONS</h4>
            </div>
          </div>
          <div className='step flex items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>4</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 4</h5>
              <h4 className='text-white font-bold'>SUMMARY</h4>
            </div>
          </div>
        </div>
        <div className='add-ons-section flex items-center flex-col gap-y-8 w-full px-24 pt-10'>
          <div className='add-ons-header w-full flex flex-col gap-y-1'>
            <h1 className='text-h1 text-marine-blue font-black'>Pick add-ons</h1>
            <p className='text-cool-gray '>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className='add-ons flex flex-col gap-y-10 w-full'>
            <div className={`add-on flex justify-between items-center w-full border ${isSelected(1) ? 'border-violet-900 bg-indigo-50' : 'border-light-gray'} rounded-lg h-20 px-5`}>
              <div className='flex gap-x-5'>
                <label className='inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    className='form-checkbox border-gray-300 rounded-md w-5 h-5 accent-indigo-600 checked:border-transparent focus:ring-blue-400'
                    checked={isSelected(1)}
                    onChange={() => handleCheckBox(1)}
                  />
                </label>
                <div className='add-on-text'>
                  <h5 className='text-marine-blue font-extrabold'>Online service</h5>
                  <p className='text-cool-gray'>Access to multiplayer games</p>
                </div>
              </div>
              <div className='price'>
                <p>+$1/mo</p>
              </div>
            </div>
            <div className={`add-on flex justify-between items-center w-full border ${isSelected(2) ? 'border-violet-900 bg-indigo-50' : 'border-light-gray'} rounded-lg h-20 px-5`}>
              <div className='flex gap-x-5'>
                <label className='inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    className='form-checkbox border-gray-300 rounded-md w-5 h-5 accent-indigo-600 checked:border-transparent focus:ring-blue-400'
                    checked={isSelected(2)}
                    onChange={() => handleCheckBox(2)}
                  />
                </label>
                <div className='add-on-text'>
                  <h5 className='text-marine-blue font-extrabold'>Larger storage</h5>
                  <p className='text-cool-gray'>Extra 1TB of cloud save</p>
                </div>
              </div>
              <div className='price'>
                <p>+$2/mo</p>
              </div>
            </div>
            <div className={`add-on flex justify-between items-center w-full border ${isSelected(3) ? 'border-violet-900 bg-indigo-50' : 'border-light-gray'} rounded-lg h-20 px-5`}>
              <div className='flex gap-x-5'>
                <label className='inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    className='form-checkbox border-gray-300 rounded-md w-5 h-5 accent-indigo-600 checked:border-transparent focus:ring-blue-400'
                    checked={isSelected(3)}
                    onChange={() => handleCheckBox(3)}
                  />
                </label>
                <div className='add-on-text'>
                  <h5 className='text-marine-blue font-extrabold'>Customizable profile</h5>
                  <p className='text-cool-gray'>Custom theme on your profile</p>
                </div>
              </div>
              <div className='price'>
                <p>+$2/mo</p>
              </div>
            </div>
          </div>
          <div className='btn w-full flex justify-between'>
            <button className='btn text-cool-gray font-extrabold py-3 px-6 rounded-lg w-max self-end  mt-4 hover:text-marine-blue' onClick={handleGoBack}>
              Go Back
            </button>
            <button className='btn bg-marine-blue text-white py-3 px-6 rounded-lg w-max self-end  mt-4 hover:bg-button-hover-blue' onClick={handleNextStep}>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
