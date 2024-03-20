import React from 'react'
import Slider from 'react-slick'
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import Caroselcomp from './Caroselcomp';
import Top from '../store/Top'

function Carosel() {
    var settings ={
        dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    cssEase:"linear",
    rtl:true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1303,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
  return (
    <div className=' p-5 text-black'>
        <h1 className='text-3xl lg:text-4xl border-b-2 border-gray-300 kanit-bold p-2'>Top Restaurants Arround You</h1>
    <Slider {...settings} className='mx-[100px] m-10'>
    {Top.map((x) => {
        return<Caroselcomp key={x.id} Images={x.image} name={x.name} rate={x.rate} time={x.time} />
    })}

    </Slider>
        </div>
  )
}


export default Carosel
