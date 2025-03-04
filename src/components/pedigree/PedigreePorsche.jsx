import { useEffect, useRef, useState } from "react";
import styles from "./Pedigree.module.css";

const PedigreePorsche = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const animateTriggerRef = useRef(null);

  useEffect(() => {
    const handlePorscheScroll = () => {
      if (animateTriggerRef.current) {
        setIsAnimate(
          animateTriggerRef.current.getBoundingClientRect().bottom <=
            window.innerHeight,
        );
      }
    };

    window.addEventListener("scroll", handlePorscheScroll);
    return () => {
      window.removeEventListener("scroll", handlePorscheScroll);
    };
  }, []);

  return (
    <div
      className="mb-14 flex flex-col items-center justify-center gap-14 lg:flex-row lg:items-start xl:items-center"
      ref={animateTriggerRef}
    >
      <div className="font-semibold text-darkbrown sm:text-lightbrown lg:w-3/5">
        <p className="mb-10">
          When one thinks of a German sports car with heritage, chances are the
          Porsche 911 , which was first launched in 1963, immediately pops into
          mind.
        </p>
        <p className="mb-10">
          There's another model with an even longer history though: It's the
          Mercedes-Benz SL, which first debuted as a racecar in 1952.
        </p>
        <p>
          The SL has racecar heritage, but over seven decades, its sportiness
          was blended with cruising ability. SL, which stands for 'sport-light',
          continually evolved into a topless grand tourer.
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
          src="/images/pedigree_porsche.png"
          alt="Pedigree Porsche"
          loading="lazy"
        />
        <h5 className="absolute left-[30%] top-[5%] w-full rounded-l-full bg-darkyellow py-3 pl-6 text-white lg:pl-9">
          Porsche 911
        </h5>
      </div>
    </div>
  );
};

export default PedigreePorsche;
