import { useEffect, useRef } from "react";
import styles from "./Common.module.css";

const CommonTitle1 = (props) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleTitle1Scroll = () => {
      if (triggerRef.current) {
        let progress =
          2 -
          2 *
            (triggerRef.current.getBoundingClientRect().bottom /
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

    window.addEventListener("scroll", handleTitle1Scroll);
    return () => {
      window.removeEventListener("scroll", handleTitle1Scroll);
    };
  }, []);

  return (
    <h2
      className={
        styles.title1shape +
        " absolute bottom-full left-0 w-[96%] bg-darkyellow py-5 pl-3 pr-24 text-right text-4xl font-semibold text-white opacity-90 sm:pr-40 lg:w-[72%] lg:pr-64"
      }
      ref={triggerRef}
    >
      {props.content}
    </h2>
  );
};

export default CommonTitle1;
