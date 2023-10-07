const GradientBorderButton = ({ textContent }) => {
  return (
    <button
      className={
        "uppercase text-center font-ondo font-extrabold xl:h-[74px] xl:w-[232px] lg:h-[54px] lg:w-[180px] md:h-[54px] md:w-[160px] h-[44.017px] w-5/6 -skew-x-12 gradient-border"
      }
    >
      <div className={"skew-x-12 bg-transparent"}>
        <span
          className={
            "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text xl:text-[20px] lg:text-[17px] text-[11.897px]"
          }
        >
          {textContent}
        </span>
      </div>
    </button>
  );
};

export default GradientBorderButton;
