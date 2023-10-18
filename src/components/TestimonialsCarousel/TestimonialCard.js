const TestimonialCard = ({ review, avatar, author, company }) => {
  return (
    // <div className="col-span-2 relative xl:mt-0 mt-10">
    // <div className="testimonial-card-container h-96">
    <div className=" rounded-lg text-white shadow shadow-slate-500 sm:flex-row bg-gradient-to-t from-[#352770] to-[#403077] backdrop-blur-[1.563em] z-30 relative grow">
      <div className="xl:px-8 px-5 pt-14 pb-3 flex  flex-col justify-between">
        <div className="absolute xl:-top-16 -top-12 xl:right-2 right-2 mt-2 mr-2">
          <img
            src="/assets/testimonials/testimonial-badge-1.svg"
            alt="Badge 1"
            className="h-14 w-14 xl:h-20 xl:w-20 mr-2 "
          />
        </div>

        <div className="absolute xl:-top-16 -top-12 xl:right-2 right-2 mt-2 mr-2">
          <img
            src="/assets/testimonials/testimonial-badge-2.svg"
            alt="Badge 2"
            className="h-14 w-14 xl:h-20 xl:w-20 xl:mr-16 mr-12"
          />
        </div>

        <div>
          <img
            src="/assets/testimonials/Group 37.svg"
            alt="stars"
            className={"mx-auto xl:mx-0 mb-3 xl:mb-0"}
          />
        </div>
        <header className="mb-4 text-white font-lato text-md">
          <p
            className={
              "mb-4 mt-2 tracking-wide text-center xl:text-left text-md"
            }
          >
            {review}
          </p>

          <img
            src={"/assets/testimonials/testimonial-stripe.svg"}
            alt={"stripe"}
          />

          <div className={"flex gap-4 mt-4 items-center"}>
            <a
              href="http://localhost:3000"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src={avatar}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <p className="text-md">{author}</p>
              <p className="text-xs">{company}</p>
            </div>
            <div
              className={
                "ml-auto inline-flex mt-4 items-end text-xs xl:text-md"
              }
            >
              <img
                src="/assets/testimonials/Vector-37.svg"
                alt="verified"
                className="h-5 mt-1"
              />
              Verified
            </div>
          </div>
        </header>
      </div>
    </div>
    // </div>
  );
};

export default TestimonialCard;
