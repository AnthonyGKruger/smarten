import GradientButton from "../ui/GradientButton";
import GradientBorderButton from "../ui/GradientBorderButton";

const CarouselActions = () => {
  return (
    <div className="grid-cols-8 gap-6 md:grid-cols-8 lg:grid-cols-12  lg:w-2/5 xl:w-5/12 md:w-5/12 w-2/3 grid mx-auto xl:p-14 pb-5 z-50 relative">
      <div className="col-span-4 lg:col-span-6">
        <GradientButton
          textContent={"View All"}
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

export default CarouselActions;
