import { useDispatch } from 'react-redux';
import style from './style.module.css';
import { setModalShowCart } from '../../App/Redux/Slices/modals.slice';
import CountCart from '../CountCart';
import { Link as Scroll } from 'react-scroll';

type Props = {
  section?: string;
  cartBtnRef?: React.RefObject<HTMLLIElement>;
};

const Nav: React.FC<Props> = ({ section, cartBtnRef }) => {
  const dispatch = useDispatch();
  const nav = [
    {
      title: 'Каталог',
      link: 'catalog',
    },
    {
      title: 'О нас',
      link: 'aboutUs',
    },
    {
      title: 'Подбор товара',
      link: 'productSelection',
    },
    {
      title: 'Наша команда',
      link: 'team',
    },
    {
      title: 'Доставка и оплата',
      link: 'deliveryAndPayment',
    },
    {
      title: 'Контакты',
      link: 'contacts',
    },
  ];

  return (
    <nav className={section === 'header' ? style.header__nav : style.footer__nav}>
      <ul className={style.list}>
        {nav.map((item) => (
          <Scroll
            key={item.link}
            className={style.link}
            to={item.link}
            duration={100}
            smooth={true}>
            {item.title}
          </Scroll>
        ))}
        {section === 'header' && (
          <div className="relative flex gap-[10px]">
            <li
              className={style.link}
              ref={cartBtnRef}
              onClick={() => dispatch(setModalShowCart(true))}>
              <p>Корзина</p>
            </li>
            <div className={style.cart__item}>
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 6.57893H16.6038L13.0359 0.319309C12.8589 0.0083658 12.475 -0.093156 12.1784 0.0938088C11.8823 0.280773 11.7865 0.684867 11.9641 0.996475L15.1461 6.57893H4.85388L8.03587 0.996431C8.21348 0.684823 8.11767 0.280729 7.82164 0.0937645C7.52439 -0.0932003 7.14173 0.00832153 6.96411 0.319265L3.39617 6.57888H0V7.89468H1.35651L2.94432 16.8103C3.11033 17.7438 3.88547 18.421 4.78761 18.421H15.2124C16.1145 18.421 16.8896 17.7438 17.055 16.811L18.6434 7.89468H20C20 7.89468 20 6.57893 20 6.57893ZM15.8264 16.5688C15.7715 16.8797 15.5133 17.1053 15.2124 17.1053H4.78761C4.4867 17.1053 4.22854 16.8798 4.173 16.5681L2.62789 7.89468H17.3721L15.8264 16.5688Z"
                  fill="white"
                />
              </svg>
              <CountCart />
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
