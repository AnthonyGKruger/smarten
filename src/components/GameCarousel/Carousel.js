import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Carousel = ({ images, highlight }) => {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
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
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const imageClasses =
    "m-auto xl:h-[23em] xl:w-[41em] lg:h-[20em] lg:w-[36em] md:h-[15em] md:w-[41em] h-[10.5em] w-[18em] aspect-video object-cover ";

  return (
    <>
      <div
        className="glide-05 relative xl:w-[130em] lg:w-[80em] md:w-[60em]  xl:-left-[20em] 2xl:-left-[8em] lg:-left-[8em]
      md:-left-[6em]  z-30 xl:py-14 md:py-14 py-10 max-[425px]:w-[20em] max-[425px]:left-12 max-[375px]:left-6  max-[320px]:left-0"
      >
        <div
          className={
            "absolute xl:left-[43.7em] xl:-top-[1.3em] lg:left-[21.3em] lg:-top-[1.3em] md:left-[15.5em]" +
            " md:-top-[0.2em] left-1.2 top-1.5 w-[30em] md:w-auto"
          }
        >
          <figure>
            <img
              src={highlight}
              alt={"carousel highlight"}
              // className={"h-96 w-[90em]"}
            />
          </figure>
        </div>

        <div className="overflow-hidden" data-glide-el="track">
          <ul
            className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d]
           [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 md:gap-10"
          >
            {images.map((image, idx) => {
              return (
                <li key={idx}>
                  <figure>
                    <img
                      src={image}
                      className={imageClasses}
                      alt={"favourite games"}
                    />
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Carousel;
