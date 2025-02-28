import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="fixed right-4 top-0 z-50 w-12 rounded-b-full bg-lightgray opacity-90">
      <img
        className="m-auto border-b border-b-white p-3"
        src="nav-hamburger.svg"
        alt="Hamburger Menu"
      />
      <nav>
        {isMenuOpen ? (
          <>
            <img
              className="m-auto p-3 invert"
              src="nav-whatsapp.svg"
              alt="Whatsapp"
            />
            <img
              className="m-auto p-3 invert"
              src="nav-instagram.svg"
              alt="Instagram"
            />
            <img
              className="m-auto p-3 invert"
              src="nav-telegram.svg"
              alt="Telegram"
            />
            <img
              className="m-auto p-3 invert"
              src="nav-facebook.svg"
              alt="Facebook"
            />
            <img
              className="m-auto p-3 invert"
              src="nav-twitter.svg"
              alt="Twitter"
            />
            <img
              className="m-auto p-3 hover:cursor-pointer"
              src="nav-arrow-up.svg"
              alt="Arrow Up"
              onClick={handleClick}
            />
          </>
        ) : (
          <img
            className="m-auto p-3 hover:cursor-pointer"
            src="nav-share.svg"
            alt="Share"
            onClick={handleClick}
          />
        )}
      </nav>
    </div>
  );
};

export default Menu;
