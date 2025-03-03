import { useEffect, useRef, useState } from "react";
import FlawedGreyCircleLeft from "./FlawedGreyCircleLeft.jsx";
import FlawedGreyCircleRight from "./FlawedGreyCircleRight.jsx";
import styles from "./Flawed.module.css";

const FlawedImageRight = (props) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleImageRightScroll = () => {
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
        const translate = Math.floor(((1 - progress) * window.innerWidth) / 2);
        triggerRef.current.style.transform = "translateX(" + translate + "px)";

        setIsAnimate(
          triggerRef.current.getBoundingClientRect().top <=
            window.innerHeight / 2,
        );
      }
    };

    window.addEventListener("scroll", handleImageRightScroll);
    return () => {
      window.removeEventListener("scroll", handleImageRightScroll);
    };
  }, []);

  return (
    <div key={props.idx} className="flex items-center justify-center">
      <img
        className="rounded-full border-8 border-neutral-200 hover:cursor-pointer hover:border-darkyellow"
        ref={triggerRef}
        src={"Flawed_right" + (props.idx + 1) + ".png"}
        alt={"Flawed Right " + (props.idx + 1)}
        loading="lazy"
        onClick={() => {
          props.setSrc("Flawed_right" + (props.idx + 1) + ".png");
          props.setAlt("Flawed Right " + (props.idx + 1));
          props.setText(props.text);
          props.setShowModal(true);
        }}
      />
      {isAnimate && (
        <div
          className={
            styles.pointOpacityIn +
            " absolute flex h-6 w-6 items-center justify-center rounded-full bg-white xl:hidden"
          }
        >
          <FlawedGreyCircleLeft text={props.text} />
        </div>
      )}
      {isAnimate && (
        <div
          className={
            styles.pointOpacityIn +
            " absolute hidden h-6 w-6 items-center justify-center rounded-full bg-white xl:flex"
          }
        >
          <FlawedGreyCircleRight text={props.text} />
        </div>
      )}
    </div>
  );
};

export default FlawedImageRight;
