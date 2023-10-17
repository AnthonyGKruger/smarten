import { useEffect } from "react";
import Glide from "@glidejs/glide";

const StarBannerNoBackground = () => {
  const randomId = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    const slider = new Glide(`.star-banner-${randomId}`, {
      type: "carousel",
      autoplay: 1,
      animationDuration: 5000,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          // gap: 10,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, [randomId]);

  return (
    <div
      className={`star-banner-${randomId} relative w-full text-white text-2xl`}
    >
      <div data-glide-el="track">
        <ul
          className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative overflow-hidden p-0
        inline-flex items-center gap-x-14 2xl:gap-x-28 xl:h-[3.125em] w-[124.313em] 2xl:w-[187.5em] 2xl:-ml-0 -ml-[12.5em] mt-16 text-white lg:text-3xl md:text-lg"
        >
          <li className={"inline-flex uppercase font-extrabold banner-item"}>
            <img
              src={"/assets/Star 1.svg"}
              alt={"star"}
              className={"h-1/2 mr-6 md:mt-0 mt-3 justify-center items-center"}
            />{" "}
            <span className={"uppercase font-extrabold lg:mt-1 md:mt-2"}>
              Gaming Spanning
            </span>
          </li>
          <li className={"inline-flex uppercase font-extrabold banner-item"}>
            <img
              src={"/assets/Star 1.svg"}
              alt={"star"}
              className={"h-1/2 mr-6 md:mt-0 mt-3 justify-center items-center"}
            />{" "}
            <span className={"uppercase font-extrabold lg:mt-1 md:mt-2"}>
              Action - Packed
            </span>
          </li>
          <li className={"inline-flex uppercase font-extrabold banner-item"}>
            <img
              src={"/assets/Star 1.svg"}
              alt={"star"}
              className={"h-1/2 mr-6 md:mt-0 mt-3 justify-center items-center"}
            />{" "}
            <span className={"uppercase font-extrabold lg:mt-1 md:mt-2"}>
              {" "}
              Mind - Bending
            </span>
          </li>
          <li className={"inline-flex uppercase font-extrabold banner-item"}>
            <img
              src={"/assets/Star 1.svg"}
              alt={"star"}
              className={"h-1/2 mr-6 md:mt-0 mt-3 justify-center items-center"}
            />{" "}
            <span
              className={
                "uppercase inline-flex font-extrabold lg:mt-1 md:mt-2 banner-item"
              }
            >
              Collection og games
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StarBannerNoBackground;
