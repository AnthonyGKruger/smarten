const Footer = () => {
  return (
    <footer className="w-full text-white bg-[#2D1E6B] relative 2xl:h-[44em] lg:h-[33.063em] md:h-[50em] h-[60em] font-lato mix-blend-color-dodge">
      <img
        src={"/assets/footer/footer-image.png"}
        alt={"footer"}
        className={
          " absolute 2xl:object-contain xl:object-contain h-full 2xl:h-[44em] object-center object-cover -z-50"
        }
      />
      <div
        className={`absolute inline-flex items-center gap-x-14 2xl:gap-x-28 xl:h-[2.125em] w-[124.313em] 2xl:w-[187.5em] 2xl:-ml-0 -ml-[7em]  text-white xl:text-[2.127em]   bg-gradient-to-b from-[#352770] to-transparent backdrop-blur-[1.563em]`}
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
      <div className="md:px-10 px-8 xl:px-0 xl:pt-52 pt-24 text-sm ">
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
                <img src={"/assets/icon.png"} alt={"nav icon"} />

                <span
                  className={"font-ondo font-extrabold text-3xl text-white"}
                >
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

      <div className="md:px-8 px-12 xl:py-0 md:py-14 2xl:pt-20 2xl:-ml-14 z-50">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-x-12 gap-y-6 mt-6">
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Vector.svg"}
              alt={"partners"}
              className={"h-6"}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Group.svg"}
              alt={"partners"}
              className={"h-6"}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Vector-2.svg"}
              alt={"partners"}
              className={"h-6"}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Group-2.svg"}
              alt={"partners"}
              className={"h-6"}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Group 1000001744.svg"}
              alt={"partners"}
              className={"h-6"}
            />
          </div>
          <div className={"grid sm:hidden"}>
            <div className="grid grid-cols-3 gap-6 ">
              <div className="col-span-4">
                <div className={"grid grid-cols-4 gap-2"}>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/1.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-105 transition-all delay-100"}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/2.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-105 transition-all delay-100"}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/3.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-105 transition-all delay-100"}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/4.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-105 transition-all delay-100"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          "absolute xl:bottom-8 bottom-2 xl:left-20 left-10 font-lato xl:text-xs text-sm "
        }
      >
        `{" "}
        <div className="container xl:px-6 m-auto grid grid-cols-3 gap-2">
          <div className={"xl:col-span-1 col-span-3 hidden sm:grid"}>
            <div className="grid grid-cols-3 gap-6 ">
              <div className="col-span-4">
                <div className={"grid grid-cols-4 gap-2"}>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/1.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-110 transition-all delay-100"}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/2.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-110 transition-all delay-100"}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/3.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-110 transition-all delay-100"}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/4.svg"}
                      alt={"social-icon"}
                      className={"hover:scale-110 transition-all delay-100"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 col-span-3 mt-2">
            <p>© Copyright 2023, All Rights Reserved by board</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
