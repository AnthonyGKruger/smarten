import GradientText from "../ui/GradientText";
import { useRef } from "react";
import useIsInViewPort from "../../hooks/useIsInViewPort";

const MobileBannerContent = ({ text, img }) => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

  return (
    <div
      ref={ref}
      className="overflow-hidden bg-[#000000] text-white pt-20 md:hidden"
    >
      <div className="bg-[#000000]">
        <header className="absolute p-6">
          <div className={"w-full"}>
            <h1
              className={
                "uppercase font-extrabold tracking-[0.172rem] leading-[2.2rem] not-italic banner-title"
              }
            >
              Let your mind{" "}
              <GradientText
                classes={
                  "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text"
                }
                content={"explore"}
                isVisible={isInViewPort}
              />{" "}
              new world
            </h1>
          </div>
          <div className={"pt-2 w-full"}>
            <p className={"banner-text"}>{text}</p>
          </div>
        </header>
        <figure className={"pt-44"}>
          <img
            src={img}
            alt={"banner"}
            className={"h-[28em] object-cover object-right-top -mr-20"}
          />
        </figure>
      </div>
    </div>
  );
};

export default MobileBannerContent;
