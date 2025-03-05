import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 pt-10 sm:pt-12">
      <div className="px-0 sm:px-12">
        <img
          className="mx-auto"
          src="/images/bottom_advertisment.png"
          alt="Bottom Advertisment"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="mt-10 bg-orange-500 px-3 sm:mt-16 lg:px-6 xl:px-10">
        <div className="px- bg-orange-900 px-3 lg:px-6 xl:px-10">
          <div className="bg-red-950 px-3 lg:px-6 xl:px-10">
            <div className="bg-[#380000] px-3 lg:px-6 xl:px-10">
              <div className="bg-[#200000] px-3 py-3 lg:px-6 lg:py-6 xl:px-10 xl:py-10">
                <img
                  className="m-auto block sm:hidden"
                  src="/images/asiaone_footer_mobile.png"
                  alt="Asiaone Footer Mobile"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="m-auto hidden sm:block"
                  src="/images/asiaone_footer_desktop.png"
                  alt="Asiaone Footer Desktop"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
