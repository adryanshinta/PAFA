import Beranda from '../views/pages/beranda';
import About from '../views/pages/about-us';
import Detail from '../views/pages/detail';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/about-us': About,
  '/detail/:id': Detail,
};

export default routes;
