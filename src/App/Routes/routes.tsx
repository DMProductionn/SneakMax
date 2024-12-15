import Home from "../../Page/Home";
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
    element: <div>404</div>,
  },
]

export default routes