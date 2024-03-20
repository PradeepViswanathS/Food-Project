import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
       <div className=' text-4xl kanit-bold m-20'>404 Not Found</div>
       <Link to="/" className=' kanit-medium ml-20 border-[2px] rounded-lg p-2 text-lg border-black hover:bg-gray-200'>Home</Link>
    </div>
  )
}

export default Notfound
 