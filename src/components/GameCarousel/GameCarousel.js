import CarouselTitle from "./CarouselTitle";
import Carousel from "./Carousel";
import CarouselActions from "./CarouselActions";

const GameCarousel = () => {
  return (
    <section
      className={"bg-[#2D1E6B] xl:pt-28 md:py-24  pt-14 overflow-hidden "}
    >
      <div
        className={
          "absolute rounded-full bg-[#DD00B8] w-[521px] h-[521px] blur-[446.1348876953125px] sm:visible invisible -left-[250px]"
        }
      ></div>
      <CarouselTitle />
      <Carousel />
      <CarouselActions />
    </section>
  );
};

export default GameCarousel;
