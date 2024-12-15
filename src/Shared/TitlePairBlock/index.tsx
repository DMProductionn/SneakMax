import style from './style.module.css';


const TitlePairBlock = () => {
  return (
    <div className={style.wrapper__text}>
      <h4 className={style.title}>Мы подберем идеальную пару для вас</h4>
      <p className={style.text}>
        Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
      </p>
    </div>
  );
};

export default TitlePairBlock;
