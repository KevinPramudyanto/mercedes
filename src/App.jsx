import { lazy, Suspense } from "react";
const Menu = lazy(() => import("./components/Menu"));
const Header = lazy(() => import("./components/Header"));
const Introduction = lazy(() => import("./components/Introduction"));
const Pedigree = lazy(() => import("./components/Pedigree"));
const Interior = lazy(() => import("./components/Interior"));
const TimeToDance = lazy(() => import("./components/TimeToDance"));
const Flawed = lazy(() => import("./components/Flawed"));

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Menu</p>}>
        <Menu />
      </Suspense>
      <Suspense fallback={<p>Header</p>}>
        <Header />
      </Suspense>
      <Suspense fallback={<p>Introduction</p>}>
        <Introduction />
      </Suspense>
      <Suspense fallback={<p>Pedigree</p>}>
        <Pedigree />
      </Suspense>
      <Suspense fallback={<p>Interior</p>}>
        <Interior />
      </Suspense>
      <Suspense fallback={<p>TimeToDance</p>}>
        <TimeToDance />
      </Suspense>
      <Suspense fallback={<p>Flawed</p>}>
        <Flawed />
      </Suspense>
    </>
  );
};

export default App;
