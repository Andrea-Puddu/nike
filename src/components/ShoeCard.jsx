const ShoeCard = ({imgUrl, bigShoeImage, changeBigShoeImage}) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer max-sm:flex-1  border-2 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe ? 'border-coral-red' : 'border-transparent'
      }`}
    >
      <div className=' flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 p-4 sm:p-0'>
        <img
          src={imgUrl.thumbnail}
          alt='Shoe'
          width={127}
          height={103}
          className=' object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
