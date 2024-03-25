import React from 'react';
import SummaryCard from '../../components/summaryCard/SummaryCard';

const Summary = () => {


  return (
    <div className='body bg-light-gray h-screen flex justify-center items-center font-ubuntu'>
      <div className='summary-container flex rounded-lg lg:h-38 xs:h-full sm:h-full lg:w-3/5 xs:w-full sm:w-full lg:bg-white xs:bg-light-gray sm:bg-light-gray xs:flex-col sm:flex-col lg:flex-row lg:p-4 '>
      <div className='summary-sidebar flex p-8 gap-y-8 bg-center bg-no-repeat bg-cover lg:flex-col xs:justify-center sm:justify-center lg:justify-start xs:p-10 sm:p-10 lg:h-full xs:h-[25%] sm:h-[25%] lg:w-[40%] xs:w-full sm:w-full lg:bg-desktop-sidebar xs:bg-mobile-sidebar sm:bg-mobile-sidebar lg:rounded-xl'>
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
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>3</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 3</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>ADD-ONS</h4>
            </div>
          </div>
          <div className='step flex lg:items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center bg-light-blue w-10 h-10 rounded-full'>
              <p className='text-black font-extrabold'>4</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5 xs:hidden sm:hidden lg:block'>STEP 4</h5>
              <h4 className='text-white font-bold xs:hidden sm:hidden lg:block'>SUMMARY</h4>
            </div>
          </div>
        </div>
       <SummaryCard/>
      </div>
    </div>
  );
};

export default Summary;
