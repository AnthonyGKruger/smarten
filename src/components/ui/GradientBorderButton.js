const GradientBorderButton = ({ textContent, textColor }) => {
  return (
    <button
      className={
        "uppercase text-center  font-ondo font-extrabold xl:h-[3.7em] xl:w-[12em] lg:h-[3.375em] lg:w-[11.25em] md:h-[4.375em] md:w-[12em] -skew-x-12 xl:text-[1.25rem] lg:text-[1.063rem]  h-[3.751em] w-5/6 text-[0.744rem] gradient-border hover:scale-105 transition-all delay-100"
      }
    >
      <div className={"skew-x-12 bg-transparent"}>
        <span
          className={`${
            textColor
              ? textColor
              : "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text"
          } xl:text-[20px] lg:text-[17px] text-[11.897px]`}
        >
          {textContent}
        </span>
      </div>
    </button>
  );
};

export default GradientBorderButton;
