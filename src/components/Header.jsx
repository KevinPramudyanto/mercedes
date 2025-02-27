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
      <div className="masthead-ring fixed z-30 flex h-screen w-screen items-center justify-center opacity-0">
        <img
          className="max-w-screen max-h-screen object-cover"
          src="masthead_ring.svg"
          alt="Masthead Ring"
        />
      </div>
      <div className="masthead-ring-rotate fixed z-40 flex h-screen w-screen items-center justify-center opacity-0">
        <img
          className="max-w-screen max-h-screen object-cover"
          src="masthead_ring_rotate.svg"
          alt="Masthead Ring Rotate"
        />
      </div>
      <div className={isMiddle ? "absolute top-[100vh]" : "fixed"}>
        <img
          className="h-screen w-screen object-cover"
          src="masthead_back_img.jpg"
          alt="Masthead Back"
        />
        <div className="text-darkgray absolute top-32 w-full text-center text-5xl font-extrabold opacity-80">
          Mercedes-Benz SL55 AMG
        </div>
      </div>
      <div className="h-screen"></div>
      <div
        className="flex h-screen w-screen items-center justify-center"
        ref={stickyRef}
      >
        <div className="bg-darkgray m-auto flex h-64 w-64 flex-col items-center justify-center gap-5 rounded-full p-10 text-center text-xl font-bold text-white opacity-80">
          <div>A luxurious upgrade that packs plenty of firepower</div>
          <img src="main-arrow-down.svg" alt="Main Arrow Down" />
        </div>
      </div>
    </>
  );
};

export default Header;
