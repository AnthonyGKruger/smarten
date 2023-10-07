import GradientButton from "../ui/GradientButton";
import GradientBorderButton from "../ui/GradientBorderButton";

const MobileBannerActions = () => {
  return (
    <div className="grid grid-cols-4   mt-24  w-4/6 md:hidden text-white mx-auto">
      <div className="col-span-2 ">
        <GradientButton textContent={"buy now"} />
      </div>

      <div className="col-span-2">
        <GradientBorderButton textContent={"play now"} />
      </div>
    </div>
  );
};

export default MobileBannerActions;
