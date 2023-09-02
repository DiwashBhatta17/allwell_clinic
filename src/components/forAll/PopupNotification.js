import React from 'react';

function PopupNotification(props) {
  return (
    <div className='flex fixed w-full justify-center items-center h-[10vh] '>
        <div className='bg-[#48e225d9] rounded-xl text-4xl font-bold text-white px-[80px] py-2'>{props.message}</div>
      
    </div>
  )
}

export default PopupNotification;
