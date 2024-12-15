import style from './style.module.css';

const CartIsEmpty = () => {
  return (
    <div className={style.wrapper}>
      <svg
        width="72"
        height="72"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.75725 1.07125C5.99404 1.21333 6.07082 1.52046 5.92875 1.75725L3.3831 6H12.6169L10.0713 1.75725C9.92918 1.52046 10.006 1.21333 10.2428 1.07125C10.4795 0.929179 10.7867 1.00596 10.9287 1.24275L13.7831 6H15.5C15.7761 6 16 6.22386 16 6.5V7.5C16 7.77614 15.7761 8 15.5 8H0.5C0.223858 8 0 7.77614 0 7.5V6.5C0 6.22386 0.223858 6 0.5 6H2.2169L5.07125 1.24275C5.21333 1.00596 5.52046 0.929179 5.75725 1.07125ZM3.39353 15L1.91457 9.00005H0.942572L2.46776 15.4262C2.54915 15.7629 2.85044 16 3.19676 16H12.8032C13.1496 16 13.4509 15.7629 13.5322 15.4262L15.0574 9.00005H14.0854L12.6065 15H3.39353Z"
          fill="#444B58"
        />
      </svg>
      <p className={style.title}>Корзина пуста</p>
    </div>
  );
};

export default CartIsEmpty;