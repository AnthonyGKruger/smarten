const BannerStats = () => {
  return (
    <div className=" grid-cols-12 gap-6 md:grid-cols-12 lg:grid-cols-12 mt-5 xl:w-[500px] lg:w-[400px] w-[350px] hidden md:grid">
      <div className="col-span-4 text-center">
        <p className={" font-extrabold xl:text-[30px] lg:text-[20px]"}>300+</p>
        <p className={" xl:text-[18.715px] lg:text-[14.715px] text-[12.715px]"}>
          Unique Style
        </p>
      </div>
      <div className="col-span-4 text-center">
        <p
          className={
            "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text font-extrabold xl:text-[30px] lg:text-[20px]"
          }
        >
          200+
        </p>
        <p className={" xl:text-[18.715px] lg:text-[14.715px] text-[12.715px]"}>
          Project Finished
        </p>
      </div>
      <div className="col-span-4 text-center">
        <p className={" font-extrabold xl:text-[30px] lg:text-[20px]"}>500+</p>
        <p className={" xl:text-[18.715px] lg:text-[14.715px] text-[12.715px]"}>
          Happy Customer
        </p>
      </div>
    </div>
  );
};

export default BannerStats;
