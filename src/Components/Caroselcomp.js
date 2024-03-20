import React from 'react'


function Caroselcomp(props) {
  return (
    <div className=' hover:shadow-lg  rounded-xl p-4 py-11  cursor-pointer  '>
        <img src={props.Images} alt='Dominos' className='rounded-xl ' />
        <h1 className='text-xl kanit-medium'>{props.name}</h1>
        <div className='flex kanit-regular'>
            <p>{props.time} -</p>
           <p>{props.rate}</p>
        </div>
        <p className='kanit-regular'>{props.area}</p>
    </div>
  )
}

export default Caroselcomp
