import { lazy, Suspense } from "react";
const Menu = lazy(() => import("./components/Menu"));
const Header = lazy(() => import("./components/Header"));
const Carousel = lazy(() => import("./components/Carousel"));
const Pedigree = lazy(() => import("./components/Pedigree"));
const Interior = lazy(() => import("./components/Interior"));
const TimeToDance = lazy(() => import("./components/TimeToDance"));
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
