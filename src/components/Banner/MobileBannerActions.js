import GradientButton from "../ui/GradientButton";
import GradientBorderButton from "../ui/GradientBorderButton";

const MobileBannerActions = () => {
  return (
    <div className="grid grid-cols-4 mt-12 w-4/6 md:hidden text-white mx-auto">
      <div className="col-span-2 ">
        <GradientButton
          textContent={"buy now"}
          redirectTo={() => {
            window.location.hash = "#games";
          }}
        />
      </div>

      <div className="col-span-2">
        <GradientBorderButton
          textContent={"play now"}
          redirectTo={() => {
            window.location.hash = "#play-now";
          }}
        />
      </div>
    </div>
  );
};

export default MobileBannerActions;
