import { useEffect, useRef, useState } from "react";
import CommonTitle1 from "../common/CommonTitle1.jsx";
import CommonTitle2 from "../common/CommonTitle2.jsx";
import FlawedImageContainer from "./FlawedImageContainer.jsx";

const Flawed = () => {
  const [isMiddle4a, setIsMiddle4a] = useState(false);
  const [isMiddle4b, setIsMiddle4b] = useState(false);
  const middle4aRef = useRef(null);
  const middle4bRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (middle4aRef.current) {
        setIsMiddle4a(
          middle4aRef.current.getBoundingClientRect().top +
            middle4aRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle4bRef.current) {
        setIsMiddle4b(
          middle4bRef.current.getBoundingClientRect().top +
            middle4bRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-neutral-200 pt-20 sm:pt-48">
      <div className="hidden sm:block">
        <CommonTitle2 content="The SL55 is not perfect. Its ergonomics could be better, its rear-wheel steering system further improved, and the boot should be bigger." />
      </div>

      <div className="hidden sm:block">
        <CommonTitle1 content="Flawed, yet inforgettable" />
      </div>

      <div className="mx-auto hidden max-w-6xl pb-20 sm:block sm:pb-44 xl:pb-48">
        <div className="px-32 font-semibold text-darkbrown">
          <p className="mb-5">
            The SL55 is not perfect. Its ergonomics could be better, its
            rear-wheel steering system further improved, and the boot should be
            bigger. I am puzzled at the lack of soft-closing doors, and really,
            given the price tag, it's outrageous that carbon-ceramic brakes
            aren't standard.
          </p>
          <p className="mb-5">
            The engine's heat also soaks into the cabin once it and the air-con
            are switched off. I excuse this by calling it the 'SL's warm
            embrace', but I am irked because the air-con can't seem to cool the
            cabin on a hot day.
          </p>
          <p className="mb-5">
            Exotic supercars aside, there are not many luxury cars today with
            the SL's heritage and V8 soundtrack. The last car I recall was the
            Lexus LC500 Convertible . But it doesn't feel as solid. It also does
            not have the SL's lineage.
          </p>
          <p className="mb-5">
            Attraction is a funny thing because it can both heighten and dull
            your senses. Seeing and driving the SL makes my pulse race, and at
            the same time, overlook its shortcomings.
          </p>
          <p>
            What matters most, though, is that driving it reminds me that life
            isn't just about work. And in it, I am also freed from
            sustainability's constant clamour. The SL refreshes my soul — how
            can I not love it so?
          </p>
        </div>
      </div>

      <FlawedImageContainer />

      <div className="mt-12 grid grid-cols-2 gap-3">
        <div
          className={
            isMiddle4a
              ? "flawed-left-in grid grid-cols-2 gap-3 rounded-r-full bg-lightyellow"
              : "flawed-left-out grid grid-cols-2 gap-3 rounded-r-full bg-lightyellow"
          }
          ref={middle4aRef}
        >
          <img
            className=""
            src="footer_left_what_we_like.png"
            alt="Footer Left What We Like"
            loading="lazy"
          />
          <div className="flex items-center justify-start">
            <div className="flex flex-col items-end justify-center">
              <h3 className="mb-3 text-3xl font-semibold text-white">
                What We Like
              </h3>
              {[
                "Rapid Performance",
                "Loud V8 and throaty exhaust",
                "Pliant ride",
                "Cruising ability",
                "Might be the last SL with a V8",
                "Still feels special",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3"
                >
                  <h6 className="text-darkbrown">{item}</h6>
                  <div className="h-3 w-3 rounded-full bg-darkyellow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={
            isMiddle4b
              ? "flawed-right-in grid grid-cols-2 gap-3 rounded-l-full bg-lightyellow"
              : "flawed-right-out grid grid-cols-2 gap-3 rounded-l-full bg-lightyellow"
          }
          ref={middle4bRef}
        >
          <div className="flex items-center justify-end">
            <div className="flex flex-col items-start justify-center">
              <h3 className="mb-3 text-3xl font-semibold text-white">
                What We Dislike
              </h3>
              {[
                "Ridiculous $1 million price tag",
                "Non-existent rear-wheel",
                "steering",
                "No soft-closing doors",
                "Seriously overpriced",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="h-3 w-3 rounded-full bg-darkyellow"></div>
                  <h6 className="text-darkbrown">{item}</h6>
                </div>
              ))}
            </div>
          </div>
          <img
            className=""
            src="footer_right_what_we_dislike.png"
            alt="Footer Right What We Dislike"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Flawed;
