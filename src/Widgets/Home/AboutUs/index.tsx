import { Element } from 'react-scroll';
import Logo from '../../../Shared/Logo';
import style from './style.module.css';

const AboutUs = () => {
  return (
    <Element name='aboutUs'>
      <section className={style.section}>
        <svg
          className={style.elem}
          width="550"
          height="424"
          viewBox="0 0 550 424"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_178_163)">
            <circle cx="-14" cy="102" r="321.5" stroke="white" strokeOpacity="0.5" />
            <circle cx="401.5" cy="-33.5" r="148" stroke="white" strokeOpacity="0.5" />
            <circle cx="511.5" cy="65.5" r="7.5" fill="#F14F4F" />
          </g>
          <defs>
            <clipPath id="clip0_178_163">
              <rect width="550" height="424" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className={style.wrapper}>
          <div className={style.text__wrapper}>
            <h3 className={style.title}>Пара слов о нас</h3>
            <p className={style.text}>
              Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять
              жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе
              подняться и двигаться вперед.
            </p>
            <div className={style.logo}>
              <Logo />
            </div>
          </div>
          <div className={style.img__wrapper}>
            <img className={style.img} src="./img/Others/Photo/AboutUsPhoto.png" alt="photo" />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
