import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterParams, setSelectedSize } from '../../../App/Redux/Slices/products.slice';
import { RootState } from '../../../App/Redux/store';
const SelectedSize = () => {
  const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43];
  const { selectedSize } = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch();

  const handleClickSize = (index: number, size: number) => {
    dispatch(setSelectedSize(index));
    dispatch(addFilterParams({ sizes: size }));
  };
  return (
    <>
      <p className={style.title}>Размер</p>
      <div className={style.sizes__wrapper}>
        {sizes.map((size, index) => (
          <div
            onClick={() => handleClickSize(index, size)}
            key={size}
            className={index === selectedSize ? `${style.size} ${style.active}` : style.size}>
            <p>{size}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectedSize;
