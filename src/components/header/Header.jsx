import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="relative">
      <div className="sticky top-0 flex items-start justify-end overflow-hidden">
        <img
          className="hidden h-screen w-screen object-cover object-bottom sm:block"
          src="/images/masthead_back_img.jpg"
          alt="Masthead Back"
          loading="lazy"
          decoding="async"
        />
        <img
          className="block h-screen w-screen object-cover object-bottom sm:hidden"
          src="/images/mobile_masthead_back_img.jpg"
          alt="Mobile Masthead Back"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute flex h-[130%] w-[130%] items-center justify-center sm:h-[110%] sm:w-[110%]">
          <img
            className="object-cover opacity-80"
            src="/images/masthead_ring.svg"
            alt="Masthead Ring"
            loading="lazy"
            decoding="async"
          />
          <img
            className={styles.rotate + " absolute object-cover"}
            src="/images/masthead_ring_rotate.svg"
            alt="Masthead Ring Rotate"
            loading="lazy"
            decoding="async"
          />
        </div>
        <img
          className="absolute hidden h-screen w-screen object-cover object-bottom sm:block"
          src="/images/masthead_fore_img.png"
          alt="Masthead Fore"
          loading="lazy"
          decoding="async"
        />
        <img
          className="absolute block h-screen w-screen object-cover object-bottom sm:hidden"
          src="/images/mobile_masthead_fore_img.png"
          alt="Mobile Masthead Fore"
          loading="lazy"
          decoding="async"
        />
        <h1 className="absolute w-full px-5 pt-20 text-center text-[40px] font-bold text-darkgray opacity-80 lg:text-[55px]">
          Mercedes-Benz SL55 AMG
        </h1>
      </div>

      <div className="flex h-screen items-center justify-center">
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center gap-[45px] rounded-full bg-darkgray opacity-80 sm:h-[420px] sm:w-[420px] lg:h-[540px] lg:w-[540px] lg:gap-[60px]">
          <h2 className="w-48 text-center text-2xl font-bold text-white lg:w-72 lg:text-4xl">
            A luxurious upgrade that packs plenty of firepower
          </h2>
          <img
            src="/images/main-arrow-down.svg"
            alt="Main Arrow Down"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
