import { useEffect, useRef } from "react";
import styles from "./Common.module.css";

const CommonTitle2 = (props) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleTitle2Scroll = () => {
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
          (1 - progress) * triggerRef.current.offsetWidth,
        );

        triggerRef.current.style.transform = "translateX(" + translate + "px)";
      }
    };

    window.addEventListener("scroll", handleTitle2Scroll);
    return () => {
      window.removeEventListener("scroll", handleTitle2Scroll);
    };
  }, []);

  return (
    <h6
      className={
        styles.title2shape +
        " absolute -top-10 right-0 w-[102%] bg-lightyellow pb-8 pl-24 pr-3 pt-20 text-left font-semibold text-darkbrown opacity-90 sm:w-[88%] sm:pl-40 lg:w-[72%]"
      }
      ref={triggerRef}
    >
      <div className="max-w-4xl">{props.content}</div>
    </h6>
  );
};

export default CommonTitle2;
