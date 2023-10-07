const MobileBannerStats = () => {
  return (
    <div className="grid grid-cols-12 gap-6  mt-5  w-[350px] md:hidden text-white pb-5 mx-auto">
      <div className="col-span-4 text-center">
        <p className={" font-extrabold "}>300+</p>
        <p className={"  text-[12.715px]"}>Unique Style</p>
      </div>
      <div className="col-span-4 text-center">
        <p
          className={
            "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text font-extrabold "
          }
        >
          200+
        </p>
        <p className={"  text-[12.715px]"}>Project Finished</p>
      </div>
      <div className="col-span-4 text-center">
        <p className={" font-extrabold "}>500+</p>
        <p className={" text-[12.715px]"}>Happy Customer</p>
      </div>
    </div>
  );
};

export default MobileBannerStats;
