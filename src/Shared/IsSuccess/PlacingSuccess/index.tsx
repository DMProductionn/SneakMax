import style from './style.module.css';

const PlacingSuccess = () => {
  return (
    <div className={style.wrapper}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.9642 0.68571C16.0385 0.500001 15.995 0.287892 15.8535 0.146461C15.7121 0.00502989 15.5 -0.0385071 15.3143 0.0357762L0.767192 5.85462C0.199737 6.0816 0.127464 6.8556 0.643079 7.18372L5.63782 10.3622L7.16907 12.7685C7.31733 13.0014 7.62637 13.0701 7.85934 12.9218C8.09231 12.7736 8.16099 12.4645 8.01273 12.2316L6.63716 10.07L14.1311 2.57605L12.2358 7.31432C12.1332 7.57071 12.2579 7.8617 12.5143 7.96425C12.7707 8.06681 13.0617 7.9421 13.1642 7.68571L15.9642 0.68571ZM13.424 1.86895L5.93005 9.36285L1.59148 6.60194L13.424 1.86895Z"
          fill="#444B58"
        />
        <path
          d="M16 12.5C16 14.433 14.433 16 12.5 16C10.567 16 9 14.433 9 12.5C9 10.567 10.567 9 12.5 9C14.433 9 16 10.567 16 12.5ZM14.0072 10.8213C13.7705 10.6792 13.4633 10.756 13.3213 10.9928L12.1507 12.9436L11.6036 12.3964C11.4083 12.2012 11.0917 12.2012 10.8964 12.3964C10.7012 12.5917 10.7012 12.9083 10.8964 13.1036L11.67 13.8771C12.0151 14.2222 12.5924 14.1511 12.8435 13.7327L14.1787 11.5072C14.3208 11.2705 14.244 10.9633 14.0072 10.8213Z"
          fill="#444B58"
        />
      </svg>
      <p className={style.title}>Заказ оформлен!</p>
    </div>
  );
};

export default PlacingSuccess;
