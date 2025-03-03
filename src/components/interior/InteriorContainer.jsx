const InteriorContainer = (props) => {
  return (
    <section className="relative">
      <div className="sticky top-0 flex items-center justify-center">
        <img
          className="h-screen w-screen object-cover"
          src={props.src}
          alt={props.alt}
          loading="lazy"
        />
      </div>

      {props.children}
    </section>
  );
};

export default InteriorContainer;
