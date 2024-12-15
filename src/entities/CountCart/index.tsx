import { useSelector } from 'react-redux';
import style from './style.module.css';
import { RootState } from '../../App/Redux/store';

const CountCart = () => {
  const { cart } = useSelector((state: RootState) => state.cart)
  return (
    <div className={style.cart__count}>
      <p className={style.count}>{cart.length}</p>
    </div>
  );
};

export default CountCart;
