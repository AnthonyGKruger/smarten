const BannerStats = () => {
  return (
    <div className=" grid-cols-12 gap-6 md:grid-cols-12 lg:grid-cols-12 mt-5 xl:w-[31.25em] lg:w-[25em] w-[18.875em] hidden md:grid">
      <div className="col-span-4 text-center">
        <p className={"font-extrabold xl:text-[1.5rem] lg:text-[1.25rem]"}>
          300+
        </p>
        <p className={"xl:text-[1rem] lg:text-[0.9rem] text-[0.65rem]"}>
          Unique Style
        </p>
      </div>
      <div className="col-span-4 text-center">
        <p
          className={
            "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text font-extrabold xl:text-[1.5rem] lg:text-[1.25rem]"
          }
        >
          200+
        </p>
        <p className={"xl:text-[1rem] lg:text-[0.9rem] text-[0.65rem]"}>
          Project Finished
        </p>
      </div>
      <div className="col-span-4 text-center">
        <p className={"font-extrabold xl:text-[1.5rem] lg:text-[1.25rem]"}>
          500+
        </p>
        <p className={"xl:text-[1rem] lg:text-[0.9rem] text-[0.65rem]"}>
          Happy Customer
        </p>
      </div>
    </div>
  );
};

export default BannerStats;
