import style from './style.module.css';
import { Link as Scroll } from 'react-scroll';

const MainSection = () => {
  return (
    <section className={style.section}>
      <p className={style.big__title}>SneakMax</p>
      <div className={style.wrapper}>
        <h1 className={style.title}>
          Кроссовки известных брендов <br /> с доставкой по России и СНГ
        </h1>
        <p className={style.text}>
          Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, <br /> Converse и многие другие
          по низким ценам
        </p>
        <Scroll to='catalog' duration={100} smooth={true} className={style.button}>Перейти к покупкам</Scroll>
      </div>
    </section>
  );
};

export default MainSection;
