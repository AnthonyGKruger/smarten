const MobileBannerActions = () => {
  return (
    <div className="grid grid-cols-4 gap-6  mt-14  w-[280px] md:hidden text-white mx-auto">
      <div className="col-span-2 ">
        <button
          className={
            "uppercase text-center bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] font-ondo font-extrabold  " +
            " h-[44.017px] w-[138px] -skew-x-12 ] text-[11.897px]"
          }
        >
          <div className={"skew-x-12"}>buy now</div>
        </button>
      </div>

      <div className="col-span-2">
        <button
          className={
            "uppercase text-center font-ondo font-extrabold h-[44.017px] w-[138px] -skew-x-12 gradient-border"
          }
        >
          <div className={"skew-x-12 bg-transparent"}>
            <span
              className={
                "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text text-[11.897px]"
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

export default MobileBannerActions;
