import React from 'react';
import ProjectSVG from '../assets/projects.svg';

const Projects = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center gap-6 h-auto lg:h-[110vh]  mt-20'>
        <div className='flex flex-col gap-6 w-full md:w-1/2 items-start md:items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-mainText'>
            Projects
          </h2>
          <p className='md:text-center text-mainText'>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center mb-5'>
          <button className='bg-[#F8F8F8] border-[#545454] text-black px-4 py-2 rounded-md'>
            All
          </button>
          <button className=' bg-[#F8F8F8] border-[#545454] text-black px-4 py-2 rounded-md'>
            UI/UX
          </button>
          <button className='bg-c-orange-500 text-white px-4 py-2 rounded-md'>
            Graphic Design
          </button>
          <button className=' bg-[#F8F8F8] border-[#545454] text-black px-4 py-2 rounded-md'>
            App Design
          </button>
          <button className=' bg-[#F8F8F8] border-[#545454] text-black px-4 py-2 rounded-md'>
            Web design
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
          <div>
            <img src={ProjectSVG} className='w-full object-cover mb-7' />
            <p className='text-lg text-c-orange-500'>Web Design </p>
            <p className='font-bold text-md md:text-xl lg:text-2xl text-mainText'>
              AirCalling Landing Page Design{' '}
            </p>
          </div>
          <div>
            <img src={ProjectSVG} className='w-full object-cover mb-7' />
            <p className='text-lg text-c-orange-500'>Web Design </p>
            <p className='font-bold text-md md:text-xl lg:text-2xl text-mainText'>
              AirCalling Landing Page Design{' '}
            </p>
          </div>
          <div>
            <img src={ProjectSVG} className='w-full object-cover mb-7' />
            <p className='text-lg text-c-orange-500'>Web Design </p>
            <p className='font-bold text-md md:text-xl lg:text-2xl text-mainText'>
              AirCalling Landing Page Design{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
