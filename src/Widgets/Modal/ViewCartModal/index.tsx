import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import ProductCart from '../../../entities/ProductСart';
import GoToCart from '../../../Shared/GoToCart';
import { useEffect, useState } from 'react';
import { getCart } from '../../../App/services/cart.service';
import Loader from '../../../Shared/Loader';
import useTotalAmount from '../../../App/Hooks/useTotalAmount';
import useCollectCart from '../../../App/Hooks/useCollectCart';
import { ProductInCart } from '../../../App/Types/Cart/cart.type';
import CartIsEmpty from '../../../Shared/NotFound/CartIsEmpty';

type Props = {
  modalRef: React.RefObject<HTMLDivElement>;
};

const ViewCartModal: React.FC<Props> = ({ modalRef }) => {
  const { modalShowCart } = useSelector((state: RootState) => state.modals);
  const { cart, loading } = useSelector((state: RootState) => state.cart);
  const [newCart, setNewCart] = useState<ProductInCart[]>([]);
  const dispatch: AppDispatch = useDispatch();

  const total = useTotalAmount(newCart);  

  useEffect(() => {
    if (modalShowCart) {
      dispatch(getCart());
    }
  }, [modalShowCart]);

  useEffect(() => {
    const newCart = useCollectCart(cart);
    setNewCart(newCart);
  }, [cart]);

  return (
    <div
      ref={modalRef}
      className={modalShowCart ? `${style.modal} ${style.active}` : `${style.modal}`}>
      <div className={style.products}>
        {loading ? (
          <div className={style.loader__wrapper}>
            <Loader />
          </div>
        ) : newCart.length === 0 ? (
          <CartIsEmpty />
        ) : (
          newCart?.map((product) => <ProductCart key={product.id} {...product} />)
        )}
      </div>
      {newCart.length !== 0 && (
        <div className={style.total__block}>
          <div className={style.total__text__block}>
            <p className={style.total__text}>Итого:</p>
            <p className={style.total__sum}>{total + ' ₽'}</p>
          </div>
          <GoToCart />
        </div>
      )}
    </div>
  );
};

export default ViewCartModal;
