import style from './style.module.css';

const ProductsNotFound = () => {
  return (
    <div className={style.wrapper}>
      <svg
        className={style.svg}
        width="128"
        height="128"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill="#444B58"
        />
        <path
          d="M4.28479 12.4328C4.52382 12.5711 4.82969 12.4894 4.96796 12.2504C5.57388 11.2029 6.70516 10.5 8.00003 10.5C9.29489 10.5 10.4262 11.2029 11.0321 12.2504C11.1704 12.4894 11.4762 12.5711 11.7153 12.4328C11.9543 12.2945 12.036 11.9887 11.8977 11.7496C11.1204 10.4059 9.66629 9.5 8.00003 9.5C6.33376 9.5 4.87967 10.4059 4.10235 11.7496C3.96408 11.9887 4.04576 12.2945 4.28479 12.4328Z"
          fill="#444B58"
        />
        <path
          d="M7 6.5C7 7.32843 6.55228 8 6 8C5.44772 8 5 7.32843 5 6.5C5 5.67157 5.44772 5 6 5C6.55228 5 7 5.67157 7 6.5Z"
          fill="#444B58"
        />
        <path
          d="M11 6.5C11 7.32843 10.5523 8 10 8C9.44772 8 9 7.32843 9 6.5C9 5.67157 9.44772 5 10 5C10.5523 5 11 5.67157 11 6.5Z"
          fill="#444B58"
        />
      </svg>
      <p className={style.title}>Ничего не найдено</p>
    </div>
  );
};

export default ProductsNotFound;
