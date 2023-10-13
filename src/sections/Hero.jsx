import {useState} from 'react';

import {arrowRight} from '../assets/icons';
import {bigShoe1} from '../assets/images';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import {statistics, shoes} from '../constants';

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id='home'
      className=' min-h-screen w-full max-container flex flex-col xl:flex-row justify-center p-2 '
    >
      {/* Left side - only desktop */}
      <div className=' relative w-full xl:w-2/5 flex flex-col justify-center items-start pt-28 padding-x xl:px-0 pb-20 xl:pb-0'>
        <p className=' text-xl font-montserrat text-coral-red'>Our Sommer Collection</p>
        <h1 className=' mt-10 font-palanquin text-[72px] leading-[82px] sm:text-8xl'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative lg:z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className=' text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className=' font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort and innovation for your active life.
        </p>
        <Button label='Shop Now' iconUrl={arrowRight} />
        <div className='flex justify-start items-start flex-wrap gap-16 w-full mt-20'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className=' text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className=' text-slate-gray font-montserrat leading-7'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side - only desktop */}
      <div className=' relative flex-1 flex justify-center items-center xl:min-h-screen py-40 xl:py-0 bg-primary bg-hero bg-cover bg-center rounded-xl '>
        <img
          src={bigShoeImage}
          alt='shoe'
          width={610}
          height={500}
          className=' object-contain relative '
        />
        <div className=' flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left[10%] px-6 sm:px-0'>
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgUrl={shoe}
                bigShoeImage={bigShoeImage}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
