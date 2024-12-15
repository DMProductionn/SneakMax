import { ProductInCart } from '../../App/Types/Cart/cart.type';
import RemoveCart from '../../features/RemoveCart';
import style from './style.module.css';

const ProductCart: React.FC<ProductInCart> = ({ imgUrl, title, price, id, count }) => {
  return (
    <div className={style.product}>
      <div className={style.product__wrapper}>
        <div className={style.img__wrapper}>
          <img className={style.img} src={imgUrl} alt="product" />
        </div>
        <div className={style.product__info}>
          <p className={style.title}>{title}</p>
          <p className={style.price}>{price + ' ₽'}</p>
        </div>
      </div>
      <p>{count ?? 1}</p>
      <RemoveCart id={id ?? 0} />
    </div>
  );
};

export default ProductCart;
