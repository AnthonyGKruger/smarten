import MobileBannerActions from "./MobileBannerActions";
import MobileBannerStats from "./MobileBannerStats";
import DesktopBannerContent from "./DesktopBannerContent";

const Banner = () => {
  return (
    <section className={"flex bg-[#2D1E6B] "}>
      <div className={"md:grow"}>
        <DesktopBannerContent />
        <MobileBannerActions />
        <MobileBannerStats />
      </div>
    </section>
  );
};

export default Banner;
