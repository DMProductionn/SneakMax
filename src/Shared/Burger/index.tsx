import style from './style.module.css';

type Props = {
  handleBurger: () => void;
  active: boolean;
};

const Burger: React.FC<Props> = ({ handleBurger, active }) => {
  return (
    <div onClick={handleBurger} className={style.burger}>
      <span className={active ? `${style.span__active}` : ''}></span>
      <span className={active ? `${style.span__active}` : ''}></span>
      <span className={active ? `${style.span__active}` : ''}></span>
    </div>
  );
};

export default Burger;
