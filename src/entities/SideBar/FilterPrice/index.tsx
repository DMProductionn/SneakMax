import { useEffect } from 'react';
import { Range } from 'react-range';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterParams, setSelectedPrice } from '../../../App/Redux/Slices/products.slice';
import { RootState } from '../../../App/Redux/store';

const FilterPrice = ({ min = 0, max = 60000 }) => {
  const dispatch = useDispatch();
  const { selectedPrice } = useSelector((state: RootState) => state.products);
  useEffect(() => {
    const [priceFrom, priceTo] = selectedPrice;
    dispatch(addFilterParams({ priceFrom, priceTo }));
  }, [selectedPrice, dispatch]);

  
  return (
    <div className={style.slider}>
      <p>Цена, руб</p>
      <div className={style.values}>
        <div className={style.values__line}></div>
        <div className={style.value__wrapper}>
          <p>{selectedPrice[0]}</p>
        </div>
        <div className={style.value__wrapper}>
          <p>{selectedPrice[1]}</p>
        </div>
      </div>
      <Range
        step={100}
        min={min}
        max={max}
        values={selectedPrice}
        onChange={(values) => dispatch(setSelectedPrice(values))}
        renderTrack={({ props, children }) => (
          <div {...props} className={style.track}>
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div {...props} key={index} className={style.thumb}></div>
        )}
      />
    </div>
  );
};

export default FilterPrice;
