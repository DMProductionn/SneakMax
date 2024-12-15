import Nav from '../../entities/Navigation';
import Logo from '../../Shared/Logo';
import style from './style.module.css';

const Footer = () => {
  const section = 'footer';
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.logo}>
          <Logo />
        </div>
        <Nav section={section} />
      </div>
    </footer>
  );
};

export default Footer;
