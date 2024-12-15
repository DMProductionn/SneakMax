import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import routes from './routes';

function Router() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      }
    </>
  );
}

export default Router;
