import { lazy, Suspense } from "react";
import Fallback from "./components/fallback/Fallback.jsx";
const Menu = lazy(() => import("./components/menu/Menu.jsx"));
const Header = lazy(() => import("./components/header/Header.jsx"));
const Carousel = lazy(() => import("./components/carousel/Carousel.jsx"));
const Pedigree = lazy(() => import("./components/pedigree/Pedigree.jsx"));
const Interior = lazy(() => import("./components/interior/Interior.jsx"));
const TimeToDance = lazy(
  () => import("./components/timeToDance/TimeToDance.jsx"),
);
const Flawed = lazy(() => import("./components/flawed/Flawed.jsx"));
const Footer = lazy(() => import("./components/footer/Footer.jsx"));

const App = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Menu />
      <Header />
      <Carousel />
      <Pedigree />
      <Interior />
      <TimeToDance />
      <Flawed />
      <Footer />
    </Suspense>
  );
};

export default App;
