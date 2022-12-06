import Beranda from '../views/pages/beranda';
import About from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Login from '../views/pages/login';
import Like from '../views/pages/like';
import Orangtua from '../views/pages/orangtua';
import Anak from '../views/pages/anak';
import Ibumuda from '../views/pages/ibumuda';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/about-us': About,
  '/like': Like,
  '/login': Login,
  '/detail/:id': Detail,
  '/orangtua': Orangtua,
  '/anak': Anak,
  '/ibumuda': Ibumuda,
};

export default routes;
