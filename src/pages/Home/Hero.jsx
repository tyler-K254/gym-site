import React from 'react'
//import Swiper from React Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-scroll'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const Hero = () => {
    //dummy data for hero Carosel
    const swiperData = [
        {
          id: 1,
          bgImg: "'https://img.freepik.com/free-photo/fitness-man-with-barbell_144627-12958.jpg?t=st=1711514620~exp=1711518220~hmac=49c1e62e9bb7f537ad2b7da10320db587c4eb12ee37da810a040c7ab5a2be2d3&w=1380'",
          slogan: "Keep your body",
          title: "Burning",
          desc: "Test yourself to push and surpass your limits.",
        },
        {
          id: 2,
          bgImg: "https://img.freepik.com/free-photo/dumbbells-set-against-dark-background-floor_60438-3557.jpg?t=st=1711520556~exp=1711524156~hmac=244f4b09f983748388e894b702a4bc6dcf8b83128cd5c0bfcc263777e1470540&w=1380",
          slogan: "Just Believe In",
          title: "Yourself",
          desc: "We are here to help you achieve your goals.",
        },
        {
          id: 3,
          bgImg: "./bodybuilding-concept-with-guy-lifting-barbell_23-2147675172.jpg",
          slogan: "Grow Your Body",
          title: "Strength",
          desc: "Make your body stronger with our workout programs.",
        },
      ];
  return (
    <>
    <div className="w-full height-auto">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop ={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper w-full h-auto"
      >
        {/* {Loop the carousel content here} */}
        {swiperData.map((data) => (
            <SwiperSlide 
                key={data.id}
            className='w-full h-[70vh] relative ' 
            style={{
            backgroundImage: `url(${data.bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat:'no-repeat', 
            }}
            >
                <div className="w-full h-full bg-[#550000]/75 absolute top-0 left-0 -z-10"></div>
                {/*  */}
                <div className="w-full h-full flex items-center justify-center flex-col z-10
                lg:px-24 md:px-16 sm:px-6 px-4">
                    <h5 className="lg:text-5xl md:text-4xl sm:text-3xl text-[#FFAB6E] font-semibold mb-2 uppercase">
                        {data.slogan}
                    </h5>
                    <h1 className='lg:text-10xl md:text-9xl sm:text-8xl text-7xl font-bold text-white mb-4 uppercase'>{data.title}</h1>
                    <p className="lg:text-3xl md:text-base sm:text-base text-[#D8D8D8] font-medium mb-6 text-center">
                    {data.desc}
                    </p>
                    {/* <Link to='bannerSection' duration={500} className='w-fit flex  hover:bg-indigo-600/70 items-center '>
                    <PrimaryBtn className="lg:w-[50%] md:w-[30%] sm:w-[35%] w-[60%] h-14 mt-5 text-xl font-semibold rounded-xl flex items-center">Get Started</PrimaryBtn>
                    </Link> */}
                </div>
                </SwiperSlide>
        ))}
        

                
      </Swiper>

      {/* banner type card */}
      <div className="w-full h-auto flex items-center 
      lg:justify-between md:justify-between sm:justfy-center justify center 
      lg:gap-7 md-gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">
        <div className='flex items-center justif-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] 
        w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 
        hover:bg-black/30 rounded-md ease-out duration-700 cursor pointer'>
          <h5 className="text-4xl text-[#FF6B00] font-semibold mb-2 uppercase">
            100+
          </h5>
          <p className="tex-lg text-[#d6b39b] font-medium">Members</p>
        </div>
        <div className='flex items-center justif-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] 
        w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 
        hover:bg-black/30 rounded-md ease-out duration-700 cursor pointer'>
          <h5 className="text-4xl text-[#FF6B00] font-semibold mb-2 uppercase">
           30%
          </h5>
          <p className="tex-lg text-[#d6b39b] font-medium">Year-on-Year Client Growth </p>
        </div>
        <div className='flex items-center justif-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] 
        w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 
        hover:bg-black/30 rounded-md ease-out duration-700 cursor pointer'>
          <h5 className="text-4xl text-[#FF6B00] font-semibold mb-2 uppercase">
           5000+
          </h5>
          <p className="tex-lg text-[#d6b39b] font-medium">Hours of Training delivered</p>
        </div>
        
      </div>
      
    </div>

    
    </>
  )
}

export default Hero
