import style from './style.module.css';
import FormSelectionSneakers from '../../../entities/Forms/FormSelectionSneakers';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App/Redux/store';
import SelectionSneakersSuccess from '../../../Shared/IsSuccess/SelectionSneakersSuccess';
import { Element } from 'react-scroll';

const SelectionIsReady = () => {
  const { success } = useSelector((state: RootState) => state.selection_sneakers);

  return (
    <Element name='productSelection'>
      {success ? (
        <SelectionSneakersSuccess />
      ) : (
        <>
          <div className={style.wrapper}>
            <p className={style.title}>Ваша подборка готова!</p>
            <p className={style.text}>
              Оставьте свои контактные данные, чтобы бы мы моглм отправить подготовленный для вас
              каталог
            </p>
          </div>
          <FormSelectionSneakers />
        </>
      )}
    </Element>
  );
};
export default SelectionIsReady;
