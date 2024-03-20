import React from 'react'
import Img from '../assets/Foodinc.png'
import Img2 from '../assets/About.jpeg'
function About() {
  return (
    <div>
      <div className=' w-full h-1 border-black bg-black'></div>
    <div className=' p-14' id='About'>
        <h1 className=' text-6xl kanit-bold border-b-4 border-black w-[270px]'>About Us</h1>
        <div className=' xl:flex xl:flex-row flex flex-col lg:justify-between'>
        <img src={Img} alt='Pissa' className=' rounded-lg xl:mt-[70px] p-5 mt-[40px] w-full xl:w-[800px] h-[400px] ' />
        <div className=' bg-secondary text-white  rounded-lg xl:mt-[200px] mt-[50px] xl:text-xl text-sm p-8 xl:w-1/2 kanit-medium shadow-2xl shadow-black'>
        <p>Welcome to Food Inc., where we're passionate about connecting people with exceptional food experiences. Founded on the belief that everyone deserves access to delicious, convenient dining options, Food Inc. strives to elevate the way you enjoy your favorite meals.
At Food Inc., we're more than just an online food delivery service – we're a culinary community dedicated to bringing people together through the universal language of food. With a diverse selection of partner restaurants spanning a wide range of cuisines, we're committed to satisfying every craving and catering to every taste bud.
Our journey began with a simple idea: to make ordering food as easy and enjoyable as possible. We understand the hustle and bustle of modern life, where time is precious and convenience is key. That's why we've crafted an intuitive online platform and mobile app that make it effortless to browse menus, place orders, and track deliveries in real-time, all with the tap of a button.
But Food Inc. is more than just a transactional service – it's a celebration of culinary diversity and exploration. Our curated selection of partner restaurants isn't just about convenience; it's about showcasing the rich tapestry of flavors and cultures that make up our global food landscape. Whether you're craving the familiar comforts of home-cooked classics, the bold spices of exotic cuisines, or the fresh simplicity of healthy fare, Food Inc. 
Quality is at the heart of everything we do. 
</p></div>
        </div>
        <div className=' xl:flex xl:flex-row flex flex-col xl:justify-between'>
        <img src={Img2} alt='Pissa' className=' rounded-lg mt-[20px]  p-5 w-full xl:w-[800px] h-[400px] ' />
        <div className=' bg-secondary text-white rounded-lg xl:mt-[200px] mt-[50px] xl:text-xl text-sm p-8 xl:w-1/2 kanit-medium shadow-2xl shadow-black'>
        <p>From the moment you place your order to the second it arrives at your doorstep, we're committed to delivering excellence in every aspect of your dining experience. We partner only with reputable restaurants known for their commitment to quality ingredients, expert craftsmanship, and exceptional service. Each dish is prepared with care and attention to detail, ensuring that every bite is a moment of pure culinary bliss.
But our dedication to quality doesn't stop there. We're constantly innovating and evolving to better serve our customers and our communities. From implementing sustainable practices to reducing our environmental footprint, to supporting local businesses and charitable initiatives, we're committed to making a positive impact every step of the way.
At Food Inc., we believe that great food has the power to bring people together, spark joy, and create lasting memories. Whether you're sharing a meal with loved ones, treating yourself to a solo indulgence, or simply fueling up during a busy workday, we're honored to be a part of your culinary journey.
Join us at Food Inc. and discover a world of flavor, convenience, and community. Because when it comes to great food, we believe that everyone deserves a seat at the table.
</p></div>
        </div>
      </div>
      </div>
  )
}

export default About
