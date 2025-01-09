import Logo from '../assets/logo.svg';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='w-full'>
      <div className='bg-footer flex flex-col gap-6 justify-center items-center'>
        <div>
          <img src={Logo} className='max-w-64 object-cover' />
        </div>
        <ul className='flex flex-wrap justify-center text-center gap-5 text-xl mb-10 text-mainText'>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contract</li>
        </ul>
        <div className='flex justify-center gap-4 mb-10 text-socialMedia'>
          <FaFacebook size={32} />
          <FaInstagram size={32} />
          <FaTwitter size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
      <div className='bg-copyright items-center text-center justify-center p-4 text-white'>
        <p>
          © 2023 <span className='text-c-orange-400'>FawziUiUx</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
