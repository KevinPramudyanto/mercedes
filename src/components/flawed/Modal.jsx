import ReactDOM from "react-dom";

const OverLay = (props) => {
  return (
    <section
      className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center backdrop-blur-3xl"
      onClick={() => props.setShowModal(false)}
    >
      <div className="max-w-96 bg-darkgray p-2">
        <div className="flex items-center justify-end">
          <button className="text-4xl text-white hover:cursor-pointer">
            X
          </button>
        </div>
        <img
          className="mx-auto my-5"
          src={props.src}
          alt={props.alt}
          loading="lazy"
          decoding="async"
        />
        <h4 className="text-base text-white">{props.text}</h4>
        <h6 className="mt-3 text-sm text-lightyellow">sgCarMart</h6>
      </div>
    </section>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          src={props.src}
          alt={props.alt}
          text={props.text}
          setShowModal={props.setShowModal}
        />,
        document.querySelector("#modal-root"),
      )}
    </>
  );
};

export default Modal;
