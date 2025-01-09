import WebDesignSvg from '../assets/web-design.svg';
import GraphicDesignSvg from '../assets/graphic-design.svg';
import AppDesignSvg from '../assets/app-design.svg';
import UiUxSvg from '../assets/ui-ux.svg';
const Services = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-0'>
      <div className='flex flex-col items-center gap-6 h-auto lg:h-[70vh]'>
        <div className='flex flex-col gap-6 w-full md:w-1/2 items-start md:items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-mainText'>
            Services
          </h2>
          <p className='md:text-center text-mainText'>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-[#F8F8F8] rounded-xl px-2 py-6'>
            <div className='flex flex-col gap-2'>
              <img src={UiUxSvg} className='w-[70px] h-[70px]' />
              <p className='text:xl lg:text-3xl font-semibold'>UI/UX</p>
              <p className='text-md lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </div>
          <div className='bg-[#F8F8F8] rounded-xl px-2 py-6'>
            <div className='flex flex-col gap-2'>
              <img src={WebDesignSvg} className='w-[70px] h-[70px]' />
              <p className='text:xl lg:text-3xl font-semibold'>Web Design</p>
              <p className='text-md lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </div>
          <div className='bg-[#F8F8F8] rounded-xl px-2 py-6'>
            <div className='flex flex-col gap-2'>
              <img src={GraphicDesignSvg} className='w-[70px] h-[70px]' />
              <p className='text:xl lg:text-3xl font-semibold'>
                Graphic Design
              </p>
              <p className='text-md lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </div>
          <div className='bg-[#F8F8F8] rounded-xl px-2 py-6'>
            <div className='flex flex-col gap-2'>
              <img src={AppDesignSvg} className='w-[70px] h-[70px]' />
              <p className='text:xl lg:text-3xl font-semibold'>App Design</p>
              <p className='text-md lg:text-xl'>
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
                interdum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
