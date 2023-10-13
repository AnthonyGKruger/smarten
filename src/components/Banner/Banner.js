import BannerActions from "./BannerActions";
import BannerStats from "./BannerStats";
import MobileBannerActions from "./MobileBannerActions";
import MobileBannerStats from "./MobileBannerStats";

const Banner = () => {
  return (
    <div className={"flex bg-[#2D1E6B] "}>
      <div className={"grow"}>
        <div
          className={
            "h-screen w-screen bg-[#2D1E6B] pt-16 relative mix-blend-color-dodge"
          }
        >
          <div
            className={
              "absolute rounded-full bg-[#DD00B8] w-[21.31em] h-[21.31em] blur-[7rem] sm:visible invisible isolate"
            }
          ></div>

          <div className="lg:container w-[40.631em] text-white absolute xl:mt-[5.054em] lg:mt-[6.304em] md:mt-[5.679em] mt-[1.929em] lg:ml-[6.438em] md:ml-12 ml-5">
            <div
              className={
                "2xl:w-[45.631em] xl:w-[40.631em] lg:w-[21.256em] md:w-[21.256em] w-[20.875em]"
              }
            >
              <h1
                className={
                  "uppercase font-extrabold 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-[2.559rem] text-[2.518rem] tracking-[0.172rem] xl:leading-[4.765rem] lg:leading-[3.14rem] leading-[2.785rem] not-italic "
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
                "xl:w-[34.381em] lg:w-[22.006em] md:w-[15.756em] w-[18em] lg:mt-0 md:mt-5"
              }
            >
              <p
                className={
                  "xl:leading-[1.915rem] lg:leading-[1.29rem] 2xl:text-[1.5rem] xl:text-[1.108rem] lg:text-[0.938rem] text-[1rem]"
                }
              >
                Playing electronic games, whether through consoles, computers,
                mobile phones or another medium altogether. Gaming is a nuanced
                term that suggests regular gameplay, possibly as a hobby.
              </p>
            </div>

            <BannerActions />
            <BannerStats />
          </div>

          <div
            className={`xl:w-[110em] xl:-ml-[12em] lg:w-[64em] md:w-[48em] xl:h-[5.625em] lg:h-[4.375em] absolute xl:mt-[37.125em] lg:mt-[35.75em] md:mt-[35.625em] mt-[37.5em] -skew-y-2 text-white border-2 border-[#6D44F4] bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[1.5625rem] isolate`}
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

          <img
            src={"/assets/banner/banner-image.png"}
            alt={"banner"}
            className={
              " lg:w-screen lg:h-full md:h-full md:w-full h-4/6 w-full md:aspect-video md:object-cover md:mt-[10px] mt-[240px] lg:mt-0 object-cover object-right -z-50 relative"
            }
          />
        </div>
        <MobileBannerActions />
        <MobileBannerStats />
      </div>
    </div>
  );
};

export default Banner;
