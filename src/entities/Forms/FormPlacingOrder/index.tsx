import { SubmitHandler, useForm } from 'react-hook-form';
import style from './style.module.css';
import InputMask from 'react-input-mask';
import PlaceOrder from '../../../features/PlaceOrder';
import { ProductInCart } from '../../../App/Types/Cart/cart.type';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../App/Redux/store';
import { addOrder } from '../../../App/services/order.service';

type Inputs = {
  name: string;
  phone: string;
  email: string;
};

type Props = {
  totalSum: number;
  orderNumber: string;
  totalOrder: number;
  orderComp: ProductInCart[];
};

const FormPlacingOrder: React.FC<Props> = ({ totalOrder, orderNumber, totalSum, orderComp }) => {
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { name, phone, email } = data;
    const order = {
      orderNumber: orderNumber,
      totalOrder: totalOrder,
      totalSum: totalSum,
      orderComp: orderComp,
      client: {
        name: name,
        phone: phone,
        email: email,
      },
    };
    dispatch(addOrder(order));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
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

      <input
        className={style.input}
        type="email"
        placeholder="E-mail"
        {...register('email', { required: 'Пожалуйста, введите ваш email' })}
      />

      {errors.email && <span className={style.error__message}>{errors.email.message}</span>}

      <PlaceOrder />
    </form>
  );
};

export default FormPlacingOrder;
