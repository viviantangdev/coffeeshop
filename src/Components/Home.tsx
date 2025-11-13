import { useState } from 'react';
import useProducts from '../hooks/useProducts';
import type { Menu, ProductItem } from '../types/types';
import Card from './Card';

const Home = () => {
  const { products } = useProducts();
  const [activeMenu, setActiveMenu] = useState<Menu>('All products');
  const allProducts: ProductItem[] = products;
  const availableProducts: ProductItem[] = products.filter(
    (p) => p.available === true
  );

  function handleActiveMenu(menu: Menu) {
    setActiveMenu(menu);
  }

  return (
    <main className='absolute top-10 lg:top-40 mx-3 lg:mx-10 rounded-lg'>
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
      {/* Menu selection (All products or Available now)*/}
      <div className='flex justify-center gap-5'>
        <button
          type='button'
          className={`${
            activeMenu === 'All products' ? 'activeBtn' : 'inactiveBtn'
          }`}
          onClick={() => handleActiveMenu('All products')}
        >
          All Products
        </button>
        <button
          type='button'
          className={`${
            activeMenu === 'Available now' ? 'activeBtn' : 'inactiveBtn'
          }`}
          onClick={() => handleActiveMenu('Available now')}
        >
          Available Now
        </button>
      </div>
      {/* List of products */}
      <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-3 place-items-center py-8 gap-5'>
        {activeMenu === 'All products' &&
          allProducts.map((p) => (
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
        {activeMenu === 'Available now' &&
          availableProducts.map((p) => (
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
