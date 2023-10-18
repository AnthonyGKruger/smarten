import BannerActions from "./BannerActions";
import BannerStats from "./BannerStats";
import MobileBannerContent from "./MobileBannerContent";
import RadialBlurEffect from "../ui/RadialBlurEffect";
import { useEffect, useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";
import Glide from "@glidejs/glide";

const DesktopBannerContent = () => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

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
  }, [randomId]);

  const spanClasses =
    "uppercase inline-flex font-extrabold lg:mt-2 md:mt-1 mt-3 banner-item lg:text-3xl md:text-2xl text-sm";
  const liClasses = "inline-flex uppercase font-extrabold ";
  // const liClasses = "inline-flex uppercase font-extrabold banner-item";
  const imgClasses =
    "md:h-1/2 h-1/4 mr-6 md:mt-0 md:mt-3 lg:mt-1 justify-center items-center";

  return (
    <div
      className={
        "lg:h-screen md:h-[30em] h-fit w-screen bg-[#3924BB] relative mix-blend-color-dodge"
      }
      ref={ref}
    >
      <RadialBlurEffect
        isInView={isInViewPort}
        color={"bg-[#fc4343]"}
        blur={"blur-[8.5rem]"}
        height={"h-[21.313em]"}
        horizontalOffSet={""}
        verticalOffSet={""}
        zIndex={""}
        width={"w-[25.313em]"}
      />

      <div
        className={`star-banner-${randomId} relative w-full text-white -skew-y-2 z-50`}
      >
        <div data-glide-el="track">
          <ul
            className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d]
          [touch-action: pan-Y] [will-change: transform] overflow-hidden p-0 inline-flex items-center gap-x-2
         2xl:w-[150em] xl:w-[200vw]  lg:w-[80em] w-[60em] lg:-ml-[8em] md:w-[60em] md:-ml-[6em] -ml-[12em]
          xl:h-[5.625em] lg:h-[4.375em] h-[4.375em] absolute 2xl:mt-[56.5em] xl:mt-[95vh] lg:mt-[39.75em] md:mt-[28em]
           mt-[39.5em] -skew-y-2 text-white border-2 border-slate-700  bg-gradient-to-t  from-[#000000] to-slate-700
           backdrop-blur-[25px] isolate z-50"
          >
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}>Gaming Spanning</span>
            </li>
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}>Action - Packed</span>
            </li>
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}> Mind - Bending</span>
            </li>
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}>Collection og games</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:container w-[40.631em] text-white xl:mt-[9.054em] lg:mt-[10.304em] md:mt-[6.679em] mt-[1.929em] lg:ml-[6.438em] md:ml-12 ml-5 hidden md:block md:absolute">
        <div
          className={
            "2xl:w-[45.631em] xl:w-[40.631em] lg:w-[21.256em] md:w-[21.256em] w-[20.875em]"
          }
        >
          <h1
            className={
              "uppercase font-extrabold 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-[2.2rem] text-[2.518rem] tracking-[0.172rem] xl:leading-[4.765rem] lg:leading-[3.14rem] leading-[2.2rem] not-italic "
            }
          >
            Let your mind{" "}
            <span
              className={
                "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text"
              }
            >
              explore
            </span>{" "}
            new world
          </h1>
        </div>

        <div
          className={
            "xl:w-[34.381em] lg:w-[22.006em] md:w-[22.756em] w-[18em] lg:mt-0 md:mt-3"
          }
        >
          <p
            className={
              "xl:leading-[1.915rem] lg:leading-[1.29rem] 2xl:text-[1.5rem] xl:text-[1.108rem] lg:text-[0.938rem] md:text-[0.9rem] text-[1rem]"
            }
          >
            Playing electronic games, whether through consoles, computers,
            mobile phones or another medium altogether. Gaming is a nuanced term
            that suggests regular gameplay, possibly as a hobby.
          </p>
        </div>

        <BannerActions />
        <BannerStats />
      </div>

      <img
        src={"/assets/banner/banner-image.png"}
        alt={"banner"}
        className={
          "lg:w-screen lg:h-full md:h-full md:w-full h-4/6 w-full md:aspect-video md:object-cover md:-mt-2 lg:-mt-2  object-cover object-right -z-50 relative hidden md:block"
        }
      />

      <MobileBannerContent />
    </div>
  );
};

export default DesktopBannerContent;
