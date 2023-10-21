import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import axios from "axios";
import StarBannerItem from "./StarBannerItem";

const StarBannerNoBackground = () => {
  const randomId = Math.floor(Math.random() * 100) + 1;

  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}banner`).then((res) => {
      setState(res.data.tiltedBannerText);
    });
  }, []);

  useEffect(() => {
    if (state !== null) {
      const slider = new Glide(`.star-banner-${randomId}`, {
        type: "carousel",
        autoplay: 2,
        animationDuration: 3000,
        animationTimingFunc: "linear",
        perView: 3,
        classes: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
        breakpoints: {
          1024: {
            perView: 3,
          },
          640: {
            perView: 2,
            // gap: 10,
          },
          325: {
            perView: 1,
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }
  }, [randomId, state]);

  const spanClasses =
    "uppercase inline-flex font-extrabold lg:mt-1 md:mt-2 mt-5 banner-item";
  const liClasses = "inline-flex uppercase font-extrabold banner-item";
  const imgClasses = "h-1/2 mr-6 md:mt-0 mt-3 justify-center items-center";

  return (
    <div className={`star-banner-${randomId} relative w-full text-white `}>
      <div data-glide-el="track">
        {state !== null && (
          <ul
            className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d]
          [touch-action: pan-Y] [will-change: transform] relative overflow-hidden p-0 inline-flex items-center gap-x-2
          2xl:gap-x-28 xl:h-[3.125em] md:w-[120vw] w-[350vw] 2xl:w-[187.5em] 2xl:-ml-0 md:-ml-[12.5em] ml-[50vw] mt-16 text-white lg:text-3xl
           md:text-lg z-50 text-sm"
          >
            {state.map((text) => (
              <StarBannerItem
                text={text}
                spanClasses={spanClasses}
                liClasses={liClasses}
                imgClasses={imgClasses}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StarBannerNoBackground;
