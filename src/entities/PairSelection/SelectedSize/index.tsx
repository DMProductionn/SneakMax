import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import {
  setSelectionSizes,
  setSelectionSneakers,
} from '../../../App/Redux/Slices/selection-sneakers.slice';

type Props = {
  activeBlock: string;
  hiddenBlock: number;
};

const SelectedSize: React.FC<Props> = ({ activeBlock, hiddenBlock }) => {
  const sizesArray = ['менее 36', '36-38', '39-41', '42-44', '45 и больше'];
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);
  const [sizes, setSizes] = useState<string[]>([]);

  useEffect(() => {
    if (hiddenBlock === 1) {
      setTimeout(() => {
        setIsVisible(true);
      }, 400);
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 400);
    }
  }, [hiddenBlock]);

  useEffect(() => {
    dispatch(setSelectionSizes(sizes));
    dispatch(setSelectionSneakers({ sizes: sizes }));
  }, [sizes]);

  const handleCheckBox = (size: string) => {
    setSizes((prevSize) => {
      const isIncluded = prevSize.includes(size);
      const updatedSize = isIncluded ? prevSize.filter((s) => s !== size) : [...prevSize, size];
      dispatch(setSelectionSizes(updatedSize));
      return updatedSize;
    });
  };

  return (
    <div
      style={isVisible ? { display: 'block' } : { display: 'none' }}
      className={activeBlock === 'Size' ? `${style.wrapper} ${style.active}` : style.wrapper}>
      <p className={style.title}>Какой размер вам подойдет?</p>
      <div className={style.sizes__wrapper}>
        {sizesArray?.map((size) => (
          <label key={size} className={style.label}>
            <input
              value={size}
              onChange={() => handleCheckBox(size)}
              className={style.checkbox}
              type="checkbox"
            />
            <span className={style.custom__checkbox}></span>
            {size}
          </label>
        ))}
      </div>
      <div className={style.img__block}></div>
    </div>
  );
};

export default SelectedSize;
