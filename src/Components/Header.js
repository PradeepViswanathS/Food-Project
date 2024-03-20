import React from 'react'
import { Bars4Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {
    const [togglMenu, setToggleMenu] = useState(false);
  return (
    <div className=' m-[1] sticky'>
    <div className=' flex justify-between bg-primary text-white p-4  left-0 right-0  ' id='Home'>
      <h1 className='text-4xl kanit-bold'>Food Inc.</h1>
      <nav className='hidden md:block'>
      <ul className='flex mt-2 text-2xl kanit-medium'>
        <li className='px-4 cursor-pointer'><a href= '#Home'>Home</a></li>
        <li className='px-4 cursor-pointer'><a href='#About'>About US</a></li>
        <li className='px-4 cursor-pointer'><a href='#Contact'>Contact</a></li>
      </ul>
      </nav>
      <div className='hidden md:block'>
      <Link to='/Signin' className='sign'>Signin</Link>
      <Link to='/Signup' className='sign'>Signup</Link>
      </div>
      {togglMenu && <nav className='block md:hidden mobile-nav'>
      <ul onClick={() => setToggleMenu(!togglMenu)} className='flex flex-col mt-2 text-xl kanit-medium text-center'>
        <a href='#Home'><li className='mobile-list'>Home</li></a>
        <a href='#About'><li className='mobile-list'>About US</li></a>
        <a href='#Contact'><li className='mobile-list'>Contact</li></a>
      </ul>
      <Link to={'/Signin'} className=' absolute w-full border-t-2 border-black bottom-0 kanit-medium text-xl pl-10 p-5 hover:bg-gray-300 cursor-pointer'>Signin</Link>
      </nav>}
      <button onClick={() => setToggleMenu(!togglMenu)} className='block md:hidden'><Bars4Icon className=' text-white h-10'/></button>
    </div>
    </div>
  )
}

export default Header
