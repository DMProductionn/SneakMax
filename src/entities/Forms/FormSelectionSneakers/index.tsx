import { useDispatch, useSelector } from 'react-redux';
import style from './style.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import { addSelectionSneakers } from '../../../App/services/selection-sneakers.service';
import Loader from '../../../Shared/Loader';

type Inputs = {
  name: string;
  email: string;
};

const FormSelectionSneakers = () => {
  const { loading } = useSelector((state: RootState) => state.selection_sneakers);
  const { register, handleSubmit } = useForm<Inputs>();
  const { selectionSneakers } = useSelector((state: RootState) => state.selection_sneakers);
  const dispatch: AppDispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, email } = data;
    const client = {
      name,
      email,
    };
    if (selectionSneakers) {
      const { types, sizes, message } = selectionSneakers;
      const finalMessage = {
        types,
        sizes,
        message,
        client,
      };
      dispatch(addSelectionSneakers(finalMessage));
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      {loading ? (
        <div className='min-h-[300px] h-full flex justify-center items-center'>
          <Loader />
        </div>
      ) : (
        <>
          <div>
            <p className={style.subtitle}>Получить предложение</p>
            <p className={style.subtext}>Получите подборку подходящих для вас моделей на почту</p>
          </div>
          <input
            className={`${style.input} ${style.input__name}`}
            type="text"
            placeholder="Ваше имя"
            {...register('name')}
            required
          />
          <input
            className={`${style.input}`}
            type="text"
            placeholder="E-mail"
            {...register('email')}
            required
          />
          <button className={style.button}>Получить</button>
        </>
      )}
    </form>
  );
};

export default FormSelectionSneakers;
