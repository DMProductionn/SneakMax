import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import { getProductsWithFilter } from '../../../App/services/products.service';
import { increaseLimit, setApplyFilters } from '../../../App/Redux/Slices/products.slice';
   
type Props = {
  setActiveSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const ApplyFilters:React.FC<Props> = ({ setActiveSideBar }) => {
  const { filterParams, limit } = useSelector((state: RootState) => state.products);
  const dispatch: AppDispatch = useDispatch();

  const handleClickApplyFilters = () => {
    setActiveSideBar(false);
    dispatch(increaseLimit(6));
    filterParams && dispatch(getProductsWithFilter({ filterParams, limit: limit }));
    dispatch(setApplyFilters(true));
  };

  return (
    <button onClick={handleClickApplyFilters} className={style.button}>
      Применить
    </button>
  );
};

export default ApplyFilters;
