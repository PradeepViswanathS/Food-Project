import React from 'react'
function Productcard(props) {
  return (
    
    <div className=' hover:shadow-lg    p-2 2xl:w-[300px] 2xl:h-[320px] 2xl:m-5 2xl:p-4 items-center rounded-xl cursor-pointer  '>
        <img src={props.Images} alt='HotelImage' className='rounded-xl h-[175px] w-[270px]' />
        <h1 className='lg:text-xl md:text-lg kanit-medium'>{props.name}</h1>
        <div className='flex md:text-lg kanit-regular'>
            <p>{props.Time} -</p>
           <p>{props.Rate}</p>
        </div>
        <p className='kanit-regular text-lg'>{props.Area}</p>
    </div>
    
  )
}

export default Productcard
