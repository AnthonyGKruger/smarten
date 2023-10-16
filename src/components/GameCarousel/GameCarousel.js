import CarouselTitle from "./CarouselTitle";
import Carousel from "./Carousel";
import CarouselActions from "./CarouselActions";
import RadialBlurEffect from "../ui/RadialBlurEffect";

const GameCarousel = () => {
  return (
    <section
      className={"bg-[#2D1E6B] xl:pt-28 md:py-24  pt-14 overflow-hidden "}
    >
      <RadialBlurEffect
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
