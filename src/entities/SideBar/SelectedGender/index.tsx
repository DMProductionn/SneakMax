import { useEffect } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterParams, setSelectedGender } from '../../../App/Redux/Slices/products.slice';
import { RootState } from '../../../App/Redux/store';

const SelectedGender = () => {
  const dispatch = useDispatch();
  const { selectedGender } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(addFilterParams({ gender: selectedGender }));
  }, [selectedGender]);
  
  const handleGenderChange = (gender: 'женский' | 'мужской' | null) => {
    dispatch(setSelectedGender(selectedGender === gender ? null : gender));
  };

  return (
    <>
      <p className={style.title}>Пол</p>
      <div className={style.genders}>
        <label className={style.custom__checkbox}>
          <input
            type="checkbox"
            name="gender"
            checked={selectedGender === 'мужской'}
            onChange={() => handleGenderChange('мужской')}
            className={style.checkbox}
          />
          <span className={style.checkmark}></span>
          Мужской
        </label>
        <label className={style.custom__checkbox}>
          <input
            type="checkbox"
            name="gender"
            checked={selectedGender === 'женский'}
            onChange={() => handleGenderChange('женский')}
            className={style.checkbox}
          />
          <span className={style.checkmark}></span>
          Женский
        </label>
      </div>
    </>
  );
};

export default SelectedGender;
