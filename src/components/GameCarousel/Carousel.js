// import React, { useEffect } from "react";
// import Glide from "@glidejs/glide";
// import gameImage1 from "../../assets/game-carousel-image-1.png";
// import gameImage2 from "../../assets/game-carousel-image-2.png";
// import gameImage3 from "../../assets/game-carousel-image-3.png";
//
// const Carousel = () => {
//   useEffect(() => {
//     const slider = new Glide(".glide-03", {
//       type: "carousel",
//       focusAt: "center",
//       perView: 3,
//       autoplay: 3000,
//       animationDuration: 700,
//       gap: 24,
//       classNames: {
//         nav: {
//           active: "[&>*]:bg-wuiSlate-700",
//         },
//       },
//       breakpoints: {
//         1024: {
//           perView: 2,
//         },
//         640: {
//           perView: 1,
//         },
//       },
//     }).mount();
//
//     return () => {
//       slider.destroy();
//     };
//   }, []);
//
//   return (
//     <>
//       {/*<!-- Component: Carousel with indicators outside --> */}
//       <div className="glide-03 relative w-full">
//         {/*    <!-- Slides --> */}
//         <div className="overflow-hidden" data-glide-el="track">
//           <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
//             <li>
//               <img
//                 src={gameImage1}
//                 className="m-auto max-h-full w-full max-w-full"
//                 alt={"game"}
//               />
//             </li>
//             <li>
//               <img
//                 src={gameImage2}
//                 className="m-auto max-h-full w-full max-w-full"
//                 alt={"game"}
//               />
//             </li>
//             <li>
//               <img
//                 src={gameImage3}
//                 className="m-auto max-h-full w-full max-w-full"
//                 alt={"game"}
//               />
//             </li>
//           </ul>
//         </div>
//         {/*    <!-- Indicators --> */}
//         {/*  <div*/}
//         {/*    className="flex w-full items-center justify-center gap-2"*/}
//         {/*    data-glide-el="controls[nav]"*/}
//         {/*  >*/}
//         {/*    <button*/}
//         {/*      className="group p-4"*/}
//         {/*      data-glide-dir="=0"*/}
//         {/*      aria-label="goto slide 1"*/}
//         {/*    >*/}
//         {/*      <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
//         {/*    </button>*/}
//         {/*    <button*/}
//         {/*      className="group p-4"*/}
//         {/*      data-glide-dir="=1"*/}
//         {/*      aria-label="goto slide 2"*/}
//         {/*    >*/}
//         {/*      <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
//         {/*    </button>*/}
//         {/*    <button*/}
//         {/*      className="group p-4"*/}
//         {/*      data-glide-dir="=2"*/}
//         {/*      aria-label="goto slide 3"*/}
//         {/*    >*/}
//         {/*      <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
//         {/*    </button>*/}
//         {/*    <button*/}
//         {/*      className="group p-4"*/}
//         {/*      data-glide-dir="=3"*/}
//         {/*      aria-label="goto slide 4"*/}
//         {/*    >*/}
//         {/*      <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>*/}
//         {/*    </button>*/}
//         {/*  </div>*/}
//       </div>
//       {/*<!-- End Carousel with indicators outside --> */}
//     </>
//   );
// };
//
// export default Carousel;

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import gameImage1 from "../../assets/game-carousel-image-1.png";
import gameImage2 from "../../assets/game-carousel-image-2.png";
import gameImage3 from "../../assets/game-carousel-image-3.png";

const Carousel = () => {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      // breakpoints: {
      //   1440: {
      //     perView: 2,
      //   },
      //   768: {
      //     perView: 1,
      //   },
      // },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-03 relative xl:w-[1440px] w-[768] mx-auto pb-16">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap relative flex w-full overflow-hidden p-0">
            <li className="carousel-item">
              <img
                src={gameImage1}
                alt={"game"}
                className="object-cover xl:h-[366px] xl:w-[451px] h-[188px] w-[232px] transition-all ease-in-out"
              />
            </li>
            <li className="carousel-item">
              <img
                src={gameImage2}
                alt={"game"}
                className="object-cover xl:h-[366px] xl:w-[451px] h-[188px] w-[232px] transition-all ease-in-out"
              />
            </li>
            <li className="carousel-item">
              <img
                src={gameImage3}
                alt={"game"}
                className="object-cover xl:h-[366px] xl:w-[451px] h-[188px] w-[232px] transition-all ease-in-out"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Carousel;
