import React, { useEffect, useState } from 'react'
import Img1 from '../assets/food.jpeg'
import Img2 from '../assets/food2.jpeg'
import Img3 from '../assets/food3.jpeg'
import Img4 from '../assets/food4.jpeg'
import Img5 from '../assets/food5.jpeg'
function Banners() {
    const [index,setIndex] = useState(3);
    const images = [Img1,Img2,Img3,Img4,Img5];
    const decrement = () =>{
        if(index === 0){
            setIndex(images.length - 1);
        }
        else{
            setIndex(index-1);
        }
    }
    const increment = ()=>{
        setIndex((index+1) % images.length)
    }
    useEffect(() =>{
        const timer = setTimeout(() => {
            increment();
        },3000);
        return () => clearTimeout(timer);
    },[index])
    
  return (
    <div className='flex justify-between p-12 bg-secondary  '>
      <button  onClick={decrement} className=' text-3xl md:block hidden'>←</button>
      <img src= {images[index]} alt='images' className=' w-[1500px] md:h-[600px] rounded-lg  ' />
      <button onClick={increment} className=' text-3xl md:block hidden'>→</button>
    </div>
  )
}

export default Banners
