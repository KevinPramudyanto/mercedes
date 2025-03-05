import CommonTitle1 from "../common/CommonTitle1.jsx";
import CommonTitle2 from "../common/CommonTitle2.jsx";
import FlawedImageContainer from "./FlawedImageContainer.jsx";
import FlawedRectangleLeft from "./FlawedRectangleLeft.jsx";
import FlawedRectangleRight from "./FlawedRectangleRight.jsx";

const Flawed = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-200 sm:overflow-visible sm:pt-48">
      <div className="hidden sm:block">
        <CommonTitle2 content="The SL55 is not perfect. Its ergonomics could be better, its rear-wheel steering system further improved, and the boot should be bigger." />
      </div>

      <div className="hidden sm:block">
        <CommonTitle1 content="Flawed, yet inforgettable" />
      </div>

      <div className="mx-auto hidden max-w-6xl sm:block">
        <div className="px-32 font-semibold text-darkbrown">
          <p className="mb-5">
            The SL55 is not perfect. Its ergonomics could be better, its
            rear-wheel steering system further improved, and the boot should be
            bigger. I am puzzled at the lack of soft-closing doors, and really,
            given the price tag, it's outrageous that carbon-ceramic brakes
            aren't standard.
          </p>
          <p className="mb-5">
            The engine's heat also soaks into the cabin once it and the air-con
            are switched off. I excuse this by calling it the 'SL's warm
            embrace', but I am irked because the air-con can't seem to cool the
            cabin on a hot day.
          </p>
          <p className="mb-5">
            Exotic supercars aside, there are not many luxury cars today with
            the SL's heritage and V8 soundtrack. The last car I recall was the
            Lexus LC500 Convertible . But it doesn't feel as solid. It also does
            not have the SL's lineage.
          </p>
          <p className="mb-5">
            Attraction is a funny thing because it can both heighten and dull
            your senses. Seeing and driving the SL makes my pulse race, and at
            the same time, overlook its shortcomings.
          </p>
          <p>
            What matters most, though, is that driving it reminds me that life
            isn't just about work. And in it, I am also freed from
            sustainability's constant clamour. The SL refreshes my soul — how
            can I not love it so?
          </p>
        </div>
      </div>

      <div className="overflow-hidden pb-6 pt-24 sm:pb-44 sm:pt-44 xl:pb-28 xl:pt-48">
        <FlawedImageContainer />
      </div>

      <div className="grid grid-cols-1 overflow-hidden xl:grid-cols-2">
        <div className="flex items-center justify-start pr-3">
          <FlawedRectangleLeft />
        </div>

        <div className="-mt-32 flex items-center justify-end pl-3 sm:-mt-9 xl:mt-0">
          <FlawedRectangleRight />
        </div>
      </div>
    </section>
  );
};

export default Flawed;
