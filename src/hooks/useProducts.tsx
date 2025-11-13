import axios from 'axios';
import { useEffect, useState } from 'react';
import type { ProductItem } from '../types/types';



const useProducts = () => {
  const [products, setProducts] = useState<Array<ProductItem>>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json'
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {products, loading};
};

export default useProducts;
