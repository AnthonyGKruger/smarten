import callToActionImage from "./cta-image.png";
import GradientBorderButton from "../ui/GradientBorderButton";
import star from "../../assets/Star 1.svg";

const MobileCallToAction = () => {
  return (
    <section className={"py-14 bg-[#2D1E6B] block sm:hidden"}>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <div
              className={`flex flex-col  rounded-lg shadow-sm text-white shadow-slate-900 sm:flex-row bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[25px]`}
            >
              <div className="flex-1 px-4 sm:mx-6 pt-14">
                <header className="flex gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-ondo font-extrabold uppercase">
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
                <div className={"py-14 pr-32"}>
                  <GradientBorderButton textContent={"play now"} />
                </div>
              </div>

              <figure className="flex-1">
                <div className={"relative h-[400px] w-full"}>
                  <img
                    src={callToActionImage}
                    alt="cta"
                    className="object-cover absolute h-[431px] w-[362px] -top-[30px] "
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`inline-flex items-center gap-x-14 h-[50px] w-[1989px] -ml-[300px] mt-16 text-white  overflow-hidden`}
      >
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/4 mr-6"} />{" "}
          <span className={"uppercase font-extrabold text-[18px]"}>
            Gaming Spanning
          </span>
        </div>
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/4 mr-6"} />{" "}
          <span className={"uppercase font-extrabold text-[18px]"}>
            Action - Packed
          </span>
        </div>
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/4 mr-6"} />{" "}
          <span className={"uppercase font-extrabold text-[18px]"}>
            {" "}
            Mind - Bending
          </span>
        </div>
        <div className=" inline-flex ">
          <img src={star} alt={"star"} className={"h-1/4 mr-6"} />{" "}
          <span className={"uppercase font-extrabold text-[18px]"}>
            Collection og games
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileCallToAction;
