import callToActionImage from "./cta-image.png";
import cardBg from "./Rectangle.png";
import GradientBorderButton from "../ui/GradientBorderButton";
import star from "../../assets/Star 1.svg";
const CallToAction = () => {
  return (
    <section className={"py-28 bg-[#2D1E6B] hidden md:block overflow-hidden"}>
      <div
        className={
          "absolute rounded-full bg-[#DD00B8] w-[521px] h-[521px] blur-[446.1348876953125px] sm:visible invisible -right-[430px] top-[1750px]"
        }
      ></div>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <div
              className={`flex flex-col  rounded-lg shadow-sm text-white shadow-slate-900 sm:flex-row`}
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <figure className="flex-1">
                <div className={"relative"}>
                  <div
                    className="aspect-square object-contain absolute h-[639px] w-[725px] z-50 -top-[125px] -left-1.5"
                    // className="object-cover min-h-full aspect-auto"
                    style={{ backgroundImage: `url(${callToActionImage})` }}
                  ></div>
                </div>
              </figure>

              <div className="flex-1 pr-14 pl-36 sm:mx-6 pt-14">
                <header className="flex gap-4 mb-4">
                  <div>
                    <h3 className="text-5xl font-ondo font-extrabold uppercase">
                      Discover the{" "}
                      <span
                        className={
                          "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text"
                        }
                      >
                        virtual
                      </span>{" "}
                      reality gaming
                    </h3>
                  </div>
                </header>
                <p className={"font-lato text-lg"}>
                  A well-designed gaming header often incorporates elements such
                  as game characters, iconic symbols, vibrant colors, and
                  dynamic visuals to convey excitement, adventure, and the
                  immersive nature of gaming.
                </p>
                <div className={"py-14"}>
                  <GradientBorderButton textContent={"play now"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`inline-flex items-center gap-x-14 xl:h-[50px] w-[1989px] -ml-[200px] mt-16 text-white text-[34.039px] `}
      >
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/2 mr-6"} />{" "}
          <span className={"uppercase font-extrabold "}>Gaming Spanning</span>
        </div>
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/2 mr-6"} />{" "}
          <span className={"uppercase font-extrabold "}>Action - Packed</span>
        </div>
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/2 mr-6"} />{" "}
          <span className={"uppercase font-extrabold "}> Mind - Bending</span>
        </div>
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/2 mr-6"} />{" "}
          <span className={"uppercase font-extrabold "}>
            Collection og games
          </span>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
