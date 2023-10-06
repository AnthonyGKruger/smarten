const MobileBanner = () => {
  return (
    <div
      className={"h-screen w-screen bg-[#2D1E6B] relative sm:visible invisible"}
    >
      <div
        className={
          "absolute rounded-full bg-[#DD00B8] w-[341px] h-[341px] blur-[292px]"
        }
      ></div>
      <div
        className={
          "absolute bg-[url('./assets/banner-image.png')] mix-blend-color-dodge h-screen w-screen"
        }
      ></div>
    </div>
  );
};

export default MobileBanner;
