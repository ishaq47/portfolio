import React from 'react';

import './style';
const Speaking = () => {
  return (
    <>
    <div id='speaking' className='flex w-full flex-col h-[100vh] justify-start items-center gap-4 p-20'>
      <p className="text-2xl text-secondary font-medium">
        Public Speaking
      </p>
      <p className="text-5xl text-primary font-medium">
        Look my contributaions
      </p>
      <div className="flex items-center justify-center w-1/12 gap-1 my-4  bg-secondary text-secondary rounded md:bg-transparent">
        <span className="w-3/5 bg-secondary h-1 rounded-sm"></span>
        <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
        <span className="w-1/5 bg-secondary h-1 rounded-sm"></span>
      </div>

      
      </div>

   

    </>
  )
}

export default Speaking;