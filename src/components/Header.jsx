import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isMiddle, setIsMiddle] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        setIsMiddle(
          stickyRef.current.getBoundingClientRect().top +
            stickyRef.current.offsetHeight / 2 <=
            window.innerHeight / 2,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          isMiddle
            ? "absolute top-[100vh] flex items-center justify-center"
            : "fixed flex items-center justify-center"
        }
      >
        <img
          className="h-screen w-screen object-cover"
          src="masthead_back_img.jpg"
          alt="Masthead Back"
        />
        <img
          className="absolute top-0 h-screen object-cover opacity-25"
          src="masthead_ring.svg"
          alt="Masthead Ring"
        />
        <img
          className="masthead-ring-rotate absolute top-0 h-screen object-cover"
          src="masthead_ring_rotate.svg"
          alt="Masthead Ring Rotate"
        />
        <h1 className="absolute top-32 text-5xl font-extrabold text-darkgray opacity-80">
          Mercedes-Benz SL55 AMG
        </h1>
      </div>

      <div className="h-screen"></div>

      <div
        className="flex h-screen items-center justify-center"
        ref={stickyRef}
      >
        <div className="flex h-64 w-64 flex-col items-center justify-center gap-5 rounded-full bg-darkgray p-10 text-center text-xl font-bold text-white opacity-80">
          <p>A luxurious upgrade that packs plenty of firepower</p>
          <img src="main-arrow-down.svg" alt="Main Arrow Down" />
        </div>
      </div>
    </>
  );
};

export default Header;
