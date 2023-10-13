import {shoe8} from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
  return (
    <section
      id='about-us '
      className='w-full max-container flex flex-col lg:flex-row justify-between items-center gap-10'
    >
      <div className=' flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-6 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to
          elevate your experience, providing you with unmatched quality, innovation, and a touch of
          elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      {/* Image */}
      <div className=' flex-1 flex justify-center items-center'>
        <img src={shoe8} alt='shoe8' width={570} height={522} className=' object-contain' />
      </div>
    </section>
  );
};

export default SuperQuality;
