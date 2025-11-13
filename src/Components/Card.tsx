import StarFill from '../assets/Star_fill.svg';
import Star from '../assets/Star.svg';

interface CardProps {
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}

const Card = ({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: CardProps) => {
  return (
    <div className='rounded-lg w-3xs overflow-hidden'>
      {/*Image with or without Popular tag */}
      <div className='relative'>
        <img
          src={image}
          alt={name}
          className='h-[150px] w-full object-cover rounded-lg'
        />
        {popular && (
          <div className='absolute top-2 left-2 bg-accent rounded-full px-2 py-0.5 text-small text-secondaryText'>
            Popular
          </div>
        )}
      </div>
      {/* Content */}
      <div className='flex flex-col gap-1 py-2'>
        {/* Product name and price */}
        <div className='flex justify-between items-center'>
          <p>{name}</p>
          <div className='bg-priceBg rounded py-0.5 px-2 text-price text-secondaryText font-bold'>
            {price}
          </div>
        </div>
        {/* Rating and Sold out*/}
        <div className='flex items-center justify-between text-label'>
          {rating === null ? (
              <div className='flex items-center gap-1'>
              <img src={Star} alt='Star' />
              <span className='text-surfaceText'>No ratings</span>
            </div>
          ) : (
            <div className='flex items-center gap-1'>
              <img src={StarFill} alt='Star' />
              <span>{rating}</span>
              <span className='text-surfaceText'>({votes} votes)</span>
            </div>
          )}

          {available === false && (
            <span className='text-soldout'>Sold out</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
