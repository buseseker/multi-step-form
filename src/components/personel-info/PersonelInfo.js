import React from 'react'

const PersonelInfo = () => {
  return (
    <div className="body bg-light-gray h-screen flex justify-center items-center font-ubuntu">
    <div className="form-container bg-white flex h-[65vh] w-1/2 p-4 rounded-lg">
      <div className="form-sidebar h-full w-[45%] bg-desktop-sidebar bg-center bg-no-repeat bg-cover rounded-xl flex flex-col p-8 gap-y-8">
        <div className="step flex items-center gap-x-4 ">
          <div className="step-number flex justify-center items-center border border-white w-10 h-10 rounded-full">
            <p className="text-white">1</p>
          </div>
          <div className="step-text">
            <h5 className="text-cool-gray font-thin text-h5">STEP 1</h5>
            <h4 className="text-white font-bold">YOUR INFO</h4>
          </div>
        </div>
        <div className="step flex items-center gap-x-4">
          <div className="step-number flex justify-center items-center border border-white w-10 h-10 rounded-full">
            <p className="text-white">2</p>
          </div>
          <div className="step-text">
            <h5 className="text-cool-gray font-thin text-h5">STEP 2</h5>
            <h4 className="text-white font-bold">SELECT PLAN</h4>
          </div>
        </div>
        <div className="step flex items-center gap-x-4">
          <div className="step-number flex justify-center items-center border border-white w-10 h-10 rounded-full">
            <p className="text-white">3</p>
          </div>
          <div className="step-text">
            <h5 className="text-cool-gray font-thin text-h5">STEP 3</h5>
            <h4 className="text-white font-bold">ADD-ONS</h4>
          </div>
        </div>
        <div className="step flex items-center gap-x-4">
          <div className="step-number flex justify-center items-center border border-white w-10 h-10 rounded-full">
            <p className="text-white">4</p>
          </div>
          <div className="step-text">
            <h5 className="text-cool-gray font-thin text-h5">STEP 4</h5>
            <h4 className="text-white font-bold">SUMMARY</h4>
          </div>
        </div>
      </div>
      <div className="form-section flex items-center flex-col gap-y-8 w-full px-24 pt-10">
        <div className="form-header w-full flex flex-col gap-y-1">
          <h1 className="text-h1 text-marine-blue font-black">Personal info</h1>
          <p className="text-cool-gray ">Please provide your name, email address, and phone number.</p>
        </div>
        <div className="w-full">
          <form className="flex flex-col gap-y-5" action="">
            <div className="name-input pr-3">
              <label className="text-marine-blue" htmlFor="name">
                Name
              </label>{" "}
              <br />
              <input className="border border-cool-gray py-2 pl-4 rounded-lg mt-2 w-full font-bold" type="text" id="name" name="name" placeholder="e.g Stephen King" required />
            </div>
            <div className="email-input pr-3">
              <label className="text-marine-blue" htmlFor="email">
                Email Address
              </label>{" "}
              <br />
              <input
                className="border border-cool-gray py-2 pl-4 rounded-lg mt-2 w-full font-bold"
                type="email"
                name="email"
                id="email"
                placeholder="e.g stephenking@gmail.com"
                required
              />
            </div>
            <div className="phone-input pr-3">
              <label className="text-marine-blue" htmlFor="phone-number">
                Phone Number
              </label>{" "}
              <br />
              <input
                className="border border-cool-gray py-2 pl-4 rounded-lg mt-2 w-full font-bold"
                type="tel"
                placeholder="e.g +1 234 567 890"
                required
              />
            </div>
            <button className="btn bg-marine-blue text-white py-3 px-6 rounded-lg w-max self-end mr-20 mt-16">Next Step</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PersonelInfo