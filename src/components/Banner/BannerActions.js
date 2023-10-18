import GradientButton from "../ui/GradientButton";
import GradientBorderButton from "../ui/GradientBorderButton";

const BannerActions = () => {
  return (
    <div className=" grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:mt-5 mt-5 xl:w-[30em] lg:w-[23.75em] md:w-[18em] w-[21.25em] hidden md:grid">
      <div className="col-span-4 lg:col-span-6">
        <GradientButton
          textContent={"buy now"}
          redirectTo={() => {
            window.location.hash = "#games";
          }}
        />
      </div>

      <div className="col-span-4 lg:col-span-6">
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

export default BannerActions;
