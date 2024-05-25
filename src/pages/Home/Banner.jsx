import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const Banner = () => {
  return (
    <>
    <div className='bg-[#313131]'>
      <div className="w-full h-[73vh] flex items-center justify-center flex-col relative z-10 lg:py-16
      md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
      style={{
        backgroundImage: "url('/Fat crying 1920 b.png')",
        // bbackgroundSize: "20%",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat', 
        }}
      >
        <div className="w-full h-full bg-black/20 absolute top-0 left-0 -z-10"></div>
        {/* <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold
        text-gray-200 uppercase mb-4 text-center'>
          <span className="text-[#FF6B00]">Sweat</span> is just <span className="text-[#FF6B00]">Fat Crying</span>
        </h1>
        <p className="text-lg text-gray-300 font-medium mb-8 text-center">
          Feel the burn today, achieve the greatness tomorrow
        </p> */}
        <PrimaryBtn className=" lg:ml-[55vh] md:ml-[40vh] sm:ml-[30vh] lg:mt-[50vh] md:mt-[35vh] sm:mt-[25vh] mt-[14vh]
         lg:px-20 md:px-16 sm:px-11 lg:py-3 md:py-3 sm:py-2 py-0.5 lg:text-[3vh] md:text-[2vh] sm:text-[12px] text-[10px] uppercase">
          Become a Member
          </PrimaryBtn>
        </div>
    </div>
    </>
  )
}

export default Banner
