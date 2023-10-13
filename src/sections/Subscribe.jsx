import Button from '../components/Button';

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className=' max-container flex flex-col lg:flex-row justify-center items-center gap-10'
    >
      <h3 className='max-sm:text-center text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign up for
        <span className=' text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className=' lg:max-w-[40%] w-full flex items-center flex-col sm:flex-row gap-5 p-2 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder=' subscribe@nike.com' className=' input' />
        <div className=' flex justify-end sm:justify-start items-center max-sm:w-full '>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
