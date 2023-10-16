const GradientButton = ({ textContent }) => {
  return (
    <button
      className={
        "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold xl:h-[3.7em] xl:w-[12em] " +
        "lg:h-[3.375em] lg:w-[11.25em] md:h-[4.375em] md:w-[12em] -skew-x-12 xl:text-[1.25rem] lg:text-[1.063rem]  h-[3.751em] w-5/6 text-[0.744rem] hover:scale-105 transition-all duration-300"
      }
    >
      <div className={"skew-x-12"}>{textContent}</div>
    </button>
  );
};

export default GradientButton;
