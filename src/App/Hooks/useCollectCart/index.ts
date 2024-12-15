import { ProductInCart } from '../../Types/Cart/cart.type';

const useCollectCart = (cart: ProductInCart[]) => {
  const newCart = cart.reduce((acc: ProductInCart[], currentProduct) => {
    const index = acc.findIndex((product) => product.title === currentProduct.title);

    if (index === -1) {
      acc.push({ ...currentProduct, count: 1 });
    } else {
      acc[index].count += 1;
    }

    return acc;
  }, []);

  return newCart;
};

export default useCollectCart;
