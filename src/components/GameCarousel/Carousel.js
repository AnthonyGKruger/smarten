import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Carousel = () => {
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
    "m-auto xl:h-[23em] xl:w-[41em] lg:h-[20em] lg:w-[40em] md:h-[15em] md:w-[41em] h-[10.5em] w-[18em] aspect-video object-cover ";

  return (
    <>
      <div
        className="glide-05 relative xl:w-[130em] lg:w-[80em] md:w-[60em]  xl:-left-[20em] lg:-left-[8em]
      md:-left-[6em]  z-30 xl:py-14 md:py-14 py-10      max-[425px]:w-[20em] max-[425px]:left-12 max-[375px]:left-6  max-[320px]:left-0"
      >
        <div
          className={
            "absolute xl:left-[43em] xl:-top-[1.3em] lg:left-[20.5em] lg:-top-[1.3em] md:left-[15.5em]" +
            " md:-top-[0.2em] left-1.2 top-1.5 w-[30em] md:w-auto"
          }
        >
          <img
            src={"/assets/carousel/carousel-highlight.png"}
            alt={"carousel highlight"}
            // className={"h-96 w-[90em]"}
          />
        </div>

        <div className="overflow-hidden" data-glide-el="track">
          <ul
            className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d]
           [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 md:gap-10"
          >
            <li>
              <img
                src="/assets/carousel/game-carousel-image-1.png"
                className={imageClasses}
                // className="m-auto max-h-full w-full max-w-full aspect-video object-cover"
                alt={"favourite games"}
              />
            </li>
            <li>
              <img
                src="/assets/carousel/game-carousel-image-2.png"
                className={`${imageClasses} xl:-ml-3 lg:-ml-2.5 md:-ml-2.5`}
                // className="m-auto max-h-full w-full max-w-full aspect-video object-cover"
                alt={"favourite games"}
              />
            </li>
            <li>
              <img
                src="/assets/carousel/game-carousel-image-3.png"
                className={`${imageClasses} md:-ml-5`}
                // className="m-auto max-h-full w-full max-w-full aspect-video object-cover"
                alt={"favourite games"}
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        {/*<div*/}
        {/*  className="flex w-full items-center justify-center gap-2"*/}
        {/*  data-glide-el="controls[nav]"*/}
        {/*>*/}
        {/*  <button*/}
        {/*    className="group p-4"*/}
        {/*    data-glide-dir="=0"*/}
        {/*    aria-label="goto slide 1"*/}
        {/*  >*/}
        {/*    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    className="group p-4"*/}
        {/*    data-glide-dir="=1"*/}
        {/*    aria-label="goto slide 2"*/}
        {/*  >*/}
        {/*    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    className="group p-4"*/}
        {/*    data-glide-dir="=2"*/}
        {/*    aria-label="goto slide 3"*/}
        {/*  >*/}
        {/*    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
        {/*  </button>*/}
        {/*  <button*/}
        {/*    className="group p-4"*/}
        {/*    data-glide-dir="=3"*/}
        {/*    aria-label="goto slide 4"*/}
        {/*  >*/}
        {/*    <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Carousel;
