import CarouselTitle from "./CarouselTitle";
import Carousel from "./Carousel";
import CarouselActions from "./CarouselActions";
import RadialBlurEffect from "../ui/RadialBlurEffect";
import { useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";

const GameCarousel = () => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

  return (
    <section
      className={
        "bg-[#2D1E6B] xl:pt-48 md:pt-44 lg:pt-36 pt-28 overflow-hidden "
      }
      ref={ref}
    >
      <RadialBlurEffect
        isInView={isInViewPort}
        blur={"blur-[27.883em]"}
        height={"h-[32.563em]"}
        horizontalOffSet={"-left-[15.625em]"}
        verticalOffSet={""}
        zIndex={"z-10"}
        width={"w-[32.563em]"}
      />
      <CarouselTitle />
      <Carousel />
      <CarouselActions />
    </section>
  );
};

export default GameCarousel;
