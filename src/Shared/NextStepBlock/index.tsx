import { useState } from 'react';
import style from './style.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/Redux/store';

type Props = {
  setActiveBlock: React.Dispatch<React.SetStateAction<string>>;
  setHiddenBlock: React.Dispatch<React.SetStateAction<number>>;
  hiddenBlock: number;
};

const NextStepBlock: React.FC<Props> = ({ setActiveBlock, setHiddenBlock, hiddenBlock }) => {
  const section = ['Type', 'Size', 'Writing', 'IsReady'];
  const { sizes, types } = useSelector((state: RootState) => state.selection_sneakers)
  const [index, setIndex] = useState(0);

  console.log(types);
  

  const handleClick = () => {
    if ((types.length === 0)) {
      return;
    }
    if ((sizes.length === 0) && (index === 1)) {
      return;
    }
    setIndex(index + 1);
    setActiveBlock(section[index + 1]);
    setHiddenBlock(hiddenBlock + 1);
  };

  return (
    <div className={style.container}>
      <p className={style.text}>
        <span>{index + 1}</span> из 3
      </p>
      <button onClick={handleClick} className={style.button}>
        Следующий шаг
      </button>
    </div>
  );
};

export default NextStepBlock;
