import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-6  mt-20 mb-20 lg:mt-0'>
          <div className='flex flex-col gap-6 w-full md:w-1/2 items-start md:items-center'>
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-mainText'>
              Contact Me
            </h2>
            <p className='md:text-center text-mainText'>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
          </div>
          <div className='flex flex-col md:flex-row gap-2 items-center justify-center'>
            <input
              className='border rounded-md bg-[#F6F6F6 w-72 text-left pl-5 pr-20 py-2'
              placeholder='Enter your email'
              type='email'
            />
            <button className='bg-c-orange-500 text-white py-2 rounded-md w-44'>
              Contact Me!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
