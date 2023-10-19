import GradientBorderButton from "../ui/GradientBorderButton";
import GradientText from "../ui/GradientText";
import { useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";

const MobileCallToAction = () => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

  return (
    <section className={"py-14 bg-[#2D1E6B] block sm:hidden"} ref={ref}>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-4 ">
            <div
              className={`flex flex-col overflow-visible rounded-lg shadow-sm text-white shadow-slate-900 sm:flex-row bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[1.563em]`}
            >
              <div className="flex-1 px-4 sm:mx-6 pt-14">
                <header className="flex gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-ondo font-extrabold uppercase">
                      Discover the{" "}
                      <GradientText
                        classes={
                          "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text"
                        }
                        content={"virtual"}
                        isVisible={isInViewPort}
                      />{" "}
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
                  <GradientBorderButton
                    textContent={"play now"}
                    redirectTo={() => {
                      window.location.hash = "#play-now";
                    }}
                  />
                </div>
              </div>

              <figure className="flex-1">
                <div className={"relative h-[25em] w-full"}>
                  <img
                    src={"/assets/cta/cta-image.png"}
                    alt="cta"
                    className="object-cover absolute h-[26.938em] w-[22.625em] -top-[1.875em] "
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`inline-flex items-center gap-x-14 h-[3.125em] w-[124.313em] -ml-[18.75em] mt-16 text-white  overflow-hidden`}
      >
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/4 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold text-[1.125rem]"}>
            Gaming Spanning
          </span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/4 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold text-[1.125rem]"}>
            Action - Packed
          </span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/4 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold text-[1.125rem]"}>
            {" "}
            Mind - Bending
          </span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/4 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold text-[1.125rem]"}>
            Collection og games
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileCallToAction;
