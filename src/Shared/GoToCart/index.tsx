import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { setModalShowCart, setModalShowPlacingOrder } from '../../App/Redux/Slices/modals.slice';
import { useEffect } from 'react';
import { RootState } from '../../App/Redux/store';



const GoToCart = () => {
  const dispatch = useDispatch();

  const { modalShowPlacingOrder } = useSelector((state:RootState) => state.modals)

  const handleGoToCart = () => {
    dispatch(setModalShowPlacingOrder(true));
    dispatch(setModalShowCart(false));
  };

  useEffect(() => {
    if (modalShowPlacingOrder) {
      setTimeout(() => {
        dispatch((setModalShowPlacingOrder(true)));
      }, 0);
    }
  }, [modalShowPlacingOrder, dispatch]);

  return (
    <button onClick={handleGoToCart} className={style.button}>Перейти в корзину</button>
  )
}

export default GoToCart