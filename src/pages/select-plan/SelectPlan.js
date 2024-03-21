import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';
import SelectedPlanCard from '../../components/selectedPlanCard/SelectedPlanCard';

const SelectPlan = () => {
  const { selectedPlan, setSelectedPlan, plans } = useContext(SelectedServiceContext);
  const navigate = useNavigate();

  const handleToggle = () => {
    setSelectedPlan((prevState) => ({ ...prevState, type: prevState.type === 'yearly' ? 'monthly' : 'yearly' }));
  };

  const handleGoBack = () => {
    navigate('/personel-info');
  };

  const handleNextStep = () => {
    if (!selectedPlan.id) {
      alert('Please select a plan before proceeding to the next step.');
      return;
    }

    navigate('/add-ons');
  };

  return (
    <div className='body bg-light-gray h-screen flex justify-center items-center font-ubuntu'>
      <div className='plan-container flex rounded-lg lg:h-38 xs:h-full sm:h-full lg:w-3/5 xs:w-full sm:w-full lg:bg-white xs:bg-light-gray sm:bg-light-gray xs:flex-col sm:flex-col lg:flex-row lg:p-4 '>
        <div className='plan-sidebar flex p-8 gap-y-8 bg-center bg-no-repeat bg-cover lg:flex-col xs:justify-center sm:justify-center lg:justify-start xs:p-10 sm:p-10 lg:h-full xs:h-[25%] sm:h-[25%] lg:w-[40%] xs:w-full sm:w-full lg:bg-desktop-sidebar xs:bg-mobile-sidebar sm:bg-mobile-sidebar lg:rounded-xl'>
          <div className='step flex lg:items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>1</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 1</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>YOUR INFO</h4>
            </div>
          </div>
          <div className='step flex lg:items-center gap-x-4'>
            <div className='step-number flex justify-center items-center bg-light-blue w-10 h-10 rounded-full'>
              <p className='text-black font-extrabold'>2</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 2</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>SELECT PLAN</h4>
            </div>
          </div>
          <div className='step flex lg:items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>3</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 3</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>ADD-ONS</h4>
            </div>
          </div>
          <div className='step flex lg:items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>4</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 4</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>SUMMARY</h4>
            </div>
          </div>
        </div>
        <div className='plan-section flex items-center flex-col lg:gap-y-8 sm:gap-y-8 xs:gap-y-4 pt-10 lg:pb-10 sm:pb-10 xs:pb-10 relative xs:px-6 lg:w-full xs:w-[95%] sm:w-[95%] xs:mx-auto sm:mx-auto xs:-my-16 sm:-my-16 lg:my-0 xs:bg-white sm:bg-white xs:rounded-lg sm:rounded-lg'>
          <div className='plan-header w-full flex flex-col gap-y-1 lg:px-16 sm:px-24'>
            <h1 className='lg:text-h1 text-marine-blue font-black xs:text-m'>Select your plan</h1>
            <p className='text-cool-gray '>You have the option of monthly or yearly billing.</p>
          </div>
          <div className='selection flex flex-col items-center gap-y-8 xs:w-full'>
            <div className='plan-cards flex lg:flex-row sm:flex-row xs:flex-col gap-x-4 w-full lg:px-16 sm:px-24 xs:gap-y-2'>
              {plans.map((plan) => {
                return <SelectedPlanCard key={plan.id} plan={plan} />;
              })}
            </div>
            <div className='toggle-container w-full lg:px-16 sm:px-24'>
              <div className='toggle flex justify-center ites-center bg-alabaster w-full p-3 '>
                <div>
                  <span
                    className={`mr-3 text-sm ${
                      selectedPlan.type === 'yearly'
                        ? 'text-cool-gray dark:text-cool-gray'
                        : 'text-marine-blue font-extrabold'
                    }`}
                  >
                    Monthly
                  </span>
                </div>
                <label className='relative inline-flex items-center cursor-pointer'>
                  <input
                    type='checkbox'
                    value=''
                    className='sr-only peer'
                    checked={selectedPlan.type === 'yearly'}
                    onChange={handleToggle}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <div>
                  <span
                    className={`ml-3 text-sm ${
                      selectedPlan.type === 'monthly'
                        ? 'text-cool-gray dark:text-cool-gray font-extrabold'
                        : 'text-marine-blue font-extrabold'
                    }`}
                  >
                    Yearly
                  </span>
                </div>
              </div>
            </div>
            <div className='btn w-full flex justify-between mt-14 lg:px-16 sm:px-24'>
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

export default SelectPlan;
