import TestimonialCard from "./TestimonialCard";

const TestimonialsCarousel = () => {
  return (
    <section className={"py-10 bg-[#2D1E6B]"}>
      <div
        className={`inline-flex items-center gap-x-14 2xl:gap-x-28 xl:h-[3.125em] w-[124.313em] 2xl:w-[187.5em] 2xl:-ml-0 -ml-[12.5em] mt-16 text-white text-[2.127rem] `}
      >
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}>Gaming Spanning</span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}>Action - Packed</span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}> Mind - Bending</span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold "}>
            Collection og games
          </span>
        </div>
      </div>
      <div className="container xl:px-16 px-8 m-auto mt-28">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          <TestimonialCard
            review={
              "One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance."
            }
            avatar={"/assets/testimonials/Ellipse 12.svg"}
            author={"Arlene McCoy"}
            company={"McDonald's"}
          />
          <TestimonialCard
            review={
              "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming."
            }
            avatar={"/assets/testimonials/Ellipse 13.svg"}
            author={"Kathryn Murphy"}
            company={"General Electric"}
          />
        </div>
      </div>

      <div className={"w-full mb-14"}>
        <img
          src={"/assets/testimonials/Group 41.svg"}
          alt={"indicators"}
          className={"mx-auto mt-16"}
        />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
