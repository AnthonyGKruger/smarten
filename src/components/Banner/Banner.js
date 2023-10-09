import BannerActions from "./BannerActions";
import BannerStats from "./BannerStats";
import MobileBannerActions from "./MobileBannerActions";
import MobileBannerStats from "./MobileBannerStats";

const Banner = () => {
  return (
    <div className={"flex bg-[#2D1E6B]"}>
      <div className={"grow"}>
        <div className={"h-screen w-screen bg-[#2D1E6B] pt-16 relative"}>
          <div
            className={
              "absolute rounded-full bg-[#DD00B8] w-[341px] h-[341px] blur-[292px] sm:visible invisible"
            }
          ></div>

          <div className="lg:container w-[650.09px] text-white absolute xl:mt-[80.87px] lg:mt-[100.87px] md:mt-[90.87px] mt-[30.87px] lg:ml-[103px] md:ml-12 ml-5">
            <div
              className={
                "xl:w-[650.09px] lg:w-[340.09px] md:w-[340.09px] w-[334px]"
              }
            >
              <h1
                className={
                  "uppercase font-extrabold xl:text-[68.937px] lg:text-[40.937px] md:text-[40.937px] text-[40.294px] tracking-[2.757px] xl:leading-[76.245px] lg:leading-[50.245px] leading-[44.565px] not-italic "
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
                "xl:w-[550.09px] lg:w-[400.09px] md:w-[380.09px] w-[334px]"
              }
            >
              <p
                className={
                  "xl:leading-[30.64px] lg:leading-[20.64px] xl:text-[17.72px] lg:text-[15px] text-[16px]"
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
            className={`xl:w-[1453px] lg:w-[1024px] md:w-[768px] xl:h-[90px] lg:h-[70px]  absolute xl:mt-[610px] lg:mt-[550px] md:mt-[590px] mt-[630px] -skew-y-2 text-white  border-2 border-[#6D44F4] 
        bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[25px]  isolate`}
          >
            <div className=" px-6 m-auto ">
              <div className="grid grid-cols-12 md:gap-6 md:grid-cols-12 lg:grid-cols-12">
                <div className="col-span-3 lg:col-span-3 flex items-center xl:pt-5 lg:pt-2">
                  <img
                    src={"/assets/Star 1.svg"}
                    alt={"star"}
                    className={"h-1/2"}
                  />{" "}
                  <span
                    className={
                      "uppercase font-extrabold xl:text-[20px] lg:text-[17px] md:text-[10px] text-[8px]"
                    }
                  >
                    Gaming Spanning
                  </span>
                </div>
                <div className="col-span-3 lg:col-span-3 flex items-center xl:pt-5 lg:pt-2">
                  <img
                    src={"/assets/Star 1.svg"}
                    alt={"star"}
                    className={"h-1/2"}
                  />{" "}
                  <span
                    className={
                      "uppercase font-extrabold xl:text-[20px] lg:text-[17px] md:text-[10px] text-[8px]"
                    }
                  >
                    Action - Packed
                  </span>
                </div>
                <div className="col-span-3 lg:col-span-3 flex items-center xl:pt-5 lg:pt-2">
                  <img
                    src={"/assets/Star 1.svg"}
                    alt={"star"}
                    className={"h-1/2"}
                  />{" "}
                  <span
                    className={
                      "uppercase font-extrabold xl:text-[20px] lg:text-[17px] md:text-[10px] text-[8px]"
                    }
                  >
                    {" "}
                    Mind - Bending
                  </span>
                </div>
                <div className="col-span-3 lg:col-span-3 flex items-center xl:pt-5 lg:pt-2">
                  <img
                    src={"/assets/Star 1.svg"}
                    alt={"star"}
                    className={"h-1/2"}
                  />{" "}
                  <span
                    className={
                      "uppercase font-extrabold xl:text-[20px] lg:text-[17px] md:text-[10px] text-[8px]"
                    }
                  >
                    Collection og games
                  </span>
                </div>
              </div>
            </div>
          </div>

          <img
            src={"/assets/banner/banner-image.png"}
            alt={"banner"}
            className={
              "mix-blend-color-dodge lg:w-screen lg:h-full md:h-full md:w-full h-4/6 w-full md:aspect-video md:object-cover md:mt-[10px] mt-[240px] lg:mt-0 object-cover object-right"
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
