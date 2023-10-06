import bannerImage from "../../assets/banner-image.png";
import star from "../../assets/Star 1.svg";

const DesktopBanner = () => {
  return (
    <div className={"h-screen w-screen bg-[#2D1E6B] pt-16 relative"}>
      <div
        className={
          "absolute rounded-full bg-[#DD00B8] w-[341px] h-[341px] blur-[292px] sm:visible invisible"
        }
      ></div>

      <div className="container w-[650.09px] text-white absolute mt-[80.87px] ml-[103px]">
        <div className={"w-[650.09px]"}>
          <h1
            className={
              "uppercase font-extrabold text-[68.937px] tracking-[2.757px] leading-[76.245px] not-italic "
            }
          >
            Let your mind
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

        <div className={"w-[550.09px]"}>
          <p className={"leading-[30.64px] text-[17.72px]"}>
            Playing electronic games, whether through consoles, computers,
            mobile phones or another medium altogether. Gaming is a nuanced term
            that suggests regular gameplay, possibly as a hobby.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mt-5 w-[480px]">
          <div className="col-span-4 lg:col-span-6">
            <button
              className={
                "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold h-[74px] w-[232px] -skew-x-12"
              }
            >
              <div className={"skew-x-12"}>buy now</div>
            </button>
          </div>

          <div className="col-span-4 lg:col-span-6">
            <button
              className={
                "uppercase text-center font-ondo font-extrabold h-[74px] w-[232px] -skew-x-12 gradient-border"
              }
            >
              <div className={"skew-x-12 bg-transparent"}>
                <span
                  className={
                    "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text"
                  }
                >
                  play now
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mt-5 w-[500px]">
          <div className="col-span-4 text-center">
            <p className={" font-extrabold text-[30px]"}>300+</p>
            <p className={" text-[18.715px]"}>Unique Style</p>
          </div>
          <div className="col-span-4 text-center">
            <p
              className={
                "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text font-extrabold text-[30px]"
              }
            >
              200+
            </p>
            <p className={" text-[18.715px]"}>Project Finished</p>
          </div>
          <div className="col-span-4 text-center">
            <p className={" font-extrabold text-[30px]"}>500+</p>
            <p className={" text-[18.715px]"}>Happy Customer</p>
          </div>
        </div>
      </div>

      <div
        className={
          "w-[1453px] h-[90px]  absolute mt-[610px] -skew-y-2 text-white bg-transparent border-2 border-[#6D44F4] bg-slate-600 mix-blend-color-none"
        }
      >
        <div className=" px-6 m-auto ">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-3 flex items-center pt-5">
              <img src={star} alt={"star"} />{" "}
              <span className={"uppercase font-extrabold text-[20px]"}>
                Gaming Spanning
              </span>
            </div>
            <div className="col-span-4 lg:col-span-3 flex items-center pt-5">
              <img src={star} alt={"star"} />{" "}
              <span className={"uppercase font-extrabold text-[20px]"}>
                Action - Packed
              </span>
            </div>
            <div className="col-span-4 lg:col-span-3 flex items-center pt-5">
              <img src={star} alt={"star"} />{" "}
              <span className={"uppercase font-extrabold text-[20px]"}>
                {" "}
                Mind - Bending
              </span>
            </div>
            <div className="col-span-4 lg:col-span-3 flex items-center pt-5">
              <img src={star} alt={"star"} />{" "}
              <span className={"uppercase font-extrabold text-[20px]"}>
                Collection og games
              </span>
            </div>
          </div>
        </div>
      </div>

      <img
        src={bannerImage}
        alt={"banner"}
        className={
          "mix-blend-color-dodge lg:w-screen lg:h-full h-3/4 w-full aspect-video object-cover "
        }
      />
    </div>
  );
};

export default DesktopBanner;
