import style from './style.module.css';

type Props = {
  handleClickOrder: () => void;
};

const Order: React.FC<Props> = ({ handleClickOrder }) => {
  return (
    <button onClick={handleClickOrder} className={style.button}>
      Заказать
    </button>
  );
};

export default Order;
