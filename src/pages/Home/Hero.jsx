import React from 'react'
//import Swiper from React Components
import { Swiper, SwiperSlide } from 'swiper/react';

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
          desc: "Get ready to burn off some serious fat with our high quality products.",
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
          bgImg: "https://source.unsplash.com/random/?yoga",
          slogan: "Grow Your Body",
          title: "Strength",
          desc: "Make your body stronger with our high quality products.",
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
                <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
                {/*  */}
                <div className="w-full h-full flex items-center justify-center flex-col z-10
                lg:px-24 md:px-16 sm:px-6 px-4">
                    <h5 className="lg:text-5xl md:text-4xl sm:text-3xl text-indigo-400 font-semibold mb-2 uppercase">
                        Keep your body
                    </h5>
                    <h1 className='lg:text-10xl md:text-9xl sm:text-8xl text-7xl font-bold text-white mb-4 uppercase'>Burning</h1>
                    <p className="lg:text-lg md:text-base sm:text-base text-gray-500 font-medium mb-6 text-center">
                    Get ready to burn off some serious fat with our workout programs
                    </p>
                    <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] h-14 mt-5 text-xl font-semibold rounded-full">Get Started</PrimaryBtn>
                </div>
                </SwiperSlide>
        ))}
        

                
      </Swiper>
      
    </div>
    </>
  )
}

export default Hero
