import { useEffect, useRef, useState } from "react";

const Interior = () => {
  const [isChamferRight, setIsChamferRight] = useState(false);
  const [isChamferLeft, setIsChamferLeft] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const chamferRightRef = useRef(null);
  const chamferLeftRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (chamferRightRef.current) {
        setIsChamferRight(
          chamferRightRef.current.getBoundingClientRect().top +
            chamferRightRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (chamferLeftRef.current) {
        setIsChamferLeft(
          chamferLeftRef.current.getBoundingClientRect().top +
            chamferLeftRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
      }
      if (topRef.current) {
        setIsTop(
          topRef.current.getBoundingClientRect().top +
            topRef.current.offsetHeight / 2 <=
            window.innerHeight / 2,
        );
      }
      if (bottomRef.current) {
        setIsBottom(
          bottomRef.current.getBoundingClientRect().top +
            bottomRef.current.offsetHeight / 2 <=
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
        <div className="sticky top-0 flex items-center justify-center">
          <img
            className="h-screen w-screen object-cover"
            src="parallax_interior1.png"
            alt="Parallax Interior 1"
            loading="lazy"
          />
          <h6
            className={
              isChamferLeft
                ? "chamfer-left-in absolute -top-6 right-0 w-2/3 bg-lightyellow px-24 py-8 text-left text-darkbrown opacity-90"
                : "chamfer-left-out absolute -top-6 right-0 w-2/3 bg-lightyellow px-24 py-8 text-left text-darkbrown opacity-90"
            }
            ref={chamferLeftRef}
          >
            Modern Mercedes models have interiors designed to elicit wows from
            the moment you lay eyes on the cockpit, but the SL is going with a
            'hyperanalogue' approach.
          </h6>
          <h3
            className={
              isChamferRight
                ? "chamfer-right-in absolute -top-12 left-0 w-2/3 bg-lightbrown py-2 pl-12 pr-36 text-right text-3xl font-bold text-white opacity-90"
                : "chamfer-right-out absolute -top-12 left-0 w-2/3 bg-lightbrown py-2 pl-12 pr-36 text-right text-3xl font-bold text-white opacity-90"
            }
            ref={chamferRightRef}
          >
            Different interior approach
          </h3>

          <div
            className={
              isTop
                ? "interior-point-opacity-in absolute flex h-5 w-5 items-center justify-center rounded-full bg-white"
                : "interior-point-opacity-out absolute flex h-5 w-5 items-center justify-center rounded-full bg-white"
            }
          >
            <div className="flex items-center justify-start">
              <div
                className={
                  isTop
                    ? "interior-line-opacity-in absolute flex w-12 origin-left items-center justify-end border-y-4 border-dashed border-white"
                    : "interior-line-opacity-out absolute flex w-12 origin-left items-center justify-end border-y-4 border-dashed border-white"
                }
              >
                <div
                  className={
                    isTop
                      ? "interior-line-rotate-in absolute flex w-48 origin-right items-center justify-start border-y-4 border-dashed border-white"
                      : "interior-line-rotate-out absolute flex w-48 origin-right items-center justify-start border-y-4 border-dashed border-white"
                  }
                >
                  <div className="flex items-center justify-center">
                    <div
                      className={
                        isTop
                          ? "interior-circle-rotate-in absolute flex h-72 w-72 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
                          : "interior-circle-rotate-out absolute flex h-72 w-72 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
                      }
                    >
                      <div className="flex flex-col items-center justify-center gap-6">
                        <p>
                          Snazzy cockpit features mood lighting and tablet-like
                          infotainment screen, but the heat from the engine can
                          make occupants uncomfortable.
                        </p>
                        <p>PHOTO: sgCarMart</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen" ref={topRef}>
          <div className="h-24"></div>
          <div className="mx-auto max-w-screen-md bg-black p-8 text-white opacity-80">
            <p className="mb-3">
              Yes, there are still screens. But instead of the usual MBUX
              (Mercedes-Benz User Experience) setup, the 12.3-inch instrument
              panel is housed under a cowl, reflecting the SL's sporty roots.
            </p>
            <p className="mb-3">
              Dominating the dashboard is the tablet-like 11.9-inch infotainment
              display, whose tilt angle can be adjusted from 12 degrees to 32
              degrees at a touch of a button. It helps minimise screen glare
              when driving with the top down.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="sticky top-0 flex items-center justify-center">
          <img
            className="h-screen w-screen object-cover"
            src="parallax_interior2.png"
            alt="Parallax Interior 2"
            loading="lazy"
          />
          <div
            className={
              isBottom
                ? "interior-point-opacity-in absolute flex h-5 w-5 items-center justify-center rounded-full bg-white"
                : "interior-point-opacity-out absolute flex h-5 w-5 items-center justify-center rounded-full bg-white"
            }
          >
            <div className="flex items-center justify-start">
              <div
                className={
                  isBottom
                    ? "interior-line-opacity-in absolute flex w-12 origin-left items-center justify-end border-y-4 border-dashed border-white"
                    : "interior-line-opacity-out absolute flex w-12 origin-left items-center justify-end border-y-4 border-dashed border-white"
                }
              >
                <div
                  className={
                    isBottom
                      ? "interior-line-rotate-in absolute flex w-48 origin-right items-center justify-start border-y-4 border-dashed border-white"
                      : "interior-line-rotate-out absolute flex w-48 origin-right items-center justify-start border-y-4 border-dashed border-white"
                  }
                >
                  <div className="flex items-center justify-center">
                    <div
                      className={
                        isBottom
                          ? "interior-circle-rotate-in absolute flex h-72 w-72 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
                          : "interior-circle-rotate-out absolute flex h-72 w-72 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
                      }
                    >
                      <div className="flex flex-col items-center justify-center gap-6">
                        <p>
                          It looks uncomfortable from this angle, but Mercedes
                          says the backseats can accommodate passengers up to
                          1.5m tall.
                        </p>
                        <p>PHOTO: sgCarMart</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen" ref={bottomRef}>
          <div className="h-24"></div>
          <div className="mx-auto max-w-screen-md bg-black p-8 text-white opacity-80">
            <p className="mb-3">
              For the first time in the SL's history, the car has rear seats.
              They can supposedly accommodate occupants up to 1.5m tall, but the
              backrests are so upright they seem like they are canted forward.
            </p>
            <p className="mb-3">
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
