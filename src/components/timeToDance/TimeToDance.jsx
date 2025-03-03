import { useEffect, useRef } from "react";

const TimeToDance = () => {
  const startRef = useRef(null);
  const progressCarRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleProgressScroll = () => {
      if (
        startRef.current &&
        progressCarRef.current &&
        progressBarRef.current
      ) {
        let progress =
          (window.innerHeight / 2 -
            startRef.current.getBoundingClientRect().top) /
          startRef.current.offsetHeight;
        if (progress < 0) {
          progress = 0;
        } else if (progress > 1) {
          progress = 1;
        }

        const translate = Math.floor(
          progress * (window.innerWidth - progressCarRef.current.offsetWidth),
        );

        progressCarRef.current.style.transform =
          "translateX(" + translate + "px)";
        progressBarRef.current.style.width =
          translate + progressCarRef.current.offsetWidth / 4 + "px";
      }
    };

    window.addEventListener("scroll", handleProgressScroll);
    return () => {
      window.removeEventListener("scroll", handleProgressScroll);
    };
  }, []);

  return (
    <section className="bg-darkgray pt-24 sm:pt-16 lg:pt-32">
      <div className="mx-auto max-w-6xl" ref={startRef}>
        <h2 className="mb-10 px-16 text-3xl font-bold text-lightyellow sm:px-24 sm:text-4xl lg:mb-16 lg:px-32">
          TIME TO DANCE
        </h2>

        <div className="px-16 text-white sm:px-24 lg:px-32">
          <p className="mb-10">
            Are you tired of hearing about how silent EVs are? Do you crave
            drama and emotion? Then you must want a car like the SL55, whose
            powertrain is unashamedly unadulterated.
          </p>
          <p className="mb-10">
            Thumb the starter button and the twin-turbocharged, 3,982cc V8 comes
            alive with a deep bark. Petrolheads within earshot can immediately
            tell that an eight-cylinder was just fired up. There's no mistaking
            this for any other type of engine.
          </p>
          <p className="mb-10">
            The 4.0-litre unit kicks out 476bhp and 700Nm of torque, the latter
            figure from just 2,250rpm. Power is transferred to both axles
            through the 4Matic+ system with fully variable torque distribution,
            making this the first all-wheel drive SL.
          </p>
          <p className="mb-10">
            The most ideal mode for the SL55 is Individual, so you can customise
            attributes such as the engine, dampers, traction control, and
            exhaust. Setting the first two to "Sport" and the other two to
            "Advanced" and "Powerful" is about right. I also left the nine-speed
            automatic gearbox in manual mode.
          </p>
          <p className="mb-10">
            Right off the bat, the V8 eagerly shows how tractable and rev-happy
            it is. The engine, along with the exhaust, sounds glorious in second
            gear as the tachometer needle swings towards 7,000rpm. It gets real
            addictive real quick.
          </p>
          <p className="mb-10">
            The SL might be a sleek grand tourer, but it sounds like an American
            muscle car when driven hard. Emission regulations are calling for
            the internal combustion engine to be phased out, but this V8 is
            giving them two middle fingers while yelling back, 'Hell no, I won't
            go!'
          </p>
          <p>
            Even while idling, the V8's pulsing is palpable. Depending how you
            flex your right foot, the exhaust will blare anything from low and
            throaty notes to a full-on throat-clearing roar. Conducting this
            orchestra is fun, and anticipating tunnels and underpasses is even
            more exciting.
          </p>
        </div>

        <div className="px-0 py-20 sm:px-24 lg:px-32">
          <iframe
            className="mx-auto aspect-video w-full max-w-3xl border-0"
            src="https://www.youtube.com/embed/I8CygBDUIBs"
            title="The All-New Mercedes-Benz SL55 AMG: Witness the Power!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        <div className="px-16 text-white sm:px-24 lg:px-32">
          <p className="mb-10">
            Time seems to slow down in the SL55, despite its ability to get from
            rest to 100km/h in 3.9 seconds. The acceleration is great, but
            losing yourself in the drive is even better. Here, I momentarily
            forget about the outside world. Savouring the car's soul-stirring
            abilities are more important than meetings and deadlines.
          </p>
          <p className="mb-10">
            Show the SL a series of corners and it obliges your whims, with the
            steering wheel unexpectedly feeding back road undulations. The car's
            movements are progressive and natural. The ride, even in Sport, is
            pliant, yet accords enough body control on twistier paths.
          </p>
          <p className="mb-10">
            And when it comes to stopping, those dinner plate-size brake rotors
            give you plenty of confidence. The SL weighs nearly two tonnes, but
            it doesn't feel like it. Only when parking does the car annoy me.
            Rear-wheel steering is standard, but given the wide turning circle,
            I swear it doesn't work.
          </p>
          <p className="mb-10">
            The SL has nine speeds, but I only use four of them, as the motor's
            vocals at high rpms are addictive. Thus, with engine speeds
            remaining relatively high, a litre of unleaded allows me to cover
            just over two kilometres. Oops.
          </p>
          <p className="mb-10">
            After two decades, the SL has reverted to a fabric roof as it is
            lighter and takes up less boot space when opened. It can be opened
            and closed in 15 seconds while the car is driven at up to 60km/h.
          </p>
          <p>
            However, 15 seconds is only possible if the virtual toggle switch
            doesn't slip away from your finger. I often found myself having to
            re-swipe to operate the roof. Mercedes should have kept the metal
            switch of the previous car, which conveniently has the one-touch
            windows up/down toggle beside it.
          </p>
        </div>
      </div>

      <div className="sticky bottom-0 mb-0 mt-14 flex items-center justify-start sm:mb-14 sm:mt-14 lg:mb-20 lg:mt-20">
        <div className="absolute" ref={progressBarRef}>
          <div className="h-1 bg-lightgray opacity-40"></div>
          <div className="h-2"></div>
          <div className="h-7 bg-lightgray opacity-20"></div>
        </div>

        <img
          className="w-[220px] opacity-80 lg:w-[410px]"
          ref={progressCarRef}
          src="progress.png"
          alt="Progress"
          loading="lazy"
        />
      </div>

      <div className="h-10 bg-darkgray"></div>
    </section>
  );
};

export default TimeToDance;
