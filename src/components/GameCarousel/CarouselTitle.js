import GradientText from "../ui/GradientText";
import { useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";

const CarouselTitle = ({ paragraphText }) => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

  return (
    <div ref={ref} className="container px-6 m-auto mx-auto" id={"play-now"}>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-12 mx-auto text-center">
          <h2
            className={
              "xl:text-6xl text-3xl font-ondo font-extrabold text-white xl:w-3/4 mx-auto leading-2 uppercase"
            }
          >
            Choose your{" "}
            <GradientText
              content={"Favourite"}
              classes={
                "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text "
              }
              isVisible={isInViewPort}
            />{" "}
            games
          </h2>
          <p className={"text-white mt-5 mb-16 xl:w-2/4 mx-auto md:px-3"}>
            Offer sneak peeks and previews of upcoming games, including
            trailers, screenshots, and information about release.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselTitle;
