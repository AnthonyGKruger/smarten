import CarouselTitle from "./CarouselTitle";
import Carousel from "./Carousel";
import CarouselActions from "./CarouselActions";
import RadialBlurEffect from "../ui/RadialBlurEffect";
import { useEffect, useRef, useState } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";
import axios from "axios";

const GameCarousel = () => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);
  const [state, setState] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}game-carousel`)
      .then((res) => {
        setState(res.data);
      });
  }, []);

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
      {state && <CarouselTitle paragraphText={state.paragraphText} />}
      {state !== null && (
        <Carousel
          images={state.imageUrls}
          highlight={state.carouselHighlight}
        />
      )}
      <CarouselActions />
    </section>
  );
};

export default GameCarousel;
