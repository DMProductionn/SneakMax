import { useState } from 'react';
import { TypeProduct } from '../../App/Types/Product/product.type';
import AddToCart from '../../features/AddToCart';
import ViewProduct from '../../features/ViewProduct';
import style from './style.module.css';


const Product:React.FC<TypeProduct> = ({ imgUrl, title, price, id, count }) => {
  const [product, setProduct] = useState({ imgUrl, title, price, id, count });

  const handleClickProduct = () => {
    if (!product) {
      setProduct({ imgUrl, title, price, id, count });
    }    
  }

  return (
    <div onClick={handleClickProduct}>
      <div className={style.wrapper}>
        <div className={style.product}>
          <img
            className={style.product__img}
            src={imgUrl}
            alt="product"
          />
        </div>
        <div className={style.overlay}>
          <div className={style.bg}></div>
          <div className={style.buttons}>
            <ViewProduct id={id}/>
            <AddToCart product={product}/>
          </div>
        </div>
      </div>
      <p className={style.product__title}>{title}</p>
      <p className={style.product__price}>{price + ' р'}</p>
    </div>
  );
};

export default Product;
