const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#2D1E6B] relative xl:h-[529px] h-[734px] font-lato ">
      <img
        src={"/assets/footer/footer-image.png"}
        alt={"footer"}
        className={
          "mix-blend-color-dodge absolute xl:object-contain h-full object-center object-cover"
        }
      />
      <div
        className={`absolute  -top-5 inline-flex items-center gap-x-14 xl:h-[100px] w-[1989px] -ml-[200px]  text-white xl:text-[34.039px] bg-gradient-to-b from-[#2D1E6B] via-[#2D1E6B] to-transparent`}
      >
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold xl:mt-0 mt-2"}>
            Gaming Spanning
          </span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold xl:mt-0 mt-2"}>
            Action - Packed
          </span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold xl:mt-0 mt-2"}>
            {" "}
            Mind - Bending
          </span>
        </div>
        <div className=" inline-flex ">
          <img
            src={"/assets/Star 1.svg"}
            alt={"star"}
            className={"h-1/2 mr-6"}
          />{" "}
          <span className={"uppercase font-extrabold xl:mt-0 mt-2"}>
            Collection og games
          </span>
        </div>
      </div>
      <div className=" xl:pt-52 pt-24 text-sm">
        <div className="container mr-auto xl:ml-20 ml-5 xl:pr-52">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div
              className="col-span-4 md:col-span-8 lg:col-span-4 -mt-8"
              aria-labelledby="footer-header"
            >
              <a
                id="logo"
                aria-label="logo"
                aria-current="page"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 mb-3"
                href="http://localhost:3000"
              >
                <img src={"/assets/nav/Vector.svg"} alt={"nav icon"} />

                <span className={"font-ondo font-[800] text-3xl text-white"}>
                  board
                </span>
              </a>

              <p className={"text-lg p-3"}>
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals .
              </p>
            </div>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-product-5-logo"
            >
              <h3
                className="mb-6 text-base font-extrabold uppercase font-lato text-white"
                id="footer-product-5-logo"
              >
                Company
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    Products
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    Apps & Games
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-docs-5-logo"
            >
              <h3
                className="mb-6 text-base font-extrabold font-lato uppercase text-white"
                id="footer-docs-5-logo"
              >
                help
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-2"
              aria-labelledby="footer-about-5-logo"
            >
              <h3
                className="mb-6 text-base font-extrabold font-lato text-white uppercase"
                id="footer-about-5-logo"
              >
                Resources
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    Youtube Playlist
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    How To - Blog
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="http://localhost:3000"
                    className="transition-colors duration-300 text-lg"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={
          "absolute xl:bottom-8 bottom-5 xl:left-20 left-10 font-lato xl:text-xs text-sm"
        }
      >
        <p>© Copyright 2023, All Rights Reserved by board</p>
      </div>
    </footer>
  );
};

export default Footer;

//
//
// const Footer = () => {
//   return (
//     <footer className="w-full text-white bg-[#2D1E6B] relative h-[529px] font-lato">
//       <img
//         src={"/assets/footer/footer-image.png"}
//         alt={"footer"}
//         className={
//           "mix-blend-color-dodge absolute xl:object-contain"
//         }
//       />
//       <div
//         className={`absolute  -top-5 inline-flex items-center gap-x-14 xl:h-[100px] w-[1989px] -ml-[200px]  text-white text-[34.039px] bg-gradient-to-b from-[#2D1E6B] via-[#2D1E6B] to-transparent`}
//       >
//         <div className=" inline-flex ">
//           <img
//             src={"/assets/Star 1.svg"}
//             alt={"star"}
//             className={"h-1/2 mr-6"}
//           />{" "}
//           <span className={"uppercase font-extrabold "}>Gaming Spanning</span>
//         </div>
//         <div className=" inline-flex ">
//           <img
//             src={"/assets/Star 1.svg"}
//             alt={"star"}
//             className={"h-1/2 mr-6"}
//           />{" "}
//           <span className={"uppercase font-extrabold "}>Action - Packed</span>
//         </div>
//         <div className=" inline-flex ">
//           <img
//             src={"/assets/Star 1.svg"}
//             alt={"star"}
//             className={"h-1/2 mr-6"}
//           />{" "}
//           <span className={"uppercase font-extrabold "}> Mind - Bending</span>
//         </div>
//         <div className=" inline-flex ">
//           <img
//             src={"/assets/Star 1.svg"}
//             alt={"star"}
//             className={"h-1/2 mr-6"}
//           />{" "}
//           <span className={"uppercase font-extrabold "}>
//             Collection og games
//           </span>
//         </div>
//       </div>
//       <div className=" pt-52  text-sm">
//         <div className="container mr-auto ml-20 pr-52">
//           <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
//             <div
//               className="col-span-4 md:col-span-8 lg:col-span-4 -mt-8"
//               aria-labelledby="footer-header"
//             >
//               <a
//                 id="logo"
//                 aria-label="logo"
//                 aria-current="page"
//                 className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 mb-3"
//                 href="http://localhost:3000"
//               >
//                 <img src={"/assets/nav/Vector.svg"} alt={"nav icon"} />
//
//                 <span className={"font-ondo font-[800] text-3xl text-white"}>
//                   board
//                 </span>
//               </a>
//
//               <p className={"text-lg p-3"}>
//                 A well-designed gaming header often incorporates elements such
//                 as game characters, iconic symbols, vibrant colors, and dynamic
//                 visuals .
//               </p>
//             </div>
//             <nav
//               className="col-span-2 md:col-span-4 lg:col-span-2"
//               aria-labelledby="footer-product-5-logo"
//             >
//               <h3
//                 className="mb-6 text-base font-extrabold uppercase font-lato text-white"
//                 id="footer-product-5-logo"
//               >
//                 Company
//               </h3>
//               <ul>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     Products
//                   </a>
//                 </li>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     Apps & Games
//                   </a>
//                 </li>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     Features
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//             <nav
//               className="col-span-2 md:col-span-4 lg:col-span-2"
//               aria-labelledby="footer-docs-5-logo"
//             >
//               <h3
//                 className="mb-6 text-base font-extrabold font-lato uppercase text-white"
//                 id="footer-docs-5-logo"
//               >
//                 help
//               </h3>
//               <ul>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     Support
//                   </a>
//                 </li>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     About
//                   </a>
//                 </li>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//             <nav
//               className="col-span-2 md:col-span-4 lg:col-span-2"
//               aria-labelledby="footer-about-5-logo"
//             >
//               <h3
//                 className="mb-6 text-base font-extrabold font-lato text-white uppercase"
//                 id="footer-about-5-logo"
//               >
//                 Resources
//               </h3>
//               <ul>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     Youtube Playlist
//                   </a>
//                 </li>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     How To - Blog
//                   </a>
//                 </li>
//                 <li className="mb-2 leading-6">
//                   <a
//                     href="http://localhost:3000"
//                     className="transition-colors duration-300 text-lg"
//                   >
//                     Terms & Conditions
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//       <div className={"absolute bottom-8 left-20 font-lato text-xs"}>
//         <p>© Copyright 2023, All Rights Reserved by board</p>
//       </div>
//     </footer>
//   );
// };
//
// export default Footer;