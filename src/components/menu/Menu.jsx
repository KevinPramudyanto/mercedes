import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="fixed right-0 top-0 z-40 flex flex-row-reverse items-center justify-center gap-1 opacity-80 sm:right-7 sm:flex-col">
      <div className="flex h-[66px] w-[66px] items-center justify-center bg-lightgray">
        <img
          src="/images/nav-hamburger.svg"
          alt="Nav Hamburger"
          loading="lazy"
        />
      </div>

      <nav className="flex min-h-[66px] min-w-[66px] items-center justify-center rounded-l-full bg-lightgray sm:rounded-b-full sm:rounded-tl-none">
        {isMenuOpen ? (
          <div className="flex flex-row-reverse items-center justify-center sm:flex-col">
            <div className="flex flex-row items-center justify-center gap-2 p-3 sm:flex-col sm:gap-6">
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="invert"
                  src="/images/nav-whatsapp.svg"
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
                  src="/images/nav-instagram.svg"
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
                  src="/images/nav-telegram.svg"
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
                  src="/images/nav-facebook.svg"
                  alt="Nav Facebook"
                  loading="lazy"
                />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="invert"
                  src="/images/nav-twitter.svg"
                  alt="Nav Twitter"
                  loading="lazy"
                />
              </a>
            </div>

            <img
              className="rotate-90 p-3 hover:cursor-pointer sm:rotate-0"
              src="/images/nav-arrow-up.svg"
              alt="Nav Arrow Up"
              loading="lazy"
              onClick={handleClick}
            />
          </div>
        ) : (
          <img
            className="hover:cursor-pointer"
            src="/images/nav-share.svg"
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
