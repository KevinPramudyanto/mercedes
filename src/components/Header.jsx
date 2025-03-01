const Header = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 flex items-center justify-center overflow-hidden">
        <img
          className="h-screen w-screen object-cover"
          src="masthead_back_img.jpg"
          alt="Masthead Back"
          loading="lazy"
        />
        <img
          className="absolute h-[140%] object-cover opacity-80"
          src="masthead_ring.svg"
          alt="Masthead Ring"
          loading="lazy"
        />
        <img
          className="masthead-ring-rotate absolute h-[140%] object-cover"
          src="masthead_ring_rotate.svg"
          alt="Masthead Ring Rotate"
          loading="lazy"
        />
        <img
          className="absolute top-0 h-screen w-screen object-cover"
          src="masthead_fore_img.png"
          alt="Masthead Fore"
          loading="lazy"
        />
        <h1 className="absolute top-32 text-5xl font-extrabold text-darkgray opacity-80">
          Mercedes-Benz SL55 AMG
        </h1>
      </div>
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-64 w-64 flex-col items-center justify-center gap-5 rounded-full bg-darkgray p-10 text-center text-xl font-bold text-white opacity-80">
          <p>A luxurious upgrade that packs plenty of firepower</p>
          <img src="main-arrow-down.svg" alt="Main Arrow Down" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Header;
