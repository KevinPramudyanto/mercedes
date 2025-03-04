import { useEffect, useRef, useState } from "react";
import FlawedGreyCircleLeft from "./FlawedGreyCircleLeft.jsx";
import FlawedGreyCircleRight from "./FlawedGreyCircleRight.jsx";
import styles from "./Flawed.module.css";

const FlawedImageLeft = (props) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleImageLeftScroll = () => {
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
        const translate = Math.floor(((progress - 1) * window.innerWidth) / 2);
        triggerRef.current.style.transform = "translateX(" + translate + "px)";

        setIsAnimate(progress >= 1);
      }
    };

    window.addEventListener("scroll", handleImageLeftScroll);
    return () => {
      window.removeEventListener("scroll", handleImageLeftScroll);
    };
  }, []);

  return (
    <div key={props.idx} className="flex items-center justify-center">
      <img
        className="rounded-full border-8 border-neutral-200 hover:cursor-pointer hover:border-darkyellow"
        ref={triggerRef}
        src={"Flawed_left" + (props.idx + 1) + ".png"}
        alt={"Flawed Left " + (props.idx + 1)}
        loading="lazy"
        onClick={() => {
          props.setSrc("Flawed_left" + (props.idx + 1) + ".png");
          props.setAlt("Flawed Left " + (props.idx + 1));
          props.setText(props.text);
          props.setShowModal(true);
        }}
      />
      {isAnimate && (
        <div
          className={
            styles.pointOpacityIn +
            " absolute hidden h-6 w-6 items-center justify-center rounded-full bg-white xl:flex"
          }
        >
          <FlawedGreyCircleLeft text={props.text} />
        </div>
      )}
      {isAnimate && (
        <div
          className={
            styles.pointOpacityIn +
            " absolute flex h-6 w-6 items-center justify-center rounded-full bg-white xl:hidden"
          }
        >
          <FlawedGreyCircleRight text={props.text} />
        </div>
      )}
    </div>
  );
};

export default FlawedImageLeft;
