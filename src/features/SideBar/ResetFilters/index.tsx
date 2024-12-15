import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { increaseLimit, setApplyFilters, setSelectedGender, setSelectedPrice, setSelectedSize } from '../../../App/Redux/Slices/products.slice';
import { AppDispatch, RootState } from '../../../App/Redux/store';

type Props = {
  setActiveSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const ResetFilters: React.FC<Props> = ({ setActiveSideBar }) => {
  const dispatch: AppDispatch = useDispatch();
  const { filterParams } = useSelector((state: RootState) => state.products);

  const handleClickReset = () => {
    setActiveSideBar(false);
    dispatch(setSelectedGender(null));
    dispatch(setSelectedSize(null))
    dispatch(setSelectedPrice([0, 60000]));
    dispatch(setApplyFilters(false));
    dispatch(increaseLimit(6));
  };

  return (
    <>
      {filterParams !== null ? (
        <div className={style.container}>
          <button onClick={handleClickReset} className={style.button}>
            сбросить
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ResetFilters;
