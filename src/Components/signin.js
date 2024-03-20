import React from 'react'
import Signincard from './Signincard'

function signin() {
  
  return (
  <div className=' md:flex md:flex-row md:justify-between md:mt-24 flex flex-col justify-center items-center align-middle bg-primary p-28 mt-10'>
    <h1 className='kanit-bold md:text-7xl text-4xl m-12 text-white'>Food Inc.</h1>
    <div className='hidden md:block w-[5px] h-[30rem] border-[2px] rounded-sm border-white bg-white'></div>
    <Signincard />
  </div>
  )
}

export default signin
