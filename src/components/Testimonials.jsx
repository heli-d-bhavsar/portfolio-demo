import { Splide, SplideSlide } from '@splidejs/react-splide';
import TestimonialSvg from '../assets/testimonial.svg';
const Testimonials = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
      <div className='flex flex-col items-center gap-6 h-auto lg:h-[65vh] mt-20'>
        <div className='flex flex-col gap-6 w-full md:w-1/2 items-start md:items-center'>
          <h2 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-mainText'>
            Testimonials
          </h2>
          <p className='md:text-center text-mainText'>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <Splide
          options={{
            type: 'loop',
            perPage: 2,
            focus: 'center',
            gap: '1rem',
            omitEnd: true,
          }}
          aria-label='My Favorite Images'
        >
          <SplideSlide>
            <img src={TestimonialSvg} alt='Image 1' />
          </SplideSlide>
          <SplideSlide>
            <img src={TestimonialSvg} alt='Image 2' />
          </SplideSlide>
          <SplideSlide>
            <img src={TestimonialSvg} alt='Image 1' />
          </SplideSlide>
          <SplideSlide>
            <img src={TestimonialSvg} alt='Image 2' />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
