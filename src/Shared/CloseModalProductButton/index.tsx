import style from './style.module.css';

type Props = {
  handleCloseModal: () => void;
}

const CloseModalProductButton: React.FC<Props> = ({ handleCloseModal }) => {
  return (
    <button className={style.button} onClick={handleCloseModal}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.0903 34.0904C35.0317 33.1491 36.558 33.1491 37.4994 34.0904L54.5446 51.1356L71.5898 34.0904C72.5311 33.1491 74.0574 33.1491 74.9988 34.0904C75.9402 35.0318 75.9402 36.5581 74.9988 37.4995L57.9536 54.5447L74.9988 71.5899C75.9402 72.5312 75.9402 74.0575 74.9988 74.9989C74.0574 75.9403 72.5311 75.9403 71.5898 74.9989L54.5446 57.9537L37.4994 74.9989C36.558 75.9403 35.0317 75.9403 34.0903 74.9989C33.149 74.0575 33.149 72.5312 34.0903 71.5899L51.1355 54.5447L34.0903 37.4995C33.149 36.5581 33.149 35.0318 34.0903 34.0904Z"
          fill="#444B58"
        />
      </svg>
    </button>
  );
};

export default CloseModalProductButton;
