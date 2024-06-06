import React from 'react';
import { CheckSquare, Dumbbell, Square } from "lucide-react";
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import { Link } from 'react-scroll';


const PricingPlan = () => {
  return (
    <>
      <div className='bg-[#202020]'> 
        <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16
          md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
          <h6 className="text-lg font-medium flex items-center gap-x-2 mb-6 lg:text-[1.5rem] 
          md:text-[2.0rem] sm:text-[1.9rem] text-[#FF6B00]">
            <Dumbbell className="mr-3 lg:w-6 lg:h-11 md:w-4 md:h-4 text-[#FFAB6E]" />
            Pricing Plan
          </h6>
          <div className='w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap'>
            {/* Basic Plan */}
            <div className='text-center lg:w-[63%] md:w-full sm:w-full w-full h-auto px-10 lg:py-10
              md:py-10 sm:py-10 py-10 bg-black/10 rounded-lg border-[2.5px] border-[#FF6B00]/60
              hover:border-[#550000]/70 hover:bg-gray-600/10 ease-out duration-700
              cursor-pointer'>
              <h2 className='lg:text-3xl md:text-3xl sm:text-2xl text-xl text-white font-semibold mb-5'>
                Price and Benefits
              </h2>
              <h1 className='lg:text-3.5xl md:text-3xl sm:text-3xl text-3xl text-[#FF6B00] 
              font-bold mb-3 tracking-wide'>
                Ksh. 4000
                <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 
                font-medium tracking-normal'>
                  / month
                </span>
              </h1>
              <hr className="border-gray-600/40 my-7" />
              <div className='border-gray-600/40 my-7 text-center'>
                <div className='w-full h-auto flex items-start gap-x-2'>
                  <CheckSquare className='w-5 h-5 text-[#FF6B00]'/>
                  <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                  <span className='text-[#FF6B00]'>Access to all gym Facilities:</span> Full access to our state-of-the-art fitness equipment.
                  </p>
                </div>
                <hr className="border-gray-600/40 my-2" />
                <div className='w-full h-auto flex items-start gap-x-2'>
                  <CheckSquare className='w-5 h-5 text-[#FF6B00]'/>
                  <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                  <span className='text-[#FF6B00]'>Monthly Coaching:</span> Benefit from personalized monthly coaching sessions
                  </p>
                </div>
                <hr className="border-gray-600/40 my-2" />
                <div className='w-full h-auto flex items-start gap-x-2'>
                  <CheckSquare className='w-5 h-5 text-[#FF6B00]'/>
                  <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                  <span className='text-[#FF6B00]'>1 Month Membership:</span> Enjoy the flexibility of a one-month membership.
                  </p>
                </div>
                <hr className="border-gray-600/40 my-2" />
                <div className='w-full h-auto flex items-start gap-x-2'>
                  <CheckSquare className='w-5 h-5 text-[#FF6B00]'/>
                  <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                  <span className='text-[#FF6B00]'>Access to all gym classes:</span> Join any of our high-energy fitness and dance classes
                  </p>
                </div>
                <hr className="border-gray-600/40 my-2" />
                <div className='w-full h-auto flex items-start gap-x-2'>
                  <CheckSquare className='w-5 h-5 text-[#FF6B00]'/>
                  <p className='text-gray-400 lg:text-base md:text-base sm:text-base text-sm'>
                  <span className='text-[#FF6B00]'>Locker and shower access:</span> Take advantage of our secure lockers and heated showers.
                  </p>
                </div>
                <Link to='bannerSection' smooth={true} duration={500} className='w-full'>
                <PrimaryBtn className='w-full h-11 text-lg justify-center 
                tracking-wider font-semibold mt-5 uppercase'>
                  Call Us
                </PrimaryBtn>
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPlan;
