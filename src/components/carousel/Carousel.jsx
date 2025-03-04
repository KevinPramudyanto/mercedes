import CarouselRoll from "./CarouselRoll.jsx";

const Carousel = () => {
  return (
    <section className="overflow-hidden bg-darkgray">
      <div className="mx-2 my-14 flex flex-col items-center justify-center gap-4 sm:my-20">
        <div className="flex flex-wrap items-center justify-center gap-6 border-b-2 border-b-lightbrown pb-4">
          <h5 className="text-base font-bold sm:text-xl">
            <span className="text-darkbrown">TEXT </span>
            <span className="text-darkyellow">JEREMY CHUA</span>
          </h5>
          <h5 className="text-base font-bold sm:text-xl">
            <span className="text-darkbrown">DESIGN </span>
            <span className="text-darkyellow">CJ. FOO</span>
          </h5>
        </div>
        <h6 className="text-center text-sm font-bold text-lightbrown sm:text-base">
          PUBLISHED ON 03 APRIL 2023, 3:37 PM
        </h6>
      </div>

      <div className="mx-auto mb-40 max-w-6xl px-16 text-white">
        <p className="mb-9">
          The iconic SL has been transformed from 'super-light' to 'superb
          luxurious', and in SL55 form, packs plenty of firepower, too.
        </p>
        <p className="mb-9">
          Electric cars, EVs, zero emissions, sustainability, eco-friendliness.
          We're constantly bombarded with terms like these that we're literally
          drowning in eco-consciousness. Internal combustion engines and fossil
          fuels are bad and must be phased out.
        </p>
        <p className="mb-9">
          The intentions are good, but they are becoming suffocating.
          Ever-tightening emission regulations have quietened the voices of
          high-performance machines. Driving and admiring 'traditional' sports
          cars feels like a crime. But every now and then, a car like the
          Mercedes-Benz SL comes along.
        </p>
        <p className="mb-9">
          Yes, it goes fast, attracts attention, and takes a big chunk out of
          your savings. In SL55 form, it is the first brand-new SL in Singapore
          that costs over $1 million ($1,002,888 to be exact), its price
          inflated by the heftier taxes levied on super-luxury cars.
        </p>
        <p>
          Price tag and vehicle dynamics are just the tip of the iceberg,
          though. It is no ordinary sports car, for the SL's true purpose is to
          refresh a petrolhead's soul.
        </p>
      </div>

      <CarouselRoll />
    </section>
  );
};

export default Carousel;
