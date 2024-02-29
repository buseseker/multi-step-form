import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonelInfoForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && email.trim() && phone.trim()) {
      setName('');
      setEmail('');
      setPhone('');

      navigate('/select-plan');
    } else {
      !name.trim() && setNameError(true);
      !email.trim() && setEmailError(true);
      !phone.trim() && setPhoneError(true);
    }
  };

  return (
    <div className='form-section flex items-center flex-col gap-y-8 px-24 pt-10 relative  xs:pb-10 sm:pb-10 lg:pb-0 lg:w-full xs:w-[95%] sm:w-[95%] xs:mx-auto sm:mx-auto xs:-my-16 sm:-my-16 lg:my-0 xs:bg-white sm:bg-white xs:rounded-lg sm:rounded-lg'>
      <div className='form-header w-full flex flex-col gap-y-1'>
        <h1 className='text-h1 text-marine-blue font-black'>Personal info</h1>
        <p className='text-cool-gray '>Please provide your name, email address, and phone number.</p>
      </div>
      <div className='w-full'>
        <form className='flex flex-col gap-y-5' action=''>
          <div className='name-input'>
            <div className='label-err flex justify-between'>
              <label className='text-marine-blue' htmlFor='name'>
                Name
              </label>{' '}
              {nameError && <p className='text-red-700 font-black'>This field is required</p>}
            </div>
            <input
              className={`border ${
                emailError ? 'border-red-700' : 'border-cool-gray'
              } py-2 pl-4 rounded-lg mt-2 w-full font-bold`}
              type='text'
              id='name'
              name='name'
              placeholder='e.g Stephen King'
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
            />
          </div>
          <div className='email-input'>
            <div className='label-err flex justify-between'>
              <label className='text-marine-blue' htmlFor='email'>
                Email Address
              </label>{' '}
              {emailError && <p className='text-red-700 font-black'>This field is required</p>}
            </div>
            <input
              className={`border ${
                emailError ? 'border-red-700' : 'border-cool-gray'
              } py-2 pl-4 rounded-lg mt-2 w-full font-bold`}
              type='email'
              name='email'
              id='email'
              placeholder='e.g stephenking@gmail.com'
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </div>
          <div className='phone-input'>
            <div className='label-err flex justify-between'>
              <label className='text-marine-blue' htmlFor='phone-number'>
                Phone Number
              </label>{' '}
              {phoneError && <p className='text-red-700 font-black'>This field is required</p>}
            </div>
            <input
              className={`border ${
                emailError ? 'border-red-700' : 'border-cool-gray'
              } py-2 pl-4 rounded-lg mt-2 w-full font-bold`}
              type='tel'
              placeholder='e.g +1 234 567 890'
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              value={phone}
            />
          </div>
        </form>
      </div>
      <div className='flex justify-end absolute lg:right-24 xs:right-0 sm:right-0 lg:bottom-4 xs:-bottom-60 sm:-bottom-60 xs:w-full sm:w-full'>
        <button
          className='btn bg-marine-blue text-white py-3 px-6 rounded-lg w-max self-end hover:bg-button-hover-blue'
          type='submit'
          onClick={handleSubmit}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PersonelInfoForm;
