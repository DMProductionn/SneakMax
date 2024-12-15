import { useEffect, useState } from 'react';
import Product from '../../../entities/Product';
import ShowMore from '../../../features/ShowMore';
import FilterButton from '../../../Shared/FilterButton';
import SideBarCatalog from '../SideBarCatalog';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import { getProducts, getProductsWithFilter } from '../../../App/services/products.service';
import ProductsNotFound from '../../../Shared/NotFound/ProductsNotFound';
import { Element } from 'react-scroll';
import { toast, ToastContainer } from 'react-toastify';
import { setSuccess } from '../../../App/Redux/Slices/cart.slice';

const Catalog = () => {
  const dispatch: AppDispatch = useDispatch();
  const { filterParams, products, limit, applyFilters } = useSelector(
    (state: RootState) => state.products,
  );
  const { success } = useSelector((state: RootState) => state.cart)
  const [activeSideBar, setActiveSideBar] = useState(false);

  const handleSideBar = () => {
    setActiveSideBar(!activeSideBar);
  };

  useEffect(() => {
    if (applyFilters) {
      filterParams && dispatch(getProductsWithFilter({ filterParams, limit: limit }));
    } else {
      dispatch(getProducts(limit));
    }
  }, [limit, applyFilters]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        toast.success('Успешно добавлено в корзину!', {
          position: 'top-center',
        });
        dispatch(setSuccess(false));
      }, 100);
    }
  }, [success]); 

  return (
    <Element name='catalog'>
      <ToastContainer />
      <section className="relative px-[15px]">
        <h2 className={style.title}>Каталог</h2>
        <FilterButton handleSideBar={handleSideBar} />
        <div className={style.container}>
          <SideBarCatalog activeSideBar={activeSideBar} setActiveSideBar={setActiveSideBar} />
          <div className={style.wrapper}>
            <div className={style.wrapper__products}>
              {products?.items.length === 0 ? (
                <div className="w-full h-[100vh] flex justify-center items-center">
                  <ProductsNotFound />
                </div>
              ) : (
                products?.items?.map((product) => <Product key={product.id} {...product} />)
              )}
            </div>
            <div className={style.button__wrapper}>
              <ShowMore />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Catalog;
