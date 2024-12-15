import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import {
  setSelectionSneakers,
  setSelectionTypes,
} from '../../../App/Redux/Slices/selection-sneakers.slice';

type Props = {
  activeBlock: string;
  hiddenBlock: number;
};

const SelectedType: React.FC<Props> = ({ activeBlock, hiddenBlock }) => {
  const typesShoes = ['Кроссовки', 'Ботинки', 'Туфли', 'Сандалии', 'Челси', 'Кеды'];
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    if (hiddenBlock === 1) {
      setTimeout(() => {
        setIsVisible(true);
      }, 400);
    }
  }, [hiddenBlock]);

  useEffect(() => {
    dispatch(setSelectionTypes(types));
    dispatch(setSelectionSneakers({ types: types }));
  }, [types]);

  const handleCheckBox = (type: string) => {
    setTypes((prevTypes) => {
      const isIncluded = prevTypes.includes(type);
      const updatedTypes = isIncluded ? prevTypes.filter((t) => t !== type) : [...prevTypes, type];

      dispatch(setSelectionSneakers({ types: updatedTypes }));

      return updatedTypes;
    });
  };

  return (
    <div
      style={isVisible ? { display: 'none' } : { display: 'block' }}
      className={activeBlock === 'Type' ? `${style.container} ${style.active}` : style.container}>
      <p className={style.subtitle}>Какой тип кроссовок рассматриваете?</p>
      <div className={style.wrapper__types}>
        {typesShoes?.map((type) => (
          <div key={type} className={style.type}>
            <div className={style.img__wrapper}>
              <img className={style.img} src="./img/Others/Products/ShoeType.jpg" alt="shoe" />
            </div>
            <label className={style.label}>
              <input
                value={type}
                onChange={() => handleCheckBox(type)}
                className={style.checkbox}
                type="checkbox"
              />
              <span className={style.custom__checkbox}></span>
              {type}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedType;
