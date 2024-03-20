import React from 'react'
import Signupcard from './Signupcard'

function signup() {
  return (
    <div className=' md:flex md:flex-row md:justify-between md:mt-24 flex flex-col justify-center items-center align-middle bg-primary p-28 mt-4 '>
         <h1 className='kanit-bold md:text-7xl text-5xl m-12 text-white'>Food Inc.</h1>
        <div className='hidden md:block w-[5px] h-[30rem] border-[2px] rounded-sm border-white bg-white'></div>
        <Signupcard />
      </div>
  )
}

export default signup
