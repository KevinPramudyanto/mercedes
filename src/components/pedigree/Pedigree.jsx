import PedigreePorsche from "./PedigreePorsche";
import PedigreeMercedes from "./PedigreeMercedes";

const Pedigree = () => {
  return (
    <section className="bg-neutral-200 pb-40 pt-28 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-6xl px-16 sm:px-36">
        <h2 className="mb-16 text-4xl font-bold text-lightbrown sm:mb-11 sm:text-darkgray lg:mb-16">
          PEDIGREE
        </h2>

        <PedigreePorsche />

        <PedigreeMercedes />
      </div>
    </section>
  );
};

export default Pedigree;
