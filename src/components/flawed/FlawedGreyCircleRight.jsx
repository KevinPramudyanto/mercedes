import styles from "./Flawed.module.css";

const FlawedGreyCircleRight = (props) => {
  return (
    <div className="flex items-center justify-start">
      <div
        className={
          styles.lineOpacityIn +
          " absolute z-30 flex w-10 origin-left items-center justify-end border-y-4 border-dashed border-white sm:w-32"
        }
      >
        <div
          className={
            styles.lineRotateRight +
            " absolute flex w-36 origin-right items-center justify-start border-y-4 border-dashed border-white sm:w-56"
          }
        >
          <div className="flex items-center justify-center">
            <div
              className={
                styles.circleRotateRight +
                " absolute flex h-56 w-56 items-center justify-center rounded-full bg-lightgray p-10 text-center text-xs text-white sm:h-64 sm:w-64 sm:text-sm"
              }
            >
              <div className="flex flex-col items-center justify-center gap-4 sm:gap-5">
                <p>{props.text}</p>
                <p>PHOTO: sgCarMart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlawedGreyCircleRight;
