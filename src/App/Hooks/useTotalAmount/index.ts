import { useEffect, useState } from 'react';
import { ProductInCart } from '../../Types/Cart/cart.type';

const useTotalAmount = (cart: ProductInCart[]) => {
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const total = cart.reduce((acc, product) => acc + (product.price * product.count), 0);
    setTotal(total);
  }, [cart]);

  return total;
};

export default useTotalAmount;
