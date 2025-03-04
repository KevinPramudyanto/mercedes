import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";
import FlawedImageLeft from "./FlawedImageLeft.jsx";
import FlawedImageRight from "./FlawedImageRight.jsx";

const FlawedImageContainer = () => {
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <div className="mx-auto flex max-w-5xl items-start justify-center px-0 sm:gap-0 sm:px-10 xl:gap-20 xl:px-32">
      {showModal && (
        <Modal src={src} alt={alt} text={text} setShowModal={setShowModal} />
      )}

      <div className="-mr-44 flex flex-col items-center justify-center gap-72 sm:mr-0 sm:translate-x-0 sm:gap-[308px] xl:gap-28">
        {[
          "SL comes with a 'free' IWC timepiece with a stopwatch feature for recording lap times.",
          "The SL 55 can adapt to your personal driving style — all you need to do is adjust these parameters.",
          "The soft-top actually opens and closes quickly - provided the virtual toggle doesn't slip away from your finger, of course.",
        ].map((text, idx) => (
          <FlawedImageLeft
            key={idx}
            idx={idx}
            text={text}
            setSrc={setSrc}
            setAlt={setAlt}
            setText={setText}
            setShowModal={setShowModal}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-72 pt-[292px] sm:relative sm:translate-x-0 sm:gap-[308px] sm:pt-36 xl:gap-28 xl:pt-0">
        {[
          '"Full-fat" AMG models continue to have engines assembled by a single engineer, whose signature adorns the engine cover.',
          "We're not sure if the next SL will be available with a V8 or even an internal combustion engine, so savour this one while it's still around.",
          "The SL's dual-nature enables it to be a cruiser when you're chilling, or a bruiser when you're feeling fiery.",
        ].map((text, idx) => (
          <FlawedImageRight
            key={idx}
            idx={idx}
            text={text}
            setSrc={setSrc}
            setAlt={setAlt}
            setText={setText}
            setShowModal={setShowModal}
          />
        ))}
      </div>
    </div>
  );
};

export default FlawedImageContainer;
