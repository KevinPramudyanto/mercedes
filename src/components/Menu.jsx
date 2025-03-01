import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="fixed right-7 top-0 z-40 flex flex-col items-center justify-center gap-1">
      <div className="flex h-[66px] w-[66px] items-center justify-center bg-lightgray">
        <img src="nav-hamburger.svg" alt="Nav Hamburger" loading="lazy" />
      </div>

      <nav className="flex min-h-[66px] w-[66px] items-center justify-center rounded-b-full bg-lightgray">
        {isMenuOpen ? (
          <div className="flex flex-col items-center justify-center gap-6 p-3">
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="invert"
                src="nav-whatsapp.svg"
                alt="Nav Whatsapp"
                loading="lazy"
              />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="invert"
                src="nav-instagram.svg"
                alt="Nav Instagram"
                loading="lazy"
              />
            </a>

            <a
              href="https://web.telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="invert"
                src="nav-telegram.svg"
                alt="Nav Telegram"
                loading="lazy"
              />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="invert"
                src="nav-facebook.svg"
                alt="Nav Facebook"
                loading="lazy"
              />
            </a>

            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img
                className="invert"
                src="nav-twitter.svg"
                alt="Nav Twitter"
                loading="lazy"
              />
            </a>

            <img
              className="hover:cursor-pointer"
              src="nav-arrow-up.svg"
              alt="Nav Arrow Up"
              loading="lazy"
              onClick={handleClick}
            />
          </div>
        ) : (
          <img
            className="hover:cursor-pointer"
            src="nav-share.svg"
            alt="Nav Share"
            loading="lazy"
            onClick={handleClick}
          />
        )}
      </nav>
    </div>
  );
};

export default Menu;
