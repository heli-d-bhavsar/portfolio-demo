import AboutSVG from '../assets/about.svg';
const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col mt-20 h-auto md:h-[90vh]'>
        <div className='flex gap-5 items-center justify-center'>
          <div className='hidden md:flex w-1/2'>
            <img
              src={AboutSVG}
              className='max-w-full md:max-w-[320px] lg:max-w-[500px]'
            />
          </div>
          <div className='w-full md:w-3/4 lg:w-1/2 flex flex-col gap-2'>
            <h2 className='font-semibold text-3xl md:text-4xl lg:text-6xl flex flex-col mb-4 text-mainText'>
              About Me
            </h2>
            <p className='text-mainText'>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <div className='flex flex-col gap-3 mt-5 text-mainText'>
              <div className='mb-1 text-xl md:text-2xl font-medium '>UX</div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 '>
                <div className='bg-c-orange-500 h-2.5 rounded-full w-2/3'></div>
              </div>
              <div className='text-xl md:text-2xl font-medium '>
                Website Design
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 '>
                <div className='bg-c-orange-500 h-2.5 rounded-full w-2/5'></div>
              </div>
              <div className='text-xl md:text-2xl font-medium '>App Design</div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 '>
                <div className='bg-c-orange-500 h-2.5 rounded-full w-1/6'></div>
              </div>
              <div className='text-xl md:text-2xl font-medium '>
                Graphic Design
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4 '>
                <div className='bg-c-orange-500 h-2.5 rounded-full w-2/5'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
