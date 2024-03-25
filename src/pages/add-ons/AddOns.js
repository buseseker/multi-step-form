import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';
import AddOnCard from '../../components/addOnCard/AddOnCard';

const AddOns = () => {
  const { addOns } = useContext(SelectedServiceContext);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/select-plan');
  };

  const handleNextStep = () => {
    navigate('/summary');
  };

  return (
    <div className='body bg-light-gray h-screen flex justify-center items-center font-ubuntu'>
      <div className='add-ons-container flex rounded-lg lg:h-38 xs:h-full sm:h-full lg:w-3/5 xs:w-full sm:w-full lg:bg-white xs:bg-light-gray sm:bg-light-gray xs:flex-col sm:flex-col lg:flex-row lg:p-4 '>
        <div className='add-ons-sidebar flex p-8 gap-y-8 bg-center bg-no-repeat bg-cover lg:flex-col xs:justify-center sm:justify-center lg:justify-start xs:p-10 sm:p-10 lg:h-full xs:h-[25%] sm:h-[25%] lg:w-[40%] xs:w-full sm:w-full lg:bg-desktop-sidebar xs:bg-mobile-sidebar sm:bg-mobile-sidebar lg:rounded-xl'>
          <div className='step flex lg:items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>1</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 1</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>YOUR INFO</h4>
            </div>
          </div>
          <div className='step flex lg:items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>2</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 2</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>SELECT PLAN</h4>
            </div>
          </div>
          <div className='step flex lg:items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center bg-light-blue w-10 h-10 rounded-full'>
              <p className='text-black font-extrabold'>3</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 3</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>ADD-ONS</h4>
            </div>
          </div>
          <div className='step flex lg:items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>4</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 4</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>SUMMARY</h4>
            </div>
          </div>
        </div>
        <div className='add-ons-section flex flex-col lg:gap-y-8 sm:gap-y-8 xs:gap-y-4 pt-10 lg:pb-10 sm:pb-10 xs:pb-10 relative xs:px-6 lg:w-full xs:w-[95%] sm:w-[95%] xs:mx-auto sm:mx-auto xs:-my-16 sm:-my-16 lg:my-0 xs:bg-white sm:bg-white xs:rounded-lg sm:rounded-lg'>
          <div className='add-ons-header w-full flex flex-col gap-y-1 lg:px-16 sm:px-24'>
            <h1 className='lg:text-h1 text-marine-blue font-black xs:text-m'>Pick add-ons</h1>
            <p className='text-cool-gray '>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className='selection flex flex-col items-center lg:gap-y-8 lg:gap-y-8 xs:gap-y-4 8xs:w-full'>
            <div className='add-ons-cards flex flex-col gap-y-5 w-full lg:px-16 sm:px-24'>
              {addOns.map((addOn) => {
                return <AddOnCard key={addOn.id} addOn={addOn} />;
              })}
            </div>
            <div className='btn w-full flex justify-between lg:mt-12 sm:mt-4 xs:mt-4 lg:px-16 sm:px-24'>
              <a
                className='btn text-cool-gray font-extrabold py-3 px-6 rounded-lg w-max hover:text-marine-blue'
                onClick={handleGoBack}
              >
                Go Back
              </a>
              <a
                className='btn bg-marine-blue text-white py-3 px-6 rounded-lg w-max hover:bg-button-hover-blue'
                onClick={handleNextStep}
              >
                Next Step
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
