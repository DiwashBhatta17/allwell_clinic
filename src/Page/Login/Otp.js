import React, { useState } from 'react';
import img from './img/Group 37391.png';

function Otp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = Array.from({ length: 4 });

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputs[index - 1].focus();
    }
  };
  
  function handelSubmit(){
    const otpValue = parseInt(otp.join(''));
    console.log('Enter OTP: ', otpValue);
    setOtp(["","","",""]);
  }

  return (
    <div className='flex justify-center items-center h-screen dhamilo'>
      <div className='w-[260px] py-2 bg-white text-center rounded-lg flex flex-col justify-center items-center border'>
        <img className='my-2 w-[40%]' src={img} alt="img" />
        <h1 className='text-black text-2xl mt-2 mb-1 font-bold'>Enter OTP Code</h1>
        <p className='text-sm text-[#746E6E]'>Check your mail for OTP</p>
        <div className='flex gap-3 my-3'>
          {otpInputs.map((input, index) => (
            <input
              key={index}
              type="text"
              className='border rounded-lg w-[40px] text-center font-bold h-[50px]'
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (otpInputs[index] = el)}
            />
          ))}
        </div>
        <button  onClick={handelSubmit} className='hover:bg-[#5672d7] bg-[#2182f1c4] active:bg-[#88b7ed] text-white px-[80px] py-2 rounded-md my-2'>Submit</button>
      </div>
    </div>
  );
}

export default Otp;
