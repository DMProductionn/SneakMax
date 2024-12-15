import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { increaseLimit } from '../../App/Redux/Slices/products.slice';
import { RootState } from '../../App/Redux/store';
import Loader from '../../Shared/Loader';

const ShowMore = () => {
  const dispatch = useDispatch();

  const { loading, products, limit } = useSelector(
    (state: RootState) => state.products,
  );

  const handleClickShowMore = () => {
    dispatch(increaseLimit(limit + 6));
  };

  return (
    <>
      {products?.meta.remaining_count === 0 ? null : loading ? (
        <div className='w-full h-full flex justify-center items-center'>
          <Loader />
        </div>
      ) : (
        <button onClick={handleClickShowMore} className={style.button}>
          Показать еще
        </button>
      )}
    </>
  );
};

export default ShowMore;
