import style from './style.module.css';

const QuestionsSuccess = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>
        Заявка принята, <br /> наш менеджер свяжется с вами!
      </p>
    </div>
  );
};

export default QuestionsSuccess;
