import React, { useState } from 'react'
import { Dumbbell, } from "lucide-react";
import Label from "../../components/Label/Label"
import Input from "../../components/Form/Input"
import SecondaryBtn from '../../components/Button/SecondaryBtn';

const BMI = () => {
    // bmi calculationlogic
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [BMI, setBMI] = useState(null);
    //fuction to calculate BMI
    const calculateBMI =() =>{
        const bmi = ((weight)/((height*height)/1000)).toFixed(2)
        setBMI(bmi*10)
    } 

  return (
    <>
      <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10
      lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-center justify-center flex-col">
        <h6 className=" text-[#FF6B00] flex items-center gap-x-2mb-3 lg:text-[1.5rem] 
        md:text-[2.0rem] sm:text-[1.9rem] rounded-t-md py-2 px-4bu8">

           <Dumbbell className=" mr-3 lg:w-6 lg:h-11 md:w-4 md:h-4 text-[#FFAB6E]" />
            Calculate Your BMI
        </h6>
        <div className="w-full h-auto flex items-end justify-center bg-black/20
        rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4">
            <div className='lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2'>
                <Label htmlfor="weight">Weight (kg)</Label>
                <Input 
                id="weight" 
                name="weight" 
                type="text" 
                placeholder="Enter your weight"
                value={weight}
                onChange ={(e) => setWeight(e.target.value)}>
                </Input>
            </div>
            <div className='lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2'>
                <Label htmlfor="weight">Height (cm)</Label>
                <Input 
                id="weight" 
                name="weight" 
                type="text" 
                placeholder="Enter your height"
                value={height}
                onChange ={(e) => setHeight(e.target.value)}>
                </Input>
                </div>
        <div className='lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2'>
               <SecondaryBtn type="submit"
               className="w-full h-11 justify-center"
               onClick={calculateBMI}
               >
                Calculate BMI
                </SecondaryBtn>
                </div>
        </div>
        {/* Display bmi */}
        {BMI !== null && (
            <div className="bg-[#0f0f0f] rounded-b-md px-6 py-2 5 ">
                <p className='text-[#FF6B00]'>
                    Your BMI: <span className='font-bold'>{BMI}</span>
                </p>
            </div>
        )}
        </div>
      </div>
    </>
  )
}

export default BMI
