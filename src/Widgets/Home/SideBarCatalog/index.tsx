import FilterPrice from '../../../entities/SideBar/FilterPrice';
import SelectedGender from '../../../entities/SideBar/SelectedGender';
import SelectedSize from '../../../entities/SideBar/SelectedSize';
import ApplyFilters from '../../../features/SideBar/ApplyFilters';
import ResetFilters from '../../../features/SideBar/ResetFilters';
import CloseFilterButton from '../../../Shared/CloseFilterButton';
import style from './style.module.css';

type Props = {
  activeSideBar: boolean;
  setActiveSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBarCatalog: React.FC<Props> = ({ activeSideBar, setActiveSideBar }) => {
  return (
    <div className={activeSideBar ? `${style.container} ${style.active}` : `${style.container}`}>
      <CloseFilterButton setActiveSideBar={setActiveSideBar} />
      <p className={style.title}>Подбор по параметрам</p>
      <FilterPrice />
      <SelectedGender />
      <SelectedSize />
      <div className={style.buttons}>
        <ApplyFilters setActiveSideBar={setActiveSideBar}/>
        <ResetFilters setActiveSideBar={setActiveSideBar}/>
      </div>
    </div>
  );
};

export default SideBarCatalog;
