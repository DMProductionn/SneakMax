import AboutUs from '../../Widgets/Home/AboutUs';
import Catalog from '../../Widgets/Home/Catalog';
import Contacts from '../../Widgets/Home/Contacts';
import ContactUs from '../../Widgets/Home/ContactUs';
import MainSection from '../../Widgets/Home/MainSection';
import OurTeam from '../../Widgets/Home/OurTeam';
import PairSelection from '../../Widgets/Home/PairSelection';
import Questions from '../../Widgets/Home/Questions';

const Home = () => {
  const styleContainer = 'max-w-[1210px] w-full mx-auto';

  return (
    <>
      <MainSection />
      <div className={styleContainer}>
        <Catalog />
      </div>
      <AboutUs />
      <div className={styleContainer}>
        <PairSelection />
      </div>
      <OurTeam />
      <div className={styleContainer}>
        <Questions />
      </div>
      <Contacts />
      <div className={styleContainer}>
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
