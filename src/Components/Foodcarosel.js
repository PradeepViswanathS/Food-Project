import React from 'react'
import Slider from 'react-slick'
import Food from '../store/Storage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import Foodcard from './Foodcard';

function Foodcarosel() {
    var settings ={
        dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    cssEase:"linear",
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
    rtl: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1629,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
    };
  return (
    <div className=' p-5 text-black'>
        <h1 className='text-3xl lg:text-4xl border-b-2 border-gray-300 kanit-bold p-2'>Whats On Your Mind??</h1>
    <Slider {...settings} className='mx-[100px]'>
    {Food.map((x) => {
        return(<Foodcard id={x.id} image ={x.image} name={x.name} />)})
    }
    </Slider>
    </div>
  );
}

export default Foodcarosel