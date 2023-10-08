const FiltersTitle = () => {
  const gradientButtonClasses =
    "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold xl:h-[74px] xl:w-[232px] lg:h-[54px] lg:w-[180px] md:h-[54px] md:w-[160px] h-[44.017px] w-full -skew-x-12 xl:text-[20px] text-xs";

  const gradientBorderButtonClasses =
    "uppercase text-center font-ondo font-extrabold xl:h-[74px] xl:w-[232px] lg:h-[54px] lg:w-[180px] md:h-[54px] md:w-[160px] h-[44.017px] w-full -skew-x-12 gradient-border text-xs";

  return (
    <div className="container xl:px-44 px-5 m-auto mx-auto xl:py-14">
      <div className="grid grid-cols-4 xl:gap-10 gap-1 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-12 mx-auto text-center mb-5">
          <h4
            className={
              "xl:text-6xl text-4xl font-ondo font-extrabold text-white xl:w-3/4 mx-auto leading-2 uppercase"
            }
          >
            Welcome to the top{" "}
            <span
              className={
                "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text "
              }
            >
              games
            </span>
          </h4>
        </div>

        <div className="col-span-1 md:col-span-8 lg:col-span-3 mx-auto text-center text-white gap-2 ">
          <button className={gradientButtonClasses}>
            <div className={"skew-x-12"}>newest games</div>
          </button>
        </div>

        <div className="col-span-1 md:col-span-8 lg:col-span-3 mx-auto text-center">
          <button className={gradientBorderButtonClasses}>
            <div className={"skew-x-12 bg-transparent"}>
              <span
                className={`text-white xl:text-[20px] lg:text-[17px] text-[11.897px]`}
              >
                Latest games
              </span>
            </div>
          </button>
        </div>

        <div className="col-span-1 md:col-span-8 lg:col-span-3 mx-auto text-center">
          <button className={gradientBorderButtonClasses}>
            <div className={"skew-x-12 bg-transparent"}>
              <span
                className={`text-white xl:text-[20px] lg:text-[17px] text-[11.897px]`}
              >
                Fight games
              </span>
            </div>
          </button>
        </div>

        <div className="col-span-1 md:col-span-8 lg:col-span-3 mx-auto text-center">
          <button className={gradientBorderButtonClasses}>
            <div className={"skew-x-12 bg-transparent"}>
              <span
                className={`text-white xl:text-[20px] lg:text-[17px] text-[11.897px]`}
              >
                Sport Games
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersTitle;
