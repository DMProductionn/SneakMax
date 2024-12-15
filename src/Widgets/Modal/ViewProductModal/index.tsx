import { Modal } from 'react-bootstrap';
import style from './style.module.css';
import './modal.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import { setModalShowProduct } from '../../../App/Redux/Slices/modals.slice';
import Order from '../../../features/Order';
import CloseModalProductButton from '../../../Shared/CloseModalProductButton';
import Loader from '../../../Shared/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../../../App/services/products.service';
import { addProductToCart, getCart } from '../../../App/services/cart.service';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setSuccess } from '../../../App/Redux/Slices/cart.slice';

const ViewProductModal = () => {
  const { modalShowProduct } = useSelector((state: RootState) => state.modals);
  const { product, loading } = useSelector((state: RootState) => state.productView);
  const { loading: loadingCart, success } = useSelector((state: RootState) => state.cart);
  const [selectedSizes, setSelectedSizes] = useState<number | null>();
  const [errorSizes, setErrorSizes] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleClickSize = (size: number) => {
    setSelectedSizes(size);
  };

  const handleClickOrder = () => {
    if (!selectedSizes) {
      setErrorSizes(true);
      setTimeout(() => {
        setErrorSizes(false);
      }, 500);
    } else if (product) {
      const productInCart = {
        imgUrl: product.imgUrl,
        title: product.title,
        price: product.price,
        count: 1,
      };
      dispatch(addProductToCart(productInCart)).then(() => dispatch(getCart()));
    }
  };

  const handleCloseModal = () => {
    navigate('/');
    dispatch(setModalShowProduct(false));
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        toast.success('Успешно добавлено в корзину!', {
          position: 'top-center',
        });
        dispatch(setSuccess(false));
      }, 500);
      setSelectedSizes(null);
    }
  }, [success]);  

  useEffect(() => {
    dispatch(setModalShowProduct(true));
    dispatch(getProduct(Number(params.id)));
  }, []);

  return (
    <Modal className={style.modal} show={modalShowProduct} size="lg" centered>
      {loading || loadingCart ? (
        <div className="min-h-[1080px] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className={style.container}>
          <ToastContainer />
          <CloseModalProductButton handleCloseModal={handleCloseModal} />
          <div className={style.wrapper__one}>
            <div className={style.img__wrapper}>
              <img className={style.img} src={product?.imgUrl} alt="product" />
            </div>

            <div>
              <div className={style.general__inf}>
                <p className={style.article}>
                  Артикул <span>{product?.vendorСode}</span>
                </p>
                <p className={style.quantity}>
                  В наличии: <span>{product?.inStock} шт</span>
                </p>
              </div>
              <p className={style.title}>{product?.title}</p>
              <div className={style.stars}>
                {Array.from({ length: product?.stars ?? 0 }).map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                      fill="#F14F4F"
                    />
                  </svg>
                ))}
              </div>
              <p className={style.sizes__title}>Выберите размер</p>
              <div className={style.sizes}>
                {product?.sizes?.map((size) => (
                  <div
                    onClick={() => handleClickSize(size)}
                    key={size}
                    className={
                      selectedSizes === size || errorSizes
                        ? `${style.size__selected} ${style.size}`
                        : style.size
                    }>
                    <p className={style.size__text}>{size}</p>
                  </div>
                ))}
              </div>
              <div className={style.price__wrapper}>
                <p className={style.price__discount}>{product?.price}</p>
                <p className={style.price}>{product?.oldPrice}</p>
              </div>
              <Order handleClickOrder={handleClickOrder} />
              <div className={style.advantages}>
                <div className={style.advantage}>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.93427 11.8712C5.7891 12.0173 5.59114 12.099 5.38542 12.099C5.1797 12.099 4.98174 12.0173 4.83657 11.8712L0.453495 7.48123C-0.00142535 7.02568 -0.00142535 6.28716 0.453495 5.83238L1.00235 5.28276C1.45727 4.82721 2.19399 4.82721 2.64891 5.28276L5.38542 8.02308L12.7798 0.618398C13.2347 0.162845 13.9722 0.162845 14.4264 0.618398L14.9752 1.16802C15.4301 1.62357 15.4301 2.36209 14.9752 2.81687L5.93427 11.8712Z"
                      fill="#B2B5BB"
                    />
                  </svg>
                  <p className={style.advantage__text}>Бесплатная доставка до двери</p>
                </div>
                <div className={style.advantage}>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.93427 11.8712C5.7891 12.0173 5.59114 12.099 5.38542 12.099C5.1797 12.099 4.98174 12.0173 4.83657 11.8712L0.453495 7.48123C-0.00142535 7.02568 -0.00142535 6.28716 0.453495 5.83238L1.00235 5.28276C1.45727 4.82721 2.19399 4.82721 2.64891 5.28276L5.38542 8.02308L12.7798 0.618398C13.2347 0.162845 13.9722 0.162845 14.4264 0.618398L14.9752 1.16802C15.4301 1.62357 15.4301 2.36209 14.9752 2.81687L5.93427 11.8712Z"
                      fill="#B2B5BB"
                    />
                  </svg>
                  <p className={style.advantage__text}>Оплата заказа при получении</p>
                </div>
                <div className={style.advantage}>
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.93427 11.8712C5.7891 12.0173 5.59114 12.099 5.38542 12.099C5.1797 12.099 4.98174 12.0173 4.83657 11.8712L0.453495 7.48123C-0.00142535 7.02568 -0.00142535 6.28716 0.453495 5.83238L1.00235 5.28276C1.45727 4.82721 2.19399 4.82721 2.64891 5.28276L5.38542 8.02308L12.7798 0.618398C13.2347 0.162845 13.9722 0.162845 14.4264 0.618398L14.9752 1.16802C15.4301 1.62357 15.4301 2.36209 14.9752 2.81687L5.93427 11.8712Z"
                      fill="#B2B5BB"
                    />
                  </svg>
                  <p className={style.advantage__text}>Обмен в течении двух недель</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.wrapper__two}>
            <div className={style.desc}>
              <p className={style.desc__title}>Описание</p>
              <div className={style.desc_text__wrapper}>
                <p className={style.desc__text}>{product?.description}</p>
              </div>
            </div>
            <div>
              <p className={style.characteristic__title}>Характеристики</p>
              <ul className={style.characteristic__list}>
                <li className={style.characteristic__item}>
                  <p className={style.characteristic__text}>
                    Пол: <span>{product?.gender}</span>
                  </p>
                </li>
                <li className={style.characteristic__item}>
                  <p className={style.characteristic__text}>
                    Цвета: <span>{product?.color}</span>
                  </p>
                </li>
                <li className={style.characteristic__item}>
                  <p className={style.characteristic__text}>
                    Состав: <span>{product?.compound}</span>
                  </p>
                </li>
                <li className={style.characteristic__item}>
                  <p className={style.characteristic__text}>
                    Страна: <span>{product?.country}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ViewProductModal;
