import React from 'react'

const quote = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 
      py-10 lg:px-24 md:px-26 sm:px-6 px-4 lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap">
        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text tex-center">
          <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl 
          font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
          Limits exist only in the mind. Push harder, go further, and your body will follow --<span className='text-[#FF6B00]'>Henry Ford </span>
            </h1> 
        </div>
        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full h-auto relative overflow-hidden">
            <img 
            src="./lifting barbell graphic-01-01.png" 
            alt="lfiting barbel" 
            // className="w-full lg:h-[90vh] md:h-[80vh] sm:h-[80vh] h-[75vh] object-cover" />
            className="scale-x-[-1] w-full lg:h-[90vh] md:h-[90vh] sm:h-[80vh] h-[75vh] object-contain" 
            />
        </div>
      </div>
    </>
  )
}

export default quote
