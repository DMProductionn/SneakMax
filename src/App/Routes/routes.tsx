import Home from "../../Page/Home";
import NotFound from "../../Page/NotFound";
import ViewProductModal from "../../Widgets/Modal/ViewProductModal";

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product/:id',
    element: <ViewProductModal />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes