const RadialBlurEffect = ({
  width,
  height,
  blur,
  horizontalOffSet,
  verticalOffSet,
  zIndex,
  color,
  isInView,
}) => {
  return (
    <div
      className={`${isInView ? width : "w-0"} ${
        isInView ? height : "h-0"
      } ${blur} ${horizontalOffSet} ${verticalOffSet} ${zIndex} absolute rounded-full ${
        color ? color : "bg-[#DD00B8]"
      }  sm:visible invisible isolate transition-all ease-in-out duration-[3000ms]`}
    ></div>
  );
};

export default RadialBlurEffect;
