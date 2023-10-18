const MobileBannerContent = () => {
  return (
    <div className="overflow-hidden bg-[#000000] text-white pt-20 md:hidden">
      <div className="bg-[#000000]">
        {/*<div className="p-6">*/}
        <header className="absolute p-6">
          <div className={"w-full"}>
            <h1
              className={
                "uppercase font-extrabold tracking-[0.172rem] leading-[2.2rem] not-italic banner-title"
              }
            >
              Let your mind{" "}
              <span
                className={
                  "bg-gradient-to-r from-[#6542F4] via-[#F976FF] to-[#B50098] text-transparent bg-clip-text"
                }
              >
                explore
              </span>{" "}
              new world
            </h1>
          </div>
          <div className={"pt-2 w-full"}>
            <p className={"banner-text"}>
              Playing electronic games, whether through consoles, computers,
              mobile phones or another medium altogether. Gaming is a nuanced
              term that suggests regular gameplay, possibly as a hobby.
            </p>
          </div>
        </header>
        <figure className={"pt-44"}>
          <img
            src={"/assets/banner/banner-image.png"}
            alt={"banner"}
            className={"h-[28em] object-cover object-right-top -mr-20"}
          />
        </figure>
      </div>
    </div>
  );
};

export default MobileBannerContent;
