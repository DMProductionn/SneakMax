import { useEffect, useState } from "react";
import { ProductInCart } from "../../Types/Cart/cart.type";

const useTotalOrder = (cart: ProductInCart[]) => { 
  const [totalOrder, setTotalOrder] = useState(0);
  const total = cart.reduce((acc, product) => acc + product.count , 0);

  useEffect(() => {
    setTotalOrder(total);
  }, [total]);

  return totalOrder;
}

export default useTotalOrder