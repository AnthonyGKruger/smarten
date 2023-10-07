const GradientButton = ({ textContent }) => {
  return (
    <button
      className={
        "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold xl:h-[74px] xl:w-[232px] " +
        "lg:h-[54px] lg:w-[180px] md:h-[54px] md:w-[160px] -skew-x-12 xl:text-[20px] lg:text-[17px]  h-[44.017px] w-5/6 text-[11.897px]"
      }
    >
      <div className={"skew-x-12"}>{textContent}</div>
    </button>
  );
};

export default GradientButton;
