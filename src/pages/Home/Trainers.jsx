import { Dumbbell, MoveRight } from 'lucide-react';
import React from 'react'
import SecondaryLink from "../../components/LinkBtn/SecondaryLink"


const Trainers = () => {
    const trainers = [
        {
          id: 1,
          trainerImg: "gym-trainer-2.jpg",
          name: "Janet Chebet",
          role: "Zumba traner",
        },
        {
          id: 2,
          trainerImg: "gym-trainer-1.jpg",
          name: "Richard Kariuki",
          role: "Gym Trainer",
        },
        {
          id: 3,
          trainerImg: "gym-trainer-4.png",
          name: "Johnathan Kamau",
          role: "Fitness coach",
        },
        {
          id: 4,
          trainerImg: "gym-trainer-3.jpg",
          name: "David Njoroge",
          role: "Prof. Fitness coach",
        },
      ];
  return (
    <>
    <div className='bg-[#171717]'>
    
      <div className="w-ful h-auto flex items-center justify-center flex-col lg:py-16
      md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="tex-lg font-medium  flex items-center gap-x-2 mb-6 lg:text-[1.5rem] 
        md:text-[2.0rem] sm:text-[1.9rem] text-[#FF6B00]">
        <Dumbbell className=" mr-3 lg:w-6 lg:h-11 md:w-4 md:h-4 text-[#FFAB6E]" />
        Our Expert Trainers
        </h6>
        <div className="w-full h-auto flex items items-center justify-center lg:gap-x-8 
        md:gap-x-6 sm-gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 
        flex-wrap mb-10">
          
          {trainers.map((data) =>{
            return(
             <div
             key= {data.id} 
              className='lg:w-[20%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] 
              sm:-h[58vh] h-[60vh] rounded-xl relative overflow-hidden
             hover:translate-y-2 ease-out duration-500'>
              <img
              src={data.trainerImg}
              alt="training image" 
              className='w-full h-full object-cover'
              />
                <div className='w-full h-auto bg-[#550000]/65 absolute bottom-0 left-0 py-4
                px-2 flex items-center justify-center flex-col'>
                    <h1 className='text-xl text-white font-semibold'>
                        {data.name}
                    </h1>
                    <p className='text-sm text-gray-300'>
                      {data.role}
                    </p>
                </div>
              </div>
              )
          })}
           
        </div>
        {/* <SecondaryLink 
        link='/trainers' 
        className='lg:w-[15%] md:w-[50%] sm:w-[75%] w-[85%] justify-center' >
          View All Trainers
          </SecondaryLink> */}
          
        <MoveRight className='w-4 h-4 ' />
      </div>
   
    </div>
    </>
  )
}

export default Trainers
