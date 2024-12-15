import { Outlet } from 'react-router-dom';
import Footer from '../../Widgets/Footer';
import Header from '../../Widgets/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
