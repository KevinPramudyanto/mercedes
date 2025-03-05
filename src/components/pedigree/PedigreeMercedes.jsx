import { useEffect, useRef, useState } from "react";
import styles from "./Pedigree.module.css";

const PedigreeMercedes = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const animateTriggerRef = useRef(null);

  useEffect(() => {
    // Trigger the animation when the element is scrolled into view

    const handleMercedesScroll = () => {
      if (animateTriggerRef.current) {
        setIsAnimate(
          animateTriggerRef.current.getBoundingClientRect().bottom <=
            window.innerHeight,
        );
      }
    };

    window.addEventListener("scroll", handleMercedesScroll);
    return () => {
      window.removeEventListener("scroll", handleMercedesScroll);
    };
  }, []);

  return (
    <div
      className="mb-14 hidden flex-col-reverse items-center justify-center gap-14 lg:flex lg:flex-row-reverse lg:items-start xl:items-center"
      ref={animateTriggerRef}
    >
      <div className="font-semibold text-darkbrown sm:text-lightbrown lg:w-3/5">
        <p className="mb-10">
          Indeed, grand is a precise term for the new car's size. Compared to
          the previous SL , the latest one is 93mm longer, 38mm wider and 44mm
          taller. For improved stability and passenger space, the wheelbase has
          been stretched by 115mm to 2,700mm.
        </p>
        <p>
          The car looks cleaner, sleeker and meaner than its predecessor. Its
          bonnet seems lower and much wider, yet the designers have wisely
          refrained from giving it a massive grille and gaping air intake.
          Brashness is not part of the SL's DNA.
        </p>
      </div>

      <div
        className={
          (isAnimate ? styles.scaleIn : styles.scaleOut) +
          " relative overflow-hidden rounded-full lg:w-2/5"
        }
      >
        <img
          className="w-full"
          src="/images/pedigree_mercedes_benz_sl.png"
          alt="Pedigree Mercedes Benz SL"
          loading="lazy"
          decoding="async"
        />
        <h5 className="absolute right-[25%] top-[5%] w-full rounded-r-full bg-darkyellow py-3 pr-3 text-right text-sm text-white sm:text-base">
          Mercedes-Benz SL
        </h5>
      </div>
    </div>
  );
};

export default PedigreeMercedes;
