const FlawedGreyCircleRight = (props) => {
  return (
    <div
      className={
        props.animateTrigger
          ? "carousel-point-opacity-in absolute flex h-5 w-5 items-center justify-center rounded-full bg-white"
          : "carousel-point-opacity-out absolute flex h-5 w-5 items-center justify-center rounded-full bg-white"
      }
    >
      <div className="flex items-center justify-start">
        <div
          className={
            props.animateTrigger
              ? "carousel-line-opacity-in absolute flex w-36 origin-left items-center justify-end border-y-4 border-dashed border-white"
              : "carousel-line-opacity-out absolute flex w-36 origin-left items-center justify-end border-y-4 border-dashed border-white"
          }
        >
          <div
            className={
              props.animateTrigger
                ? "carousel-line-rotate-in absolute flex w-64 origin-right items-center justify-start border-y-4 border-dashed border-white"
                : "carousel-line-rotate-out absolute flex w-64 origin-right items-center justify-start border-y-4 border-dashed border-white"
            }
          >
            <div className="flex items-center justify-center">
              <div
                className={
                  props.animateTrigger
                    ? "carousel-circle-rotate-in absolute flex h-64 w-64 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
                    : "carousel-circle-rotate-out absolute flex h-64 w-64 items-center justify-center rounded-full bg-lightgray p-10 text-center font-bold text-white"
                }
              >
                <div className="flex flex-col items-center justify-center gap-6">
                  <p>{props.text}</p>
                  <p>PHOTO: sgCarMart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlawedGreyCircleRight;
