import React from 'react'
import { Dumbbell, Menu, X } from "lucide-react";

const About = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap bg-[#202020] relative">
        <img src="./gyme website model unreflected 2.png" alt="gym-model" className="  w-2/5 " />
        <div className='lg:w-[50%] md:w-[50%] sm:w-[50%] w-[50%] h-auto lg:text-start
      md:text-start sm:text-start text-start'>
        <h6 className="font-medium text-[#FF6B00] flex items-center
        lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2mb-3 lg:text-[2.2rem] md:text-[2.0rem] sm:text-[1.9rem]
         ">

           <Dumbbell className=" mr-5 lg:w-9 lg:h-14 md:w-5 md:h-5 text-[#FFAB6E]" />
            ABOUT US
        </h6>
        <h1 className='lg:text-3xl md:text-3xl sm:text-2xl text-lg font-semibold
        text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0'>
            At Veterans Fitness, we believe in elevating your limits 
             every time you step through our doors.
        </h1>
        <p className="lg:text-base md:text-base sm:text-sm text-sm text-[#a7a7a7] font-medium mb-4">
            Veterans Fitness provides a workout environment that is not just a gym but a vibrant, energetic community hub.
            Veterans Fitness offers a state-of-the-art facility equipped with everything you need to achieve your fitness goals.
            <br />
            <br />
            Veterans Fitness is designed to cater to fitness enthusiasts of all levels. Our expansive gym floor features a wide range of weight training equipment,
            including multiple squat racks, an array of bench presses, various barbells, and a comprehensive selection of dumbbells in all weights. Whether you're a 
            beginner or a seasoned athlete, our facilities are set up to support your strength training journey.
        </p>
      </div>
      {/* Orange glow */}
      <div class="w-32 h-32 bg-[#FF6B00] rounded-full blur-[55px] absolute right-[35px] bottom-1 -z-1"></div>
     
      </div>
    
      
    </>
  )
}

export default About
