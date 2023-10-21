import GradientBorderButton from "../ui/GradientBorderButton";
import RadialBlurEffect from "../ui/RadialBlurEffect";
import { useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";
import StarBannerNoBackground from "../ui/StarBannerNoBackground";
import GradientText from "../ui/GradientText";

const CallToAction = ({ data }) => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

  return (
    <section className={"py-28 bg-[#2D1E6B] hidden md:block "} ref={ref}>
      <RadialBlurEffect
        isInView={isInViewPort}
        blur={"blur-[27.883em]"}
        height={"h-[32.563em]"}
        horizontalOffSet={"-right-[26.875em]"}
        verticalOffSet={"top-[109.375em]"}
        zIndex={"z-10"}
        width={"w-[32.563em]"}
      />
      <div className="container px-6 m-auto 2xl:pt-28 xl:pt-28">
        <div
          className={`lg:flex rounded-lg shadow-sm text-white shadow-slate-900 bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[1.563em] lg:h-auto h-[50em] z-30 relative lg:overflow-y-visible md:overflow-y-hidden`}
        >
          <figure className="lg:flex-1">
            <div className={"block"}>
              <div
                className="lg:aspect-square aspect-video lg:object-contain object-fill absolute xl:h-[39.938em] lg:h-[40em] xl:w-[45.313em] lg:w-[40em]
                  h-[74vh] z-50 2xl:-top-[12.5em] xl:-top-[7.813em] lg:-top-[2.3em] top-[13.9em] -left-2 bg-no-repeat"
                style={{
                  backgroundImage: `url(${data.imageUrl})`,
                }}
              ></div>
            </div>
          </figure>

          <div className="lg:flex-1 pr-0 2xl:pl-0 xl:pl-36 lg:pl-64 mx-6 pt-14">
            <header className="flex gap-4 mb-4">
              <div>
                <h3 className="text-5xl font-ondo font-extrabold uppercase">
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
            <p className={"font-lato text-lg"}>{data.paragraphText}</p>
            <div className={"py-14"}>
              <GradientBorderButton
                textContent={"play now"}
                redirectTo={() => {
                  window.location.hash = "#play-now";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <StarBannerNoBackground />
    </section>
  );
};

export default CallToAction;
