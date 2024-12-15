import style from './style.module.css';

type Props = {
  imgUrl: string;
  name: string;
  role: string;
};

const Employee:React.FC<Props> = ({ imgUrl, name, role }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.img__wrapper}>
        <img className={style.img} src={imgUrl} alt="avatar" />
      </div>
      <p className={style.name}>{name}</p>
      <p className={style.position}>{role}</p>
    </div>
  );
};

export default Employee;
