import {products} from '../constants';
import PopularProductCard from '../components/PopularProductCard';
const PopularProducts = () => {
  return (
    <section id='products' className=' max-container mt-12 sm:mt-0'>
      <div className=' flex flex-col justify-start gap-5'>
        <h2 className=' text-4xl font-palanquin font-bold'>
          Our <span className=' text-coral-red'>Popular</span> Products
        </h2>
        <p className=' lg:max-w-lg mt-2 info-text'>
          Experience top-notch quality and style with our sought-after selections. Discover a world
          of comfort, design and value.
        </p>
      </div>

      <div className=' mt-16 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 sm:gap-4 '>
        {products.map((product) => (
          <PopularProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
