import Beranda from '../views/pages/beranda';
import About from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Login from '../views/pages/login';
import Like from '../views/pages/like';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/about-us': About,
  '/like': Like,
  '/login': Login,
  '/detail/:id': Detail,
};

export default routes;
