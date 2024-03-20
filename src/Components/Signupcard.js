import React from 'react'
import { Link } from 'react-router-dom'
function Signupcard() {
  return (
    <div className='p-5 md:w-[400px] w-[350px]'>
        <div className=' flex flex-col justify-center rounded-lg  p-8 py-8  shadow-black shadow-2xl bg-white'>
            <button className=' shadow-lg shadow-gray-300 p-3 kanit-medium border-[1px]  border-gray-200 hover:bg-gray-100'>Signup with Google </button>
            <p className='flex justify-center text-xl text-gray-300 my-5'>-------OR-------</p>
            <p className=' p-1 kanit-medium'>Username:</p>
            <input  type='text' placeholder='Username' className=' my-3 border-2 border-gray-400 rounded-md p-[4px]' />
            <p className=' p-1 kanit-medium'>Password:</p>
            <input type='text' placeholder='Password' className='my-3 border-2 border-gray-400 rounded-md p-[4px]' />
            <p className=' p-1 kanit-medium'>Retype Password:</p>
            <input type='text' placeholder='Retype Password' className='my-3 border-2 border-gray-400 rounded-md p-[4px]' />
            <Link to='/' className=' my-3 py-2 kanit-medium text-center  bg-green-500 rounded-md p-1 text-white hover:shadow-md '>Register</Link>
    </div>
    </div>
  )
}

export default Signupcard
