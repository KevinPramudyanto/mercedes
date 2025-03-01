import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const [isTop, setIsTop] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [carousel, setCarousel] = useState(1);
  const rollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rollRef.current) {
        setIsTop(
          rollRef.current.getBoundingClientRect().top +
            rollRef.current.offsetHeight / 2 <=
            window.innerHeight,
        );
        setIsBottom(
          rollRef.current.getBoundingClientRect().top +
            rollRef.current.offsetHeight / 2 <=
            0,
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden bg-darkgray p-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-5 border-b-2 border-b-lightyellow pb-2 text-xl font-bold">
          <h5>
            <span className="text-lightbrown">TEXT </span>
            <span className="text-darkyellow">JEREMY CHUA</span>
          </h5>
          <h5>
            <span className="text-lightbrown">DESIGN </span>
            <span className="text-darkyellow">CJ.FOO</span>
          </h5>
        </div>
        <h6 className="text-lightyellow">
          PUBLISHED ON 03 APRIL 2023, 3:37 PM
        </h6>
      </div>

      <div className="mx-auto mb-32 mt-20 max-w-screen-md text-white">
        <p className="mb-5">
          The iconic SL has been transformed from 'super-light' to 'superb
          luxurious', and in SL55 form, packs plenty of firepower, too.
        </p>
        <p className="mb-5">
          Electric cars, EVs, zero emissions, sustainability, eco-friendliness.
          We're constantly bombarded with terms like these that we're literally
          drowning in eco-consciousness. Internal combustion engines and fossil
          fuels are bad and must be phased out.
        </p>
        <p className="mb-5">
          The intentions are good, but they are becoming suffocating.
          Ever-tightening emission regulations have quietened the voices of
          high-performance machines. Driving and admiring 'traditional' sports
          cars feels like a crime. But every now and then, a car like the
          Mercedes-Benz SL comes along.
        </p>
        <p className="mb-5">
          Yes, it goes fast, attracts attention, and takes a big chunk out of
          your savings. In SL55 form, it is the first brand-new SL in Singapore
          that costs over $1 million ($1,002,888 to be exact), its price
          inflated by the heftier taxes levied on super-luxury cars.
        </p>
        <p className="mb-5">
          Price tag and vehicle dynamics are just the tip of the iceberg,
          though. It is no ordinary sports car, for the SL's true purpose is to
          refresh a petrolhead's soul.
        </p>
      </div>

      <div ref={rollRef}>
        <div
          className={
            isTop && !isBottom
              ? "carousel-roll-left-in"
              : "carousel-roll-right-out"
          }
        >
          <div className="flex items-center justify-center">
            <img
              className="hover:cursor-pointer"
              src="carousel-arrow-left.svg"
              alt="Carousel Arrow Left"
              loading="lazy"
              onClick={() => setCarousel((prev) => (prev === 1 ? 4 : prev - 1))}
            />
            <img
              className=""
              src={"carousel-" + carousel + ".png"}
              alt={"Carousel " + carousel}
              loading="lazy"
            />
            <img
              className="hover:cursor-pointer"
              src="carousel-arrow-right.svg"
              alt="Carousel Arrow Right"
              loading="lazy"
              onClick={() => setCarousel((prev) => (prev === 4 ? 1 : prev + 1))}
            />
            <div
              className={
                isTop && !isBottom
                  ? "carousel-point-opacity-in absolute flex h-5 w-5 -translate-y-10 translate-x-28 items-center justify-center rounded-full bg-white"
                  : "carousel-point-opacity-out absolute flex h-5 w-5 -translate-y-10 translate-x-28 items-center justify-center rounded-full bg-white"
              }
            >
              <div className="flex items-center justify-start">
                <div
                  className={
                    isTop && !isBottom
                      ? "carousel-line-opacity-in absolute flex w-36 origin-left items-center justify-end border-y-4 border-dashed border-white"
                      : "carousel-line-opacity-out absolute flex w-36 origin-left items-center justify-end border-y-4 border-dashed border-white"
                  }
                >
                  <div
                    className={
                      isTop && !isBottom
                        ? "carousel-line-rotate-in absolute flex w-64 origin-right items-center justify-start border-y-4 border-dashed border-white"
                        : "carousel-line-rotate-out absolute flex w-64 origin-right items-center justify-start border-y-4 border-dashed border-white"
                    }
                  >
                    <div className="flex items-center justify-center">
                      <div
                        className={
                          isTop && !isBottom
                            ? "carousel-circle-rotate-in absolute flex h-64 w-64 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
                            : "carousel-circle-rotate-out absolute flex h-64 w-64 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
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
                              ][carousel - 1]
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
          </div>
          <div className="m-3 flex items-center justify-center gap-3">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={
                  num === carousel
                    ? "h-3 w-3 rounded-full bg-lightyellow"
                    : "h-3 w-3 rounded-full bg-white hover:cursor-pointer hover:bg-lightyellow"
                }
                onClick={() => setCarousel(num)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
