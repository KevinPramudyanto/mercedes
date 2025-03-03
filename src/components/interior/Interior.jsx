import InteriorContainer from "./InteriorContainer.jsx";
import InteriorTitle2 from "./InteriorTitle2.jsx";
import InteriorTitle1 from "./InteriorTitle1.jsx";
import InteriorContent from "./InteriorContent.jsx";

const Interior = () => {
  return (
    <>
      <InteriorContainer src="parallax_interior1.png" alt="Parallax Interior 1">
        <InteriorTitle2 />
        <InteriorTitle1 />
        <InteriorContent
          content1="Yes, there are still screens. But instead of the usual MBUX (Mercedes-Benz User Experience) setup, the 12.3-inch instrument panel is housed under a cowl, reflecting the SL's sporty roots."
          content2="Dominating the dashboard is the tablet-like 11.9-inch infotainment display, whose tilt angle can be adjusted from 12 degrees to 32 degrees at a touch of a button. It helps minimise screen glare when driving with the top down."
          content3="Snazzy cockpit features mood lighting and tablet-like infotainment screen, but the heat from the engine can make occupants uncomfortable."
        />
      </InteriorContainer>

      <InteriorContainer src="parallax_interior2.png" alt="Parallax Interior 2">
        <InteriorContent
          content1="For the first time in the SL's history, the car has rear seats. They can supposedly accommodate occupants up to 1.5m tall, but the backrests are so upright they seem like they are canted forward."
          content2="Also, strangely absent on the test unit are soft-close doors and 'pushers' that bring the seat belts closer to the front passengers."
          content3="It looks uncomfortable from this angle, but Mercedes says the backseats can accommodate passengers up to 1.5m tall."
        />
      </InteriorContainer>
    </>
  );
};

export default Interior;
