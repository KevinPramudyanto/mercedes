import { useEffect, useRef, useState } from "react";

const Pedigree = () => {
  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topRef.current) {
        setIsTop(
          topRef.current.getBoundingClientRect().top +
            topRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (bottomRef.current) {
        setIsBottom(
          bottomRef.current.getBoundingClientRect().top +
            bottomRef.current.offsetHeight / 2 <=
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
    <div className="bg-white p-20">
      <div className="mx-auto max-w-screen-md">
        <h2 className="text-4xl font-bold text-darkgray">PEDIGREE</h2>

        <div
          className="my-20 flex items-center justify-center gap-10"
          ref={topRef}
        >
          <div className="flex-1 font-semibold text-darkbrown">
            <p className="mb-5">
              When one thinks of a German sports car with heritage, chances are
              the Porsche 911 , which was first launched in 1963, immediately
              pops into mind.
            </p>
            <p className="mb-5">
              There's another model with an even longer history though: It's the
              Mercedes-Benz SL, which first debuted as a racecar in 1952.
            </p>
            <p className="mb-5">
              The SL has racecar heritage, but over seven decades, its
              sportiness was blended with cruising ability. SL, which stands for
              'sport-light', continually evolved into a topless grand tourer.
            </p>
          </div>
          <div
            className={
              isTop
                ? "grow-in relative w-80 overflow-hidden rounded-full"
                : "grow-out relative w-80 overflow-hidden rounded-full"
            }
          >
            <img
              className="w-full"
              src="pedigree_porsche.png"
              alt="Pedigree Porsche"
              loading="lazy"
            />
            <h5 className="absolute right-0 top-5 rounded-full bg-darkyellow py-2 pl-6 pr-20 text-white">
              Porsche 911
            </h5>
          </div>
        </div>

        <div
          className="flex flex-row-reverse items-center justify-center gap-10"
          ref={bottomRef}
        >
          <div className="flex-1 font-semibold text-darkbrown">
            <p className="mb-5">
              Indeed, grand is a precise term for the new car's size. Compared
              to the previous SL , the latest one is 93mm longer, 38mm wider and
              44mm taller. For improved stability and passenger space, the
              wheelbase has been stretched by 115mm to 2,700mm.
            </p>
            <p className="mb-5">
              The car looks cleaner, sleeker and meaner than its predecessor.
              Its bonnet seems lower and much wider, yet the designers have
              wisely refrained from giving it a massive grille and gaping air
              intake. Brashness is not part of the SL's DNA.
            </p>
          </div>
          <div
            className={
              isBottom
                ? "grow-in relative w-80 overflow-hidden rounded-full"
                : "grow-out relative w-80 overflow-hidden rounded-full"
            }
          >
            <img
              className="w-full"
              src="pedigree_mercedes_benz_sl.png"
              alt="Pedigree Mercedes Benz SL"
              loading="lazy"
            />
            <h5 className="absolute left-0 top-5 rounded-full bg-darkyellow py-2 pl-16 pr-3 text-white">
              Mercedes-Benz SL
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedigree;
