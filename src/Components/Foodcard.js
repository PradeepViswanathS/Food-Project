import React from 'react'

function Foodcard(props) {
  return (
    
    <div key={props.id} className='flex flex-col  justify-between rounded-lg m-10 p-1 cursor-pointer hover:shadow-md'>
        <div>
           <img src={props.image} alt='food' className=' rounded-[50%]  ' /> 
        </div>
        <div className=' text-lg flex justify-center kanit-regular py-5'>
            <p>{props.name}</p>
        </div>
      
    </div>
    
    
  )
}


export default Foodcard
