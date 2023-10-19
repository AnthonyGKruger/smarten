import GradientText from "../ui/GradientText";
import { useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";

const FiltersTitle = () => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

  const gradientButtonClasses =
    "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold xl:h-[4.625em] xl:w-[14.5em] lg:h-[4em] lg:w-[10em] md:h-[3.375em] md:w-[9.5em] h-[4em] w-full -skew-x-12 xl:text-[1.25rem]  hover:scale-105 transition-all duration-300 lg:text-xl md:text-lg text-xs";

  const gradientBorderButtonClasses =
    "uppercase text-center font-ondo font-extrabold xl:h-[4.625em] xl:w-[14.5em] lg:h-[4em] lg:w-[10em] md:h-[3.375em] md:w-[9.5em] h-[4em] w-full -skew-x-12 xl:text-[1.25rem] hover:scale-105 transition-all duration-300 lg:text-xl md:text-lg text-xs gradient-border";

  return (
    <div
      id="games"
      className="container xl:px-14 lg:px-24 px-5 m-auto mx-auto xl:py-14"
      ref={ref}
    >
      <div className="grid grid-cols-4 xl:gap-10 gap-1 ">
        <div className="col-span-4  mx-auto text-center mb-5">
          <h4
            className={
              "xl:text-6xl text-4xl font-ondo font-extrabold text-white xl:w-3/4 mx-auto leading-2 uppercase"
            }
          >
            Welcome to the top{" "}
            <GradientText
              classes={
                "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text "
              }
              content={"games"}
              isVisible={isInViewPort}
            />
          </h4>
        </div>

        <div className="col-span-1  mx-auto text-center text-white">
          <button
            className={gradientButtonClasses}
            onClick={() => {
              window.open("https://ezdev.solutions");
            }}
          >
            <div className={"skew-x-12"}>newest games</div>
          </button>
        </div>

        <div className="col-span-1  mx-auto text-center">
          <button
            className={gradientBorderButtonClasses}
            onClick={() => {
              window.open("https://ezdev.solutions");
            }}
          >
            <div className={"skew-x-12 bg-transparent"}>
              <span
                className={`text-white xl:text-[1.125rem] lg:text-[1.063rem]`}
              >
                Latest games
              </span>
            </div>
          </button>
        </div>

        <div className="col-span-1  mx-auto text-center">
          <button
            className={gradientBorderButtonClasses}
            onClick={() => {
              window.open("https://ezdev.solutions");
            }}
          >
            <div className={"skew-x-12 bg-transparent"}>
              <span
                className={`text-white xl:text-[1.125rem] lg:text-[1.063rem]`}
              >
                Fight games
              </span>
            </div>
          </button>
        </div>

        <div className="col-span-1  mx-auto text-center">
          <button
            className={gradientBorderButtonClasses}
            onClick={() => {
              window.open("https://ezdev.solutions");
            }}
          >
            <div className={"skew-x-12 bg-transparent"}>
              <span
                className={`text-white xl:text-[1.125rem] lg:text-[1.063rem]`}
              >
                Sport Games
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersTitle;
