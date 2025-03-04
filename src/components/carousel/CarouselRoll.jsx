import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

const CarouselRoll = () => {
  const [isAnimateIn, setIsAnimateIn] = useState(false);
  const [isAnimateOut, setIsAnimateOut] = useState(false);
  const [imageNum, setImageNum] = useState(1);
  const animateTriggerRef = useRef(null);

  useEffect(() => {
    const handleCarouselScroll = () => {
      if (animateTriggerRef.current) {
        setIsAnimateIn(
          animateTriggerRef.current.getBoundingClientRect().top +
            animateTriggerRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
        setIsAnimateOut(
          animateTriggerRef.current.getBoundingClientRect().top +
            animateTriggerRef.current.offsetHeight / 2 <=
            0,
        );
      }
    };

    window.addEventListener("scroll", handleCarouselScroll);
    return () => {
      window.removeEventListener("scroll", handleCarouselScroll);
    };
  }, []);

  return (
    <div
      className="mb-36 flex items-center justify-center px-10 sm:mb-20"
      ref={animateTriggerRef}
    >
      <div
        className={
          isAnimateIn && !isAnimateOut ? styles.rollIn : styles.rollOut
        }
      >
        <div className="relative flex flex-col items-center justify-center rounded-full sm:bg-darkyellow">
          <div className="h-10"></div>

          <div className="flex items-center justify-center gap-4">
            <img
              className="hover:cursor-pointer"
              src="/images/carousel-arrow-left.svg"
              alt="Carousel Arrow Left"
              loading="lazy"
              onClick={() => setImageNum((prev) => (prev === 1 ? 4 : prev - 1))}
            />
            <img
              src={"/images/carousel-" + imageNum + ".png"}
              alt={"Carousel " + imageNum}
              loading="lazy"
            />
            <img
              className="hover:cursor-pointer"
              src="/images/carousel-arrow-right.svg"
              alt="Carousel Arrow Right"
              loading="lazy"
              onClick={() => setImageNum((prev) => (prev === 4 ? 1 : prev + 1))}
            />
          </div>

          <div className="m-3 flex items-center justify-center gap-3">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={
                  num === imageNum
                    ? "h-4 w-4 rounded-full bg-lightyellow"
                    : "h-3 w-3 rounded-full bg-white hover:cursor-pointer hover:bg-lightyellow"
                }
                onClick={() => setImageNum(num)}
              ></div>
            ))}
          </div>

          {isAnimateIn && !isAnimateOut && (
            <div
              className={
                styles.pointOpacityIn +
                " absolute flex h-6 w-6 -translate-x-24 -translate-y-8 items-center justify-center rounded-full bg-white sm:translate-x-0 sm:translate-y-0"
              }
            >
              <div className="flex flex-col items-center justify-end sm:flex-row sm:justify-start">
                <div
                  className={
                    styles.lineOpacityIn +
                    " absolute flex h-36 w-0 origin-bottom flex-col items-center justify-start border-x-4 border-dashed border-white sm:h-0 sm:w-20 sm:origin-left sm:flex-row sm:justify-end sm:border-y-4 lg:w-32"
                  }
                >
                  <div
                    className={
                      styles.lineRotateIn +
                      " absolute flex h-36 w-0 origin-top flex-col items-center justify-end border-x-4 border-dashed border-white sm:h-0 sm:w-60 sm:origin-right sm:flex-row sm:justify-start sm:border-y-4 lg:w-72"
                    }
                  >
                    <div className="flex items-center justify-center">
                      <div
                        className={
                          styles.circleRotateIn +
                          " absolute flex h-60 w-60 items-center justify-center rounded-full bg-lightgray p-7 text-center text-sm text-white sm:h-80 sm:w-80 sm:p-16 sm:text-base"
                        }
                      >
                        <div className="flex flex-col items-center justify-center gap-6">
                          <p>
                            {
                              [
                                "The wide bonnet and low, aggressive stance hints at the SL's capabilities.",
                                "You won't always see the quad exhaust tips, but you'll definitely hear their symphony.",
                                "Red brake callipers draw your attention to the large cross-drilled rotors peering out behind the 21-inch wheels.",
                                "The SL's dual-nature enables it to be a cruiser when you're chilling, or a bruiser when you're feeling fiery.",
                              ][imageNum - 1]
                            }
                          </p>
                          <p>PHOTO: sgCarMart</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselRoll;
