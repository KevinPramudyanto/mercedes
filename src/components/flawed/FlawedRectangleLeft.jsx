import { useEffect, useRef } from "react";

const FlawedRectangleLeft = () => {
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleRectangleLeftScroll = () => {
      if (triggerRef.current) {
        let progress =
          2 -
          2 *
            (triggerRef.current.getBoundingClientRect().top /
              window.innerHeight);
        if (progress < 0) {
          progress = 0;
        } else if (progress > 1) {
          progress = 1;
        }

        const translate = Math.floor(
          (progress - 1) * triggerRef.current.offsetWidth,
        );

        triggerRef.current.style.transform = "translateX(" + translate + "px)";
      }
    };

    window.addEventListener("scroll", handleRectangleLeftScroll);
    return () => {
      window.removeEventListener("scroll", handleRectangleLeftScroll);
    };
  }, []);

  return (
    <div
      className="flex min-h-[600px] flex-col-reverse items-start justify-center rounded-r-full bg-darkyellow/90 sm:grid sm:min-h-72 sm:w-[640px] sm:grid-cols-2 sm:items-center md:w-[768px] xl:w-[768px]"
      ref={triggerRef}
    >
      <div className="mr-20 flex items-center justify-start sm:mr-0">
        <img
          src="footer_left_what_we_like.png"
          alt="Footer Left What We Like"
          loading="lazy"
        />
      </div>
      <div className="mr-16 flex items-center justify-start sm:mr-0">
        <div className="ml-3 flex flex-col items-end justify-center sm:ml-0">
          <h4 className="mb-3 text-2xl font-bold text-white">What We Like</h4>
          {[
            "Rapid Performance",
            "Loud V8 and throaty exhaust",
            "Pliant ride",
            "Cruising ability",
            "Might be the last SL with a V8",
            "Still feels special",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3">
              <h6 className="text-right font-semibold text-darkbrown">
                {item}
              </h6>
              <div className="h-3 w-3 rounded-full bg-lightyellow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlawedRectangleLeft;
