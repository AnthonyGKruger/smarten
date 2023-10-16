import GradientBorderButton from "../ui/GradientBorderButton";
import RadialBlurEffect from "../ui/RadialBlurEffect";

const CallToAction = () => {
  return (
    <section className={"py-28 bg-[#2D1E6B] hidden md:block "}>
      <RadialBlurEffect
        blur={"blur-[27.883em]"}
        height={"h-[32.563em]"}
        horizontalOffSet={"-right-[26.875em]"}
        verticalOffSet={"top-[109.375em]"}
        zIndex={"z-10"}
        width={"w-[32.563em]"}
      />
      <div className="container px-6 m-auto">
        <div
          className={`lg:flex rounded-lg shadow-sm text-white shadow-slate-900 bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[1.563em] lg:h-auto h-screen`}
        >
          <figure className="lg:flex-1">
            <div className={"block"}>
              <div
                className="lg:aspect-square aspect-video lg:object-contain object-fill absolute xl:h-[39.938em] lg:h-[40em] xl:w-[45.313em] lg:w-[40em]
                  h-[29em] z-50 2xl:-top-[12.5em] xl:-top-[7.813em] lg:-top-[2.3em] top-[13.9em] -left-2"
                style={{
                  backgroundImage: `url("/assets/cta/cta-image.png")`,
                }}
              ></div>
            </div>
          </figure>

          <div className="lg:flex-1 pr-0 2xl:pl-0 xl:pl-36 lg:pl-64 mx-6 pt-14">
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
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals to convey excitement, adventure, and the immersive nature
              of gaming.
            </p>
            <div className={"py-14"}>
              <GradientBorderButton textContent={"play now"} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`inline-flex items-center gap-x-14 2xl:gap-x-28 xl:h-[3.125em] w-[124.313em] 2xl:w-[187.5em] 2xl:-ml-0 -ml-[12.5em] mt-16 text-white text-[2.127rem] `}
      >
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}>Gaming Spanning</span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}>Action - Packed</span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}> Mind - Bending</span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}>
            Collection og games
          </span>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
