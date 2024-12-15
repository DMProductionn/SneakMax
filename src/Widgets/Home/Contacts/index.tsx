import { Element } from 'react-scroll';
import InstIcon from '../../../Shared/Icons/InstIcon';
import VkIcon from '../../../Shared/Icons/VkIcon';
import style from './style.module.css';

const Contacts = () => {
  return (
    <Element name="contacts">
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.sub__container}>
            <div>
              <div className={style.office__wrapper}>
                <h6 className={style.title}>Контакты</h6>
                <div className={style.question__wrapper}>
                  <p className={style.subtitle}>ГЛАВНЫЙ ОФИС</p>
                  <div className={style.question__container}>
                    <span className={style.question}>?</span>
                    <div className={style.answer__wrapper}>
                      <p className={style.answer}>
                        Адрес и телефон для корреспонденции, инвесторов. Вопросы о доставке,
                        качестве обслуживания и товара просьба задавать в отдел продаж
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className={style.telephone}>+7 800 789 89 89</p>
              <p className={style.address}>г. Санкт-Петербург, Комсомольская, 43 к1</p>
              <p className={style.subtitle__two}>ОТДЕЛ ПРОДАЖ</p>
              <p className={style.telephone}>+7 800 789 89 89</p>
              <p className={style.address}>г. Санкт-Петербург, Комсомольская, 43 к1</p>

              <div className={style.social__wrapper}>
                <VkIcon />
                <InstIcon />
              </div>
            </div>

            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A46f178d39cc25219aec84ceee22fd5c6c95a067223ce2e822741c7cb2c58c7a1&amp;source=constructor"
              width="680"
              height="500"
              frameBorder="0"></iframe>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contacts;
