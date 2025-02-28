import { useEffect, useRef, useState } from "react";

const Interior = () => {
  const [isChamferRight, setIsChamferRight] = useState(false);
  const [isChamferLeft, setIsChamferLeft] = useState(false);
  const [isStickyTop, setIsStickyTop] = useState(false);
  const [isStickyBottom, setIsStickyBottom] = useState(false);
  const chamferRightRef = useRef(null);
  const chamferLeftRef = useRef(null);
  const stickyTopRef = useRef(null);
  const stickyBottomRef = useRef(null);

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
      if (stickyTopRef.current) {
        setIsStickyTop(
          stickyTopRef.current.getBoundingClientRect().top +
            stickyTopRef.current.offsetHeight / 2 <=
            window.innerHeight / 2,
        );
      }
      if (stickyBottomRef.current) {
        setIsStickyBottom(
          stickyBottomRef.current.getBoundingClientRect().top +
            stickyBottomRef.current.offsetHeight / 2 <=
            window.innerHeight / 2,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className={
            isStickyTop
              ? "absolute top-[100vh] flex items-center justify-center"
              : "sticky top-0 flex items-center justify-center"
          }
        >
          <img
            className="h-screen w-screen object-cover"
            src="parallax_interior1.png"
            alt="Parallax Interior 1"
          />
          <h2
            className={
              isChamferLeft
                ? "chamfer-left-in absolute -top-6 right-0 w-2/3 bg-lightyellow px-24 py-10 text-left text-darkbrown opacity-90"
                : "chamfer-left-out absolute -top-6 right-0 w-2/3 bg-lightyellow px-24 py-10 text-left text-darkbrown opacity-90"
            }
            ref={chamferLeftRef}
          >
            Modern Mercedes models have interiors designed to elicit wows from
            the moment you lay eyes on the cockpit, but the SL is going with a
            'hyperanalogue' approach.
          </h2>
          <h2
            className={
              isChamferRight
                ? "chamfer-right-in absolute -top-16 left-0 w-2/3 bg-lightbrown py-3 pl-12 pr-36 text-right text-4xl font-bold text-white opacity-90"
                : "chamfer-right-out absolute -top-16 left-0 w-2/3 bg-lightbrown py-3 pl-12 pr-36 text-right text-4xl font-bold text-white opacity-90"
            }
            ref={chamferRightRef}
          >
            Different interior approach
          </h2>
        </div>

        {isStickyTop && <div className="h-screen"></div>}

        <div
          className="flex h-screen items-center justify-center"
          ref={stickyTopRef}
        >
          <div className="max-w-screen-md bg-black p-10 text-white opacity-80">
            <p className="mb-5">
              Yes, there are still screens. But instead of the usual MBUX
              (Mercedes-Benz User Experience) setup, the 12.3-inch instrument
              panel is housed under a cowl, reflecting the SL's sporty roots.
            </p>
            <p className="mb-5">
              Dominating the dashboard is the tablet-like 11.9-inch infotainment
              display, whose tilt angle can be adjusted from 12 degrees to 32
              degrees at a touch of a button. It helps minimise screen glare
              when driving with the top down.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className={
            isStickyBottom
              ? "absolute top-[100vh] flex items-center justify-center"
              : "sticky top-0 flex items-center justify-center"
          }
        >
          <img
            className="h-screen w-screen object-cover"
            src="parallax_interior2.png"
            alt="Parallax Interior 2"
          />
        </div>

        {isStickyBottom && <div className="h-screen"></div>}

        <div
          className="flex h-screen items-center justify-center"
          ref={stickyBottomRef}
        >
          <div className="max-w-screen-md bg-black p-10 text-white opacity-80">
            <p className="mb-5">
              For the first time in the SL's history, the car has rear seats.
              They can supposedly accommodate occupants up to 1.5m tall, but the
              backrests are so upright they seem like they are canted forward.
            </p>
            <p className="mb-5">
              Also, strangely absent on the test unit are soft-close doors and
              'pushers' that bring the seat belts closer to the front
              passengers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interior;
