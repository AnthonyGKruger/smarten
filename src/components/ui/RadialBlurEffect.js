import useIsInViewPort from "../../hooks/useIsInViewPort";
import { useRef } from "react";

const RadialBlurEffect = ({
  width,
  height,
  blur,
  horizontalOffSet,
  verticalOffSet,
  zIndex,
  color,
}) => {
  const ref = useRef();
  const isInViewPort = useIsInViewPort(ref);

  console.log(isInViewPort);
  return (
    <div
      ref={ref}
      className={`${isInViewPort ? width : "w-0"} ${
        isInViewPort ? height : "h-0"
      } ${blur} ${horizontalOffSet} ${verticalOffSet} ${zIndex} absolute rounded-full ${
        color ? color : "bg-[#DD00B8]"
      }  sm:visible invisible isolate transition-all ease-in-out delay-1000`}
    ></div>
  );
};

export default RadialBlurEffect;
