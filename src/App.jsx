import { lazy, Suspense } from "react";
const Menu = lazy(() => import("./components/menu/Menu.jsx"));
const Header = lazy(() => import("./components/header/Header.jsx"));
const Carousel = lazy(() => import("./components/carousel/Carousel.jsx"));
const Pedigree = lazy(() => import("./components/pedigree/Pedigree.jsx"));
const Interior = lazy(() => import("./components/interior/Interior.jsx"));
const TimeToDance = lazy(
  () => import("./components/timeToDance/TimeToDance.jsx"),
);
const Flawed = lazy(() => import("./components/Flawed"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Menu />
      <Header />
      <Carousel />
      <Pedigree />
      <Interior />
      <TimeToDance />
      <Flawed />
    </Suspense>
  );
};

export default App;
