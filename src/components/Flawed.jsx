import { useEffect, useRef, useState } from "react";
import Modal from "./Modal.jsx";

const Flawed = () => {
  const [isChamferRight, setIsChamferRight] = useState(false);
  const [isChamferLeft, setIsChamferLeft] = useState(false);
  const [isMiddle1a, setIsMiddle1a] = useState(false);
  const [isMiddle1b, setIsMiddle1b] = useState(false);
  const [isMiddle2a, setIsMiddle2a] = useState(false);
  const [isMiddle2b, setIsMiddle2b] = useState(false);
  const [isMiddle3a, setIsMiddle3a] = useState(false);
  const [isMiddle3b, setIsMiddle3b] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [text, setText] = useState("");
  const [isMiddle4a, setIsMiddle4a] = useState(false);
  const [isMiddle4b, setIsMiddle4b] = useState(false);
  const chamferRightRef = useRef(null);
  const chamferLeftRef = useRef(null);
  const middle1aRef = useRef(null);
  const middle1bRef = useRef(null);
  const middle2aRef = useRef(null);
  const middle2bRef = useRef(null);
  const middle3aRef = useRef(null);
  const middle3bRef = useRef(null);
  const middle4aRef = useRef(null);
  const middle4bRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (chamferRightRef.current) {
        setIsChamferRight(
          chamferRightRef.current.getBoundingClientRect().bottom <=
            window.innerHeight,
        );
      }
      if (chamferLeftRef.current) {
        setIsChamferLeft(
          chamferLeftRef.current.getBoundingClientRect().bottom <=
            window.innerHeight,
        );
      }
      if (middle1aRef.current) {
        setIsMiddle1a(
          middle1aRef.current.getBoundingClientRect().top +
            middle1aRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle1bRef.current) {
        setIsMiddle1b(
          middle1bRef.current.getBoundingClientRect().top +
            middle1bRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle2aRef.current) {
        setIsMiddle2a(
          middle2aRef.current.getBoundingClientRect().top +
            middle2aRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle2bRef.current) {
        setIsMiddle2b(
          middle2bRef.current.getBoundingClientRect().top +
            middle2bRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle3aRef.current) {
        setIsMiddle3a(
          middle3aRef.current.getBoundingClientRect().top +
            middle3aRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle3bRef.current) {
        setIsMiddle3b(
          middle3bRef.current.getBoundingClientRect().top +
            middle3bRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle4aRef.current) {
        setIsMiddle4a(
          middle4aRef.current.getBoundingClientRect().top +
            middle4aRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (middle4bRef.current) {
        setIsMiddle4b(
          middle4bRef.current.getBoundingClientRect().top +
            middle4bRef.current.offsetHeight / 2 <=
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
    <div className="relative">
      <h2
        className={
          isChamferLeft
            ? "chamfer-left-in absolute -top-6 right-0 w-2/3 bg-lightyellow px-24 py-10 text-left text-darkbrown opacity-90"
            : "chamfer-left-out absolute -top-6 right-0 w-2/3 bg-lightyellow px-24 py-10 text-left text-darkbrown opacity-90"
        }
        ref={chamferLeftRef}
      >
        The SL55 is not perfect. Its ergonomics could be better, its rear-wheel
        steering system further improved, and the boot should be bigger.
      </h2>

      <h2
        className={
          isChamferRight
            ? "chamfer-right-in absolute -top-16 left-0 w-2/3 bg-lightbrown py-3 pl-12 pr-36 text-right text-4xl font-bold text-white opacity-90"
            : "chamfer-right-out absolute -top-16 left-0 w-2/3 bg-lightbrown py-3 pl-12 pr-36 text-right text-4xl font-bold text-white opacity-90"
        }
        ref={chamferRightRef}
      >
        Flawed, yet inforgettable
      </h2>

      <div className="mx-auto max-w-screen-md py-36 font-semibold text-darkbrown">
        <p className="mb-5">
          The SL55 is not perfect. Its ergonomics could be better, its
          rear-wheel steering system further improved, and the boot should be
          bigger. I am puzzled at the lack of soft-closing doors, and really,
          given the price tag, it's outrageous that carbon-ceramic brakes aren't
          standard.
        </p>
        <p className="mb-5">
          The engine's heat also soaks into the cabin once it and the air-con
          are switched off. I excuse this by calling it the 'SL's warm embrace',
          but I am irked because the air-con can't seem to cool the cabin on a
          hot day.
        </p>
        <p className="mb-5">
          Exotic supercars aside, there are not many luxury cars today with the
          SL's heritage and V8 soundtrack. The last car I recall was the Lexus
          LC500 Convertible . But it doesn't feel as solid. It also does not
          have the SL's lineage.
        </p>
        <p className="mb-5">
          Attraction is a funny thing because it can both heighten and dull your
          senses. Seeing and driving the SL makes my pulse race, and at the same
          time, overlook its shortcomings.
        </p>
        <p className="mb-5">
          What matters most, though, is that driving it reminds me that life
          isn't just about work. And in it, I am also freed from
          sustainability's constant clamour. The SL refreshes my soul — how can
          I not love it so?
        </p>
      </div>

      <div className="mx-auto grid max-w-screen-md grid-cols-2 gap-12 px-24">
        {showModal && (
          <Modal src={src} alt={alt} text={text} setShowModal={setShowModal} />
        )}
        <img
          className={
            isMiddle1a
              ? "flawed-left-in rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
              : "flawed-left-out rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
          }
          ref={middle1aRef}
          src="Flawed_left1.png"
          alt="Flawed Left 1"
          onClick={() => {
            setSrc("Flawed_left1.png");
            setAlt("Flawed Left 1");
            setText(
              "SL comes with a 'free' IWC timepiece with a stopwatch feature for recording lap times.",
            );
            setShowModal(true);
          }}
        />
        <img
          className={
            isMiddle1b
              ? "flawed-right-in rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
              : "flawed-right-out rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
          }
          ref={middle1bRef}
          src="Flawed_right1.png"
          alt="Flawed Right 1"
          onClick={() => {
            setSrc("Flawed_right1.png");
            setAlt("Flawed Right 1");
            setText(
              '"Full-fat" AMG models continue to have engines assembled by a single engineer, whose signature adorns the engine cover.',
            );
            setShowModal(true);
          }}
        />
        <img
          className={
            isMiddle2a
              ? "flawed-left-in rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
              : "flawed-left-out rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
          }
          ref={middle2aRef}
          src="Flawed_left2.png"
          alt="Flawed Left 2"
          onClick={() => {
            setSrc("Flawed_left2.png");
            setAlt("Flawed Left 2");
            setText(
              "The SL 55 can adapt to your personal driving style — all you need to do is adjust these parameters.",
            );
            setShowModal(true);
          }}
        />
        <img
          className={
            isMiddle2b
              ? "flawed-right-in rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
              : "flawed-right-out rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
          }
          ref={middle2bRef}
          src="Flawed_right2.png"
          alt="Flawed Right 2"
          onClick={() => {
            setSrc("Flawed_right2.png");
            setAlt("Flawed Right 2");
            setText(
              "We're not sure if the next SL will be available with a V8 or even an internal combustion engine, so savour this one while it's still around.",
            );
            setShowModal(true);
          }}
        />
        <img
          className={
            isMiddle3a
              ? "flawed-left-in rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
              : "flawed-left-out rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
          }
          ref={middle3aRef}
          src="Flawed_left3.png"
          alt="Flawed Left 3"
          onClick={() => {
            setSrc("Flawed_left3.png");
            setAlt("Flawed Left 3");
            setText(
              "The soft-top actually opens and closes quickly - provided the virtual toggle doesn't slip away from your finger, of course.",
            );
            setShowModal(true);
          }}
        />
        <img
          className={
            isMiddle3b
              ? "flawed-right-in rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
              : "flawed-right-out rounded-full border-8 border-white hover:cursor-pointer hover:border-darkyellow"
          }
          ref={middle3bRef}
          src="Flawed_right3.png"
          alt="Flawed Right 3"
          onClick={() => {
            setSrc("Flawed_right3.png");
            setAlt("Flawed Right 3");
            setText(
              "The SL's dual-nature enables it to be a cruiser when you're chilling, or a bruiser when you're feeling fiery.",
            );
            setShowModal(true);
          }}
        />
      </div>

      <div className="my-12 grid grid-cols-2 gap-3">
        <div
          className={
            isMiddle4a
              ? "flawed-left-in grid grid-cols-2 gap-3 rounded-r-full bg-lightyellow"
              : "flawed-left-out grid grid-cols-2 gap-3 rounded-r-full bg-lightyellow"
          }
          ref={middle4aRef}
        >
          <img
            className=""
            src="footer_left_what_we_like.png"
            alt="Footer Left What We Like"
          />
          <div className="flex items-center justify-start">
            <div className="flex flex-col items-end justify-center">
              <h3 className="mb-3 text-3xl font-semibold text-white">
                What We Like
              </h3>
              {[
                "Rapid Performance",
                "Loud V8 and throaty exhaust",
                "Pliant ride",
                "Cruising ability",
                "Might be the last SL with a V8",
                "Still feels special",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3"
                >
                  <h6 className="text-darkbrown">{item}</h6>
                  <div className="h-3 w-3 rounded-full bg-darkyellow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={
            isMiddle4b
              ? "flawed-right-in grid grid-cols-2 gap-3 rounded-l-full bg-lightyellow"
              : "flawed-right-out grid grid-cols-2 gap-3 rounded-l-full bg-lightyellow"
          }
          ref={middle4bRef}
        >
          <div className="flex items-center justify-end">
            <div className="flex flex-col items-start justify-center">
              <h3 className="mb-3 text-3xl font-semibold text-white">
                What We Dislike
              </h3>
              {[
                "Ridiculous $1 million price tag",
                "Non-existent rear-wheel",
                "steering",
                "No soft-closing doors",
                "Seriously overpriced",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="h-3 w-3 rounded-full bg-darkyellow"></div>
                  <h6 className="text-darkbrown">{item}</h6>
                </div>
              ))}
            </div>
          </div>
          <img
            className=""
            src="footer_right_what_we_dislike.png"
            alt="Footer Right What We Dislike"
          />
        </div>
      </div>

      <img
        className="m-auto"
        src="bottom_advertisment.png"
        alt="Bottom Advertisment"
      />

      <div className="mt-12 bg-lightyellow px-8">
        <div className="bg-darkyellow px-8">
          <div className="bg-lightbrown px-8">
            <div className="bg-darkbrown px-8 py-8">
              <img
                className="m-auto"
                src="asiaone_footer_desktop.png"
                alt="Asiaone Footer Desktop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flawed;
