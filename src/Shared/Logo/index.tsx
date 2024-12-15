import style from './style.module.css';

type Props = {
  section?: string;
};

const Logo: React.FC<Props> = ({ section }) => {
  return <img className={section === 'header' ? `${style.logo__header}` : `${style.logo}`} src="./img/Others/Logo/Logo.png" alt="" />;
};

export default Logo;
