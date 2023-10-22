import TestimonialCard from "./TestimonialCard";
import Glide from "@glidejs/glide";
import { useEffect, useState } from "react";
import StarBannerNoBackground from "../ui/StarBannerNoBackground";
import axios from "axios";

const TestimonialsCarousel = () => {
  const [state, setState] = useState(null);

  const flag = state !== null;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}testimonials`)
      .then((res) => {
        setState(res.data.testimonials);
      });

    if (state !== null) {
      const slider = new Glide(".testimonial-carousel", {
        type: "carousel",
        focusAt: "center",
        perView: 1,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classNames: {
          nav: {
            active: "[&>*]:bg-wuiSlate-700",
          },
        },
        breakpoints: {
          1024: {
            perView: 1,
          },
          640: {
            perView: 1,
          },
        },
      }).mount();

      return () => {
        slider.destroy();
      };
    }
  }, [flag]);

  return (
    <section className={"py-10 px-24 bg-[#2D1E6B]"}>
      <StarBannerNoBackground />

      <div className="testimonial-carousel relative lg:w-1/2 w-full mt-24 ">
        <div className="" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full  p-0 overflow-hidden py-14">
            {state !== null &&
              state.map((review, idx) => {
                return (
                  <li key={idx}>
                    <TestimonialCard
                      review={review.review}
                      avatar={review.avatar}
                      author={review.author}
                      company={review.company}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className={"w-full mb-14"}>
        <img
          src={
            "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/testimonials/Group+41.svg"
          }
          alt={"indicators"}
          className={"mx-auto mt-16"}
        />
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
