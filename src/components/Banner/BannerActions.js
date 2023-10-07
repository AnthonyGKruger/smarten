import GradientButton from "../ui/GradientButton";
import GradientBorderButton from "../ui/GradientBorderButton";

const BannerActions = () => {
  return (
    <div className=" grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mt-5 xl:w-[480px] lg:w-[380px] w-[340px] hidden md:grid">
      <div className="col-span-4 lg:col-span-6">
        <GradientButton textContent={"buy now"} />
      </div>

      <div className="col-span-4 lg:col-span-6">
        <GradientBorderButton textContent={"play now"} />
      </div>
    </div>
  );
};

export default BannerActions;
