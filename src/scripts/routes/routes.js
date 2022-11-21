import Beranda from '../views/pages/beranda';
import About from '../views/pages/about-us';
import Detail from '../views/pages/detail';

const routes = {
  '/': Beranda, // default page
  '/now-playing': Beranda,
  '/upcoming': About,
  '/detail/:id': Detail,
};

export default routes;
