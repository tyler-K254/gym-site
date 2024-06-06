import React from 'react'
import { Dumbbell, MoveRight} from "lucide-react";
// import { Link } from "react-router-dom";
import TertiaryLink from "../../components/LinkBtn/TertiaryLink"

const Services = () => {
    const services = [
        {
          id: 1,
          serviceImg: "full-shot-people-training-together-gym_23-2149734705.jpg",
          icon: Dumbbell,
          title: "Fitness",
          desc: "Achieve your fitness goals with our comprehensive body fitness programs.",
          link: "#services",
        },
        {
          id: 2,
          serviceImg: "./woman-teaching-yoga-pose-outdoors_23-2148935468.jpg",
          icon: Dumbbell,
          title: "Yoga",
          desc: "Discover the transformative power of yoga with our expertly guided classes. .",
          link: "#services",
        },
        {
          id: 3,
          serviceImg: "pexels-ketut-subiyanto-4720784.jpg",
          icon: Dumbbell,
          title: "Weights",
          desc: "Build your strength and endurance with our state of the arts equipments.",
          link: "#services",
        },
        {
          id: 4,
          serviceImg: "full-shot-professional-plus-size-dancer-training_23-2150598818.jpg",
          icon: Dumbbell,
          title: "Aerobics",
          desc: "Boost your energy and improve your cardiovascular health with our dynamic aerobics classes. ",
          link: "#services",
        },
        {
          id: 5,
          serviceImg: "woman-treadmill-using-phone.jpg",
          icon: Dumbbell,
          title: "Cardio",
          desc: "Elevate your stamina with our comprehensive cardio workouts..",
          link: "#services",
        },
        {
          id: 6,
          serviceImg: "classcategorypage-dance-hero.jpeg",
          icon: Dumbbell,
          title: "Zumba",
          desc: "Dance your way to fitness with our exciting Zumba classes! Join us.",
          link: "#services",
        },
       
      ];
      
  return (
    <>
    <div className='bg-[#202020]'>
      <div className="w-ful h-auto flex items-center justify-center flex-col lg:py-16
      md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="tex-lg font-medium  flex items-center gap-x-2 mb-6 lg:text-[1.5rem] 
        md:text-[2.0rem] sm:text-[1.9rem] text-[#FF6B00]">
        <Dumbbell className=" mr-3 lg:w-6 lg:h-11 md:w-4 md:h-4 text-[#FFAB6E]" />
        Our Services
        </h6>
        <div className="w-full h-auto flex items items-center justify-center gap-x-4 gap-y-5 
        flex-wrap mb-10">
          {/* display the data through a loop */}
          {services.map((data) =>{
            return(
             <div
             key= {data.id} 
              className='lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] 
              sm:-h[58vh] h-[60vh] rounded-xl bg black relative overflow-hidden
              cursor-pointer z-10 hover:translate-y-2 ease-out duration-500'
              style={{
                  backgroundImage: `url(${data.serviceImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat:'no-repeat', 
                  }}>
                      <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10"></div>
                      <div className='w-full h-full flex items-center justify-center flex-col 
                      text-white p-4 z-50'>
                        <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 border-[2.5px]
                        border-[#FF6B00] flex items-center flex-col text-white p-4 z-50">
                          <Dumbbell className="w-6 h-6 text-white" />
                        </div>
                          <h1 className='text-xl text-gray-100 font-semibold text-center mb-4'>
                              {data.title}
                          </h1>
                          <p className='text-base text-gray-400 font-normal text-center mb-4'>
                            {data.desc}
                          </p>
                          {/* <TertiaryLink link={data.link}>Read More
                          <MoveRight className='w-4 h-4 ' />
                          </TertiaryLink> */}
                      </div>
              </div>
              )
          })}
           
        </div>
      </div>
    </div>
    </>
  )
}

export default Services
