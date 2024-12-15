import { useDispatch, useSelector } from 'react-redux';
import useDeviceType from '../../App/Hooks/useDeviceType';
import Nav from '../../entities/Navigation';
import NavMobile from '../../entities/NavMobile';
import Logo from '../../Shared/Logo';
import ViewCartModal from '../Modal/ViewCartModal';
import style from './style.module.css';
import { AppDispatch, RootState } from '../../App/Redux/store';
import { useEffect, useRef } from 'react';
import { setModalShowCart, setModalShowPlacingOrder } from '../../App/Redux/Slices/modals.slice';
import ViewPlacingOrderModal from '../Modal/ViewPlacingOrderModal';
import { setSuccess } from '../../App/Redux/Slices/orders.slice';
import { getCart } from '../../App/services/cart.service';

const Header = () => {
  const section = 'header';
  const { modalShowCart, modalShowPlacingOrder } = useSelector((state: RootState) => state.modals);
  const { success } = useSelector((state: RootState) => state.orders);
  const modalRefCart = useRef<HTMLDivElement | null>(null);
  const modalRefPlacingOrder = useRef<HTMLDivElement | null>(null);
  const cartBtnRef = useRef<HTMLLIElement | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const deviceType = useDeviceType();

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRefCart.current &&
      !modalRefCart.current.contains(e.target as Node) &&
      !cartBtnRef.current?.contains(e.target as Node) &&
      !(e.target as HTMLElement).closest('.delete-button-class')
    ) {
      dispatch(setModalShowCart(false));
    }
  };

  const handleClickOutsidePlacingOrder = (e: MouseEvent) => {
    if (
      modalRefPlacingOrder.current &&
      !modalRefPlacingOrder.current.contains(e.target as Node) &&
      !(e.target as HTMLElement).closest('.delete-button-class')
    ) {
      dispatch(setModalShowPlacingOrder(false));
      if (success) {
        dispatch(setSuccess(false));
      }
    }
  };

  useEffect(() => {
    dispatch(getCart());
  }, [])

  useEffect(() => {
    if (modalShowCart) {
      document.addEventListener('click', handleClickOutside);
    }

    if (modalShowPlacingOrder) {
      document.addEventListener('click', handleClickOutsidePlacingOrder);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickOutsidePlacingOrder);
    };
  }, [modalShowCart, modalShowPlacingOrder]);

  return (
    <>
      <div className={modalShowCart ? `${style.overlay} ${style.active}` : style.overlay}></div>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.wrapper}>
            <Logo section={section} />
            {deviceType === 'desktop' ? (
              <Nav cartBtnRef={cartBtnRef} section={section} />
            ) : (
              <NavMobile cartBtnRef={cartBtnRef} />
            )}
          </div>
          <ViewCartModal modalRef={modalRefCart} />
          <ViewPlacingOrderModal modalRef={modalRefPlacingOrder} />
        </div>
      </header>
    </>
  );
};

export default Header;
