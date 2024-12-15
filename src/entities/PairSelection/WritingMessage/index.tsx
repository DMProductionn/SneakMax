import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useDispatch } from 'react-redux';
import { setSelectionSneakers } from '../../../App/Redux/Slices/selection-sneakers.slice';

type Props = {
  hiddenBlock: number
}

const WritingMessage:React.FC<Props> = ({ hiddenBlock }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (hiddenBlock === 2) {
      setTimeout(() => {
        setIsVisible(true);
      }, 400);
    }
  }, [hiddenBlock]);

  const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
    dispatch(setSelectionSneakers({ message: event.target.value }));
  };

  return (
    <div style={isVisible ? { display: 'block' } : { display: 'none' }} className={hiddenBlock === 2 ? `${style.wrapper} ${style.active}` : style.wrapper}>
      <p className={style.title}>Уточните какие-либо моменты</p>
      <textarea value={textareaValue} onChange={handleTextarea} className={style.textarea} placeholder="Ваше сообщение"></textarea>
    </div>
  );
};

export default WritingMessage;
