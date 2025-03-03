import ReactDOM from "react-dom";

const OverLay = (props) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-darkgray opacity-95">
      <div className="flex items-center justify-end">
        <div
          className="p-5 text-6xl text-white hover:cursor-pointer"
          onClick={() => props.setShowModal(false)}
        >
          X
        </div>
      </div>
      <img
        className="mx-auto my-10"
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
      <h4 className="px-10 text-2xl text-white">{props.text}</h4>
      <h5 className="my-5 px-10 text-lightyellow">sgCarMart</h5>
    </div>
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
