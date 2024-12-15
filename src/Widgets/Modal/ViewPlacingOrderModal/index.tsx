import { Modal } from 'react-bootstrap';
import style from './style.module.css';
import './modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import ProductCheckout from '../../../entities/ProductСheckout';
import { useEffect, useState } from 'react';
import { deleteCart, getCart } from '../../../App/services/cart.service';
import { ProductInCart } from '../../../App/Types/Cart/cart.type';
import useCollectCart from '../../../App/Hooks/useCollectCart';
import useTotalAmount from '../../../App/Hooks/useTotalAmount';
import Loader from '../../../Shared/Loader';
import FormPlacingOrder from '../../../entities/Forms/FormPlacingOrder';
import PlacingSuccess from '../../../Shared/IsSuccess/PlacingSuccess';
import useTotalOrder from '../../../App/Hooks/useTotalOrder';

type Props = {
  modalRef: React.RefObject<HTMLDivElement>;
};

const ViewPlacingOrderModal: React.FC<Props> = ({ modalRef }) => {
  const { modalShowPlacingOrder } = useSelector((state: RootState) => state.modals);
  const { cart, loading } = useSelector((state: RootState) => state.cart);
  const { loading: loadingOrder, success } = useSelector((state: RootState) => state.orders);
  const [orderItems, setOrderItems] = useState<ProductInCart[]>([]);
  const [activeOrder, setActiveOrder] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (modalShowPlacingOrder) {
      dispatch(getCart());
    }
  }, [modalShowPlacingOrder]);

  useEffect(() => {
    const newCart = useCollectCart(cart);
    setOrderItems(newCart);
  }, [cart]);

  useEffect(() => {
    if (success) {
      dispatch(deleteCart()).then(() => dispatch(getCart()));
    }
  }, [success]);

  const total = useTotalAmount(orderItems);
  const totalOrder = useTotalOrder(orderItems);

  return (
    <Modal show={modalShowPlacingOrder} centered aria-labelledby="contained-modal-title-vcenter">
      <div ref={modalRef}>
        <div className={style.title__block}>
          <p className={style.title}>Оформление заказа</p>
          <p className={style.order__number}>
            Заказ <span>3456 67</span>
          </p>
        </div>
        {loadingOrder ? (
          <div className="min-h-[700px] h-full flex justify-center items-center">
            <Loader />
          </div>
        ) : success ? (
          <PlacingSuccess />
        ) : (
          <>
            <div className={style.product__wrapper}>
              <p className={style.product__quantity}>
                Товаров в заказе: <span className={style.quantity}>{totalOrder} шт</span>
              </p>
              <p className={style.total__amount}>
                Общая сумма заказа: <span className={style.total}>{total} ₽</span>
              </p>
              {orderItems.length !== 0 && (
                <button
                  onClick={() => setActiveOrder(!activeOrder)}
                  className={style.order__contents}>
                  <p className={style.order__contents_text}>Состав заказа</p>
                  <svg
                    className={
                      activeOrder
                        ? `${style.order__contents_arrow} ${style.active}`
                        : style.order__contents_arrow
                    }
                    width="7"
                    height="8"
                    viewBox="0 0 7 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_178_579)">
                      <path
                        d="M6.92012 5.68997C6.81343 5.79687 6.64032 5.79704 6.53341 5.69037L3.69335 2.8562C3.58672 2.74959 3.41327 2.7496 3.30645 2.85641L0.466594 5.69037C0.359693 5.79705 0.18658 5.79687 0.0798849 5.68997C-0.0267831 5.58307 -0.0266053 5.40994 0.0802814 5.30328L2.91994 2.46951C3.07992 2.30956 3.28999 2.22961 3.50008 2.22961C3.71005 2.22961 3.92007 2.30953 4.07984 2.46932L6.91972 5.30328C7.02661 5.40994 7.02678 5.58307 6.92012 5.68997Z"
                        fill="#444B58"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_178_579">
                        <rect
                          width="7"
                          height="7"
                          fill="white"
                          transform="matrix(1 0 0 -1 0 7.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              )}
              <div
                className={activeOrder ? `${style.products}` : `${style.products} ${style.show}`}>
                {loading ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  orderItems?.map((product) => <ProductCheckout key={product.id} {...product} />)
                )}
              </div>
            </div>
            <FormPlacingOrder
              totalSum={total}
              orderNumber={'3456 67'}
              totalOrder={orderItems.length}
              orderComp={orderItems}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default ViewPlacingOrderModal;
