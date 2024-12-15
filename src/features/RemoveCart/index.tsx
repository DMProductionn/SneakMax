import { useDispatch } from 'react-redux';
import style from './style.module.css';
import { AppDispatch } from '../../App/Redux/store';
import { deleteProductToCart, getCart } from '../../App/services/cart.service';

type Props = {
  section?: string;
  id: number;
};

const RemoveCart: React.FC<Props> = ({ section, id }) => {
  const dispatch: AppDispatch = useDispatch();
  const handleClickRemove = () => {
    dispatch(deleteProductToCart(id)).then(() => {
      dispatch(getCart());
    });
  };

  return (
    <button onClick={handleClickRemove} className='delete-button-class'>
      {section === 'checkout' ? (
        <p className="text-[14px]">Удалить</p>
      ) : (
        <svg
          className={style.svg}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_178_492)">
            <path
              className={style.path}
              d="M18.571 2.85715H13.571V2.14285C13.571 0.959387 12.6117 0 11.4282 0H8.57103C7.38756 0 6.42818 0.959387 6.42818 2.14285V2.85715H1.42817C1.03366 2.85715 0.713867 3.17695 0.713867 3.57145C0.713867 3.96595 1.03371 4.28571 1.42817 4.28571H2.20457L3.57102 19.3507C3.60471 19.7196 3.91488 20.0015 4.28532 20H15.7139C16.0843 20.0015 16.3945 19.7196 16.4282 19.3507L17.7946 4.28571H18.5711C18.9656 4.28571 19.2854 3.96591 19.2854 3.57141C19.2854 3.17691 18.9655 2.85715 18.571 2.85715ZM7.85673 2.14285C7.85673 1.74835 8.17653 1.42856 8.57103 1.42856H11.4282C11.8227 1.42856 12.1425 1.74835 12.1425 2.14285V2.85715H7.85677V2.14285H7.85673ZM15.0617 18.5714H4.93747L3.64246 4.28571H7.14248H16.3603L15.0617 18.5714Z"
              fill="#4D4D4D"
              fillOpacity="0.3"
            />
            <path
              className={style.path}
              d="M7.85779 16.3808C7.8577 16.3799 7.85766 16.3789 7.85758 16.3779L7.14328 6.37793C7.11528 5.98342 6.77275 5.68635 6.37829 5.71435C5.98379 5.74235 5.68672 6.08487 5.71472 6.47933L6.42902 16.4793C6.45568 16.8539 6.76782 17.1439 7.14332 17.1429H7.19476C7.5883 17.1156 7.88516 16.7744 7.85779 16.3808Z"
              fill="#4D4D4D"
              fillOpacity="0.3"
            />
            <path
              className={style.path}
              d="M9.99945 5.71423C9.60495 5.71423 9.28516 6.03403 9.28516 6.42853V16.4285C9.28516 16.823 9.60495 17.1428 9.99945 17.1428C10.394 17.1428 10.7138 16.823 10.7138 16.4285V6.42853C10.7138 6.03403 10.394 5.71423 9.99945 5.71423Z"
              fill="#4D4D4D"
              fillOpacity="0.3"
            />
            <path
              className={style.path}
              d="M13.6219 5.71435C13.2274 5.68635 12.8849 5.98342 12.8569 6.37793L12.1426 16.3779C12.1137 16.7713 12.4091 17.1137 12.8026 17.1426C12.8038 17.1427 12.8049 17.1428 12.8062 17.1429H12.8569C13.2324 17.1438 13.5445 16.8539 13.5712 16.4793L14.2855 6.47933C14.3135 6.08487 14.0164 5.74239 13.6219 5.71435Z"
              fill="#4D4D4D"
              fillOpacity="0.3"
            />
          </g>
          <defs>
            <clipPath id="clip0_178_492">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
};

export default RemoveCart;
