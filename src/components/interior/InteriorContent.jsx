import { useEffect, useRef, useState } from "react";
import styles from "./Interior.module.css";

const InteriorContent = (props) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const animateTriggerRef = useRef(null);

  useEffect(() => {
    const handleInteriorContentScroll = () => {
      if (animateTriggerRef.current) {
        setIsAnimate(
          animateTriggerRef.current.getBoundingClientRect().top +
            animateTriggerRef.current.offsetHeight / 2 <=
            window.innerHeight / 2,
        );
      }
    };

    window.addEventListener("scroll", handleInteriorContentScroll);
    return () => {
      window.removeEventListener("scroll", handleInteriorContentScroll);
    };
  }, []);

  return (
    <div className="relative h-screen" ref={animateTriggerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-6 bg-black/80 px-8 py-8 text-sm text-white sm:mx-8 sm:px-10 sm:py-10 sm:text-base lg:mx-20 lg:px-16 lg:py-16">
          <p className="mb-5 sm:mb-8">{props.content1}</p>
          <p>{props.content2}</p>
        </div>
      </div>

      {isAnimate && (
        <div
          className={
            styles.pointOpacityIn +
            " absolute left-1/2 top-1/2 z-30 flex h-6 w-6 items-center justify-center rounded-full bg-white"
          }
        >
          <div className="flex flex-col items-center justify-start">
            <div
              className={
                styles.lineOpacityIn +
                " absolute flex h-16 origin-top flex-col items-center justify-end border-x-4 border-dashed border-white"
              }
            >
              <div
                className={
                  styles.lineRotateIn +
                  " absolute flex h-40 origin-bottom flex-col items-center justify-start border-x-4 border-dashed border-white sm:h-52"
                }
              >
                <div className="flex items-center justify-center">
                  <div
                    className={
                      styles.circleRotateIn +
                      " absolute flex h-56 w-56 items-center justify-center rounded-full bg-lightgray p-6 text-center text-xs text-white sm:h-64 sm:w-64 sm:p-8 sm:text-sm"
                    }
                  >
                    <div className="flex flex-col items-center justify-center gap-4 sm:gap-5">
                      <p>{props.content3}</p>
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
  );
};

export default InteriorContent;
