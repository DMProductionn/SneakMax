import style from './style.module.css';

type Props = {
  handleSideBar: () => void;
};

const FilterButton:React.FC<Props> = ({ handleSideBar }) => {
  return <button onClick={handleSideBar} className={style.button}>Фильтры</button>;
};

export default FilterButton;
