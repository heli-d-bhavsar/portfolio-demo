import IntroSvg from '../assets/introduction.svg';
const Introduction = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 h-auto md:h-[90vh]'>
        <div className='flex flex-col w-full md:w-3/4 lg:w-1/2'>
          <h1 className='font-semibold flex flex-col mb-4'>
            <span className='text:xl lg:text-2xl text-mainText'>Hi, I am </span>
            <span className='text-2xl lg:text-3xl text-c-orange-500'>
              Heli Bhavsar
            </span>
          </h1>
          <h2 className='font-bold text-4xl md:text-6xl lg:text-8xl flex flex-col mb-4'>
            <span className='text-mainText'>UI & UX</span>
            <span className='md:text-right text-mainText'>Designer</span>
          </h2>
          <p className='mb-4 text-mainText'>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra.
          </p>
          <button className='bg-c-orange-500 text-white py-2 rounded-md w-44'>
            Hire me!
          </button>
        </div>
        <div className='flex w-full md:w-3/4 lg:w-1/2 items-center justify-center md:justify-end'>
          <img
            src={IntroSvg}
            className='max-w-full h-60 object-cover md:h-auto md:max-w-[320px] lg:max-w-[500px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
