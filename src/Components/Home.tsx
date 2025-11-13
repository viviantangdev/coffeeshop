import useProducts from '../hooks/useProducts';
import Card from './Card';

const Home = () => {
  const { products } = useProducts();

  return (
    <main className='absolute top-8 mx-3 rounded-lg'>
      {/*Header introduction */}
      <div className='bg-[url("/src/assets/vector.svg")] bg-center bg-contain bg-no-repeat'>
        <div className='flex flex-col items-center pt-10 pb-5'>
          <h2 className='text-heading'>Our Collection</h2>
          <p className='text-surfaceText text-center text-label'>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
      </div>
      {/* Product selection (All products or Available now)*/}
      <div className='flex justify-center gap-5'>
        <button type='button' className='activeBtn'>
          All Products
        </button>
        <button type='button' className='inactiveBtn'>
          Available Now
        </button>
      </div>
      {/* List of products */}
      <div className='grid grid-flow-row grid-cols-1 place-items-center py-8 gap-5'>
        {products.map((p) => (
          <Card
          key={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
            rating={p.rating}
            votes={p.votes}
            popular={p.popular}
            available={p.available}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
