import React, { useState } from 'react';
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";
import { Dumbbell } from 'lucide-react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        fullname: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div className='bg-[#171717]'>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16
            md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium flex items-center gap-x-2 mb-6 lg:text-[1.5rem] 
          md:text-[2.0rem] sm:text-[1.9rem] text-[#FF6B00]">
          <Dumbbell className="mr-3 lg:w-6 lg:h-11 md:w-4 md:h-4 text-[#FFAB6E]" />
          Send inquiry
        </h6>
        <form className='w-full h-auto flex items-center gap-x-8 lg:gap-y-8 md:gap-y-8 
            sm:gap-y-5 gap-y-4 flex-col lg:p-7 md:p-7 sm:p-4 p-3' onSubmit={handleSubmit}>
          <div className='w-full h-auto flex items-center lg:gap-x-8 md:gap-x-4
            sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-8 sm:gap-y-5 gap-y-4 lg:flex-nowrap
            md:flex-nowrap sm:flex-wrap flex-wrap'>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto'>
              <Input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full h-12 px-4"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
              />
            </div>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto'>
              <Input
                type="email"
                id="email"
                name="email"
                className="w-full h-12 px-4"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto'>
              <Input
                type="text"
                id="subject"
                name="subject"
                className="w-full h-12 px-4"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
          </div>
          <Textarea
            id='message'
            name='message'
            className="w-full px-4"
            placeholder='Enter your Message'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <PrimaryBtn type="submit" className='lg:w-auto md:w-auto sm:w-[75%] w-full px-8 py-3 uppercase rounded-md'>
            {isSubmitting ? '' : 'Send Message'}
          </PrimaryBtn>
        </form>
      </div>
    </div>
  );
};

export default Contact;
