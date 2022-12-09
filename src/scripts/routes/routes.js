import Beranda from '../views/pages/beranda';
import About from '../views/pages/about-us';
import Detail from '../views/pages/detail';
import Detailanak from '../views/pages/detail-anak';
import DetailIbuMuda from '../views/pages/detail-ibumuda';
import DetailOrangTua from '../views/pages/detail-orangtua';
import AnakPage from '../views/pages/anak';
import IbuMudaPage from '../views/pages/ibumuda';
import OrtuPage from '../views/pages/orangtua';
import Like from '../views/pages/like';

const routes = {
  '/': Beranda, // default page
  '/beranda': Beranda,
  '/about-us': About,
  '/like': Like,
  '/anak': AnakPage,
  '/orangtua': OrtuPage,
  '/ibumuda': IbuMudaPage,
  '/detail/:id': Detail,
  '/detail-anak/:id': Detailanak,
  '/detail-ibumuda/:id': DetailIbuMuda,
  '/detail-orangtua/:id': DetailOrangTua,
};

export default routes;
