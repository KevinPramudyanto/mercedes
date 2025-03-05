import { useEffect, useRef } from "react";

const FlawedRectangleRight = () => {
  const triggerRef = useRef(null);

  useEffect(() => {
    // Trigger the translation when the element is scrolled into view

    const handleRectangleRightScroll = () => {
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
          (1 - progress) * triggerRef.current.offsetWidth,
        );

        triggerRef.current.style.transform = "translateX(" + translate + "px)";
      }
    };

    window.addEventListener("scroll", handleRectangleRightScroll);
    return () => {
      window.removeEventListener("scroll", handleRectangleRightScroll);
    };
  }, []);

  return (
    <div
      className="flex min-h-[600px] flex-col items-end justify-center rounded-l-full bg-darkyellow/90 sm:grid sm:min-h-72 sm:w-[640px] sm:grid-cols-2 sm:items-center md:w-[768px] xl:w-[768px]"
      ref={triggerRef}
    >
      <div className="ml-16 flex items-center justify-end sm:ml-0">
        <div className="mr-3 flex flex-col items-start justify-center sm:mr-0">
          <h4 className="mb-3 text-2xl font-bold text-white">
            What We Dislike
          </h4>
          {[
            "Ridiculous $1 million price tag",
            "Non-existent rear-wheel",
            "steering",
            "No soft-closing doors",
            "Seriously overpriced",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3">
              <div className="h-3 w-3 rounded-full bg-lightyellow"></div>
              <h6 className="font-semibold text-darkbrown">{item}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-20 flex items-center justify-end sm:ml-0">
        <img
          src="/images/footer_right_what_we_dislike.png"
          alt="Footer Right What We Dislike"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default FlawedRectangleRight;
