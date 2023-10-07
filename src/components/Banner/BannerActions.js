const BannerActions = () => {
  return (
    <div className=" grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mt-5 xl:w-[480px] lg:w-[380px] w-[340px] hidden md:grid">
      <div className="col-span-4 lg:col-span-6">
        <button
          className={
            "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold xl:h-[74px] xl:w-[232px] " +
            "lg:h-[54px] lg:w-[180px] h-[54px] w-[160px] -skew-x-12 xl:text-[20px] lg:text-[17px]"
          }
        >
          <div className={"skew-x-12"}>buy now</div>
        </button>
      </div>

      <div className="col-span-4 lg:col-span-6">
        <button
          className={
            "uppercase text-center font-ondo font-extrabold xl:h-[74px] xl:w-[232px] lg:h-[54px] lg:w-[180px] h-[54px] w-[160px] -skew-x-12 gradient-border"
          }
        >
          <div className={"skew-x-12 bg-transparent"}>
            <span
              className={
                "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text xl:text-[20px] lg:text-[17px] "
              }
            >
              play now
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BannerActions;
