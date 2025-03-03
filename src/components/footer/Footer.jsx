import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-300 pt-12">
      <img
        className="mx-auto"
        src="bottom_advertisment.png"
        alt="Bottom Advertisment"
        loading="lazy"
      />

      <div className="mt-12 bg-lightyellow px-8">
        <div className="bg-darkyellow px-8">
          <div className="bg-lightbrown px-8">
            <div className="bg-darkbrown px-8 py-8">
              <img
                className="m-auto"
                src="asiaone_footer_desktop.png"
                alt="Asiaone Footer Desktop"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
