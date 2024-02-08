import React from 'react'

const AddOns = () => {
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
          <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
            <p className='text-white'>4</p>
          </div>
          <div className='step-text'>
            <h5 className='text-cool-gray font-thin text-h5'>STEP 4</h5>
            <h4 className='text-white font-bold'>SUMMARY</h4>
          </div>
        </div>
      </div>
      <div className='plan-section flex items-center flex-col gap-y-8 w-full px-24 pt-10'>
        <div className='plan-header w-full flex flex-col gap-y-1'>
          <h1 className='text-h1 text-marine-blue font-black'>Pick add-ons</h1>
          <p className='text-cool-gray '>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className='plan-cards flex gap-x-4 w-full h-1/3 '>
         
        </div>
        <div className='btn w-full flex justify-between'>
          <button className='btn text-cool-gray font-extrabold py-3 px-6 rounded-lg w-max self-end  mt-16 hover:text-marine-blue' >Go Back</button>
          <button className='btn bg-marine-blue text-white py-3 px-6 rounded-lg w-max self-end  mt-16 hover:bg-button-hover-blue'>Next Step</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddOns