import GradientButton from "../ui/GradientButton";
import GradientBorderButton from "../ui/GradientBorderButton";

const CarouselActions = () => {
  return (
    <div className="grid-cols-8 gap-6 md:grid-cols-8 lg:grid-cols-12  xl:w-2/5 lg:w-[380px] w-2/3 grid mx-auto xl:p-14 pb-5">
      <div className="col-span-4 lg:col-span-6">
        <GradientButton textContent={"View All"} />
      </div>

      <div className="col-span-4 lg:col-span-6">
        <GradientBorderButton textContent={"play now"} />
      </div>
    </div>
  );
};

export default CarouselActions;