const Carousel = () => {
  return (
    <section>
      <div className="pb-10 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mx-auto">
            <img
              src={"/assets/carousel/game-carousel.png"}
              alt={"carousel"}
              className={"w-full z-50 relative"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
