import { SubmitHandler, useForm } from 'react-hook-form';
import style from './style.module.css';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../../../App/services/questions.service';
import { AppDispatch, RootState } from '../../../App/Redux/store';
import Loader from '../../../Shared/Loader';
import QuestionsSuccess from '../../../Shared/IsSuccess/QuestionsSuccess';

type Inputs = {
  name: string;
  phone: string;
};

const FormQuestions = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, success } = useSelector((state: RootState) => state.questions);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, phone } = data;
    const questionSender = { name, phone };
    dispatch(addQuestion(questionSender));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      ) : success ? (
        <QuestionsSuccess />
      ) : (
        <>
          <p className={style.title}>Есть вопросы?</p>
          <p className={style.text}>
            Заполните форму и наш <br /> менеджер свяжется с вами
          </p>
          <div className={style.data}>
            <input
              className={style.input}
              type="text"
              placeholder="Ваше имя"
              {...register('name', { required: 'Пожалуйста, введите ваше имя' })}
            />
            {errors.name && <span className={style.error__message}>{errors.name.message}</span>}
            <InputMask
              className={style.input}
              mask="+7 (999) 999-99-99"
              placeholder="Ваш номер телефона"
              {...register('phone', {
                required: 'Пожалуйста, введите ваш номер телефона',
              })}
            />
            {errors.phone && <span className={style.error__message}>{errors.phone.message}</span>}

            <button className={style.button}>Отправить</button>
          </div>
        </>
      )}
    </form>
  );
};

export default FormQuestions;
