import style from './style.module.css';
import FormQuestions from '../../../entities/Forms/FormQuestions';
import { Element } from 'react-scroll';

const ContactUs = () => {
  return (
    <Element name="deliveryAndPayment">
      <section className={style.section}>
        <FormQuestions />
        <div className={style.social}>
          <div className={style.logo__wrapper}>
            <img className={style.logo} src="./img/Others/Photo/Instagram.png" alt="instagram" />
          </div>
          <div className={style.images__container}>
            <div className={style.images__wrapper}>
              <img src="./img/Others/Photo/Photo-inst-1.jpg" alt="photo" />
              <img src="./img/Others/Photo/Photo-inst-2.jpg" alt="photo" />
            </div>
            <div>
              <img
                className={style.image__big}
                src="./img/Others/Photo/Photo-inst-3.jpg"
                alt="photo"
              />
            </div>
            <div className={style.images__wrapper}>
              <img src="./img/Others/Photo/Photo-inst-4.jpg" alt="photo" />
              <img src="./img/Others/Photo/Photo-inst-5.jpg" alt="photo" />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default ContactUs;
