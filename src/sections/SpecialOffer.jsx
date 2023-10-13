import {arrowRight} from '../assets/icons';
import {offer} from '../assets/images';
import Button from '../components/Button';

const SpecialOffer = () => {
  return (
    <section className=' max-container flex justify-center items-center flex-col-reverse xl:flex-row gap-10'>
      {/* Image - Reversed on Mobile*/}
      <div className=' flex-1'>
        <img src={offer} width={773} height={687} className=' w-full object-contain' />
      </div>

      {/* Text */}
      <div className=' flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Special </span>
          <span className='text-coral-red'>Offer </span> Shoes
        </h2>
        <p className='mt-6 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From
          premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className='mt-11 flex flex-wrap gap-4 '>
          <Button label='Shop now' iconUrl={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
