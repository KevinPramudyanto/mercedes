import { useEffect, useRef } from "react";

const TimeToDance = () => {
  const startRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (startRef.current && progressRef.current && progressBarRef.current) {
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
          progress * (window.innerWidth - progressRef.current.offsetWidth),
        );

        progressRef.current.style.transform = "translateX(" + translate + "px)";
        progressBarRef.current.style.width =
          translate + progressRef.current.offsetWidth / 4 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-darkgray">
      <div className="p-20" ref={startRef}>
        <div className="mx-auto max-w-screen-md">
          <h2 className="mb-10 text-4xl font-bold text-lightyellow">
            TIME TO DANCE
          </h2>

          <div className="text-white">
            <p className="mb-5">
              Are you tired of hearing about how silent EVs are? Do you crave
              drama and emotion? Then you must want a car like the SL55, whose
              powertrain is unashamedly unadulterated.
            </p>
            <p className="mb-5">
              Thumb the starter button and the twin-turbocharged, 3,982cc V8
              comes alive with a deep bark. Petrolheads within earshot can
              immediately tell that an eight-cylinder was just fired up. There's
              no mistaking this for any other type of engine.
            </p>
            <p className="mb-5">
              The 4.0-litre unit kicks out 476bhp and 700Nm of torque, the
              latter figure from just 2,250rpm. Power is transferred to both
              axles through the 4Matic+ system with fully variable torque
              distribution, making this the first all-wheel drive SL.
            </p>
            <p className="mb-5">
              The most ideal mode for the SL55 is Individual, so you can
              customise attributes such as the engine, dampers, traction
              control, and exhaust. Setting the first two to "Sport" and the
              other two to "Advanced" and "Powerful" is about right. I also left
              the nine-speed automatic gearbox in manual mode.
            </p>
            <p className="mb-5">
              Right off the bat, the V8 eagerly shows how tractable and
              rev-happy it is. The engine, along with the exhaust, sounds
              glorious in second gear as the tachometer needle swings towards
              7,000rpm. It gets real addictive real quick.
            </p>
            <p className="mb-5">
              The SL might be a sleek grand tourer, but it sounds like an
              American muscle car when driven hard. Emission regulations are
              calling for the internal combustion engine to be phased out, but
              this V8 is giving them two middle fingers while yelling back,
              'Hell no, I won't go!'
            </p>
            <p className="mb-5">
              Even while idling, the V8's pulsing is palpable. Depending how you
              flex your right foot, the exhaust will blare anything from low and
              throaty notes to a full-on throat-clearing roar. Conducting this
              orchestra is fun, and anticipating tunnels and underpasses is even
              more exciting.
            </p>

            <iframe
              className="mx-auto my-10"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/I8CygBDUIBs"
              title="The All-New Mercedes-Benz SL55 AMG: Witness the Power!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
              allowFullScreen
            ></iframe>

            <p className="mb-5">
              Time seems to slow down in the SL55, despite its ability to get
              from rest to 100km/h in 3.9 seconds. The acceleration is great,
              but losing yourself in the drive is even better. Here, I
              momentarily forget about the outside world. Savouring the car's
              soul-stirring abilities are more important than meetings and
              deadlines.
            </p>
            <p className="mb-5">
              Show the SL a series of corners and it obliges your whims, with
              the steering wheel unexpectedly feeding back road undulations. The
              car's movements are progressive and natural. The ride, even in
              Sport, is pliant, yet accords enough body control on twistier
              paths.
            </p>
            <p className="mb-5">
              And when it comes to stopping, those dinner plate-size brake
              rotors give you plenty of confidence. The SL weighs nearly two
              tonnes, but it doesn't feel like it. Only when parking does the
              car annoy me. Rear-wheel steering is standard, but given the wide
              turning circle, I swear it doesn't work.
            </p>
            <p className="mb-5">
              The SL has nine speeds, but I only use four of them, as the
              motor's vocals at high rpms are addictive. Thus, with engine
              speeds remaining relatively high, a litre of unleaded allows me to
              cover just over two kilometres. Oops.
            </p>
            <p className="mb-5">
              After two decades, the SL has reverted to a fabric roof as it is
              lighter and takes up less boot space when opened. It can be opened
              and closed in 15 seconds while the car is driven at up to 60km/h.
            </p>
            <p className="mb-5">
              However, 15 seconds is only possible if the virtual toggle switch
              doesn't slip away from your finger. I often found myself having to
              re-swipe to operate the roof. Mercedes should have kept the metal
              switch of the previous car, which conveniently has the one-touch
              windows up/down toggle beside it.
            </p>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 flex items-center justify-start">
        <div className="absolute" ref={progressBarRef}>
          <div className="h-2 bg-lightgray opacity-90"></div>
          <div className="h-2"></div>
          <div className="h-6 bg-lightgray opacity-50"></div>
        </div>
        <img
          className="w-72 opacity-90"
          ref={progressRef}
          src="progress.png"
          alt="Progress"
          loading="lazy"
        />
      </div>

      <div className="h-20 bg-darkgray"></div>
    </div>
  );
};

export default TimeToDance;
