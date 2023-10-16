import BannerActions from "./BannerActions";
import BannerStats from "./BannerStats";
import MobileBannerContent from "./MobileBannerContent";
import RadialBlurEffect from "../ui/RadialBlurEffect";
import { useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";

const DesktopBannerContent = () => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

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
        className={`2xl:w-[150em] xl:w-[110em] xl:-ml-[12em] lg:w-[80em] w-[60em] lg:-ml-[8em] md:w-[60em] md:-ml-[6em] -ml-[12em] xl:h-[5.625em] lg:h-[4.375em] h-[4.375em] absolute 2xl:mt-[56.5em] xl:mt-[44.4em] lg:mt-[39.75em] md:mt-[28em] mt-[39.5em] -skew-y-2 text-white border-2 border-slate-700 bg-gradient-to-t  from-[#000000] to-slate-700 backdrop-blur-[25px] isolate z-50`}
      >
        <div className="px-[0.375rem] m-auto h-full">
          <div className="grid grid-cols-12  md:grid-cols-12 lg:grid-cols-12 place-items-center h-full">
            <div className="col-span-3 lg:col-span-3 flex items-center">
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={"h-6 lg:h-8 xl:h-12 mr-2"}
              />{" "}
              <span
                className={
                  "uppercase font-extrabold xl:text-3xl lg:text-xl md:text-lg text-md"
                }
              >
                Gaming Spanning
              </span>
            </div>
            <div className="col-span-3 lg:col-span-3 flex items-center">
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={"h-6 lg:h-8 xl:h-12 mr-2"}
              />{" "}
              <span
                className={
                  "uppercase font-extrabold xl:text-3xl lg:text-xl md:text-lg text-md"
                }
              >
                Action - Packed
              </span>
            </div>
            <div className="col-span-3 lg:col-span-3 flex items-center">
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={"h-6 lg:h-8 xl:h-12 mr-2"}
              />{" "}
              <span
                className={
                  "uppercase font-extrabold xl:text-3xl lg:text-xl md:text-lg text-md"
                }
              >
                {" "}
                Mind - Bending
              </span>
            </div>
            <div className="col-span-3 lg:col-span-3 flex items-center">
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={"h-6 lg:h-8 xl:h-12 mr-2"}
              />{" "}
              <span
                className={
                  "uppercase font-extrabold xl:text-3xl lg:text-xl md:text-lg text-md"
                }
              >
                Collection of games
              </span>
            </div>
          </div>
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
          " lg:w-screen lg:h-full md:h-full md:w-full h-4/6 w-full md:aspect-video md:object-cover md:-mt-2 lg:-mt-2 xl:mt-0 object-cover object-right -z-50 relative hidden md:block"
        }
      />

      <MobileBannerContent />
    </div>
  );
};

export default DesktopBannerContent;
