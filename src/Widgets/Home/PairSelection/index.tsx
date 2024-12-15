import style from './style.module.css';
import NextStepBlock from '../../../Shared/NextStepBlock';
import TitlePairBlock from '../../../Shared/TitlePairBlock';
import SelectedType from '../../../entities/PairSelection/SelectedType';
import SelectedSize from '../../../entities/PairSelection/SelectedSize';
import WritingMessage from '../../../entities/PairSelection/WritingMessage';
import SelectionIsReady from '../SelectionIsReady';
import { useState } from 'react';
import { Element } from 'react-scroll';

const PairSelection = () => {
  const [activeBlock, setActiveBlock] = useState('Type');
  const [hiddenBlock, setHiddenBlock] = useState(0);

  return (
    <Element name='productSelection'>
      <section className={style.section}>
        <div className={style.wrapper}>
          <div className={style.container}>
            {activeBlock === 'IsReady' ? (
              <SelectionIsReady />
            ) : (
              <>
                <TitlePairBlock />
                <SelectedType hiddenBlock={hiddenBlock} activeBlock={activeBlock} />
                <SelectedSize activeBlock={activeBlock} hiddenBlock={hiddenBlock} />
                <WritingMessage hiddenBlock={hiddenBlock} />
                <NextStepBlock
                  setHiddenBlock={setHiddenBlock}
                  hiddenBlock={hiddenBlock}
                  setActiveBlock={setActiveBlock}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default PairSelection;
