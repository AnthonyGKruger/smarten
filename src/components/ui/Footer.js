import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Footer = () => {
  const randomId = Math.floor(Math.random() * 100) + 1;

  useEffect(() => {
    const slider = new Glide(`.star-banner-${randomId}`, {
      type: "carousel",
      autoplay: 1,
      animationDuration: 5000,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 2,
          // gap: 10,
        },
        325: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, [randomId]);

  const spanClasses =
    "uppercase inline-flex font-extrabold lg:mt-2 md:mt-3 mt-3 banner-item lg:text-3xl md:text-2xl text-sm";
  const liClasses = "inline-flex uppercase font-extrabold ";
  const imgClasses =
    "md:h-1/2 h-1/4 mr-6 md:mt-0 md:mt-2 lg:mt-1 justify-center items-center";

  return (
    <footer className="w-full text-white  relative 2xl:h-[44em] lg:h-[32em] md:h-[50em] h-[60em] font-lato ">
      <img
        src={"/assets/footer/footer-image.png"}
        alt={"footer"}
        className={
          " absolute 2xl:object-contain xl:object-contain h-full 2xl:h-[44em] object-center object-cover -z-50 "
        }
      />

      <div
        className={
          "absolute 2xl:object-contain xl:object-contain h-full 2xl:h-[44em] object-center object-cover -z-50 mix-blend-color-dodge bg-[#2D1E6B]"
        }
      ></div>

      <div
        className={`star-banner-${randomId} relative w-full text-white z-50`}
      >
        <div data-glide-el="track">
          <ul
            className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d]
          [touch-action: pan-Y] [will-change: transform] overflow-hidden p-0 inline-flex items-center gap-x-2
         2xl:w-[150em] xl:w-[200vw]  lg:w-[80em] w-[60em] lg:-ml-[8em] md:w-[60em] md:-ml-[6em] -ml-[12em]
          xl:h-[5.625em] lg:h-[4.375em] h-[4.375em]
           text-white border-t-1 border-slate-700  bg-gradient-to-b from-[#352770] to-transparent backdrop-blur-[1.563em] isolate z-50 star-banner"
          >
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}>Gaming Spanning</span>
            </li>
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}>Action - Packed</span>
            </li>
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}> Mind - Bending</span>
            </li>
            <li className={liClasses}>
              <img
                src={"/assets/Star 1.svg"}
                alt={"star"}
                className={imgClasses}
              />{" "}
              <span className={spanClasses}>Collection og games</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:px-10 px-8 xl:px-0 xl:pt-24 pt-24 text-sm ">
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
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 mb-3 cursor-pointer"
                href="https://ezdev.solutions"
                target={"_blank"}
                rel={"noreferrer"}
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
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Products
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Apps & Games
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
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
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    About
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
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
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Youtube Playlist
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    How To - Blog
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="https://ezdev.solutions"
                    className="transition-colors duration-300 text-lg cursor-pointer"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="md:px-8 px-12 xl:py-0 md:py-4 2xl:pt-20 2xl:-ml-14 z-50">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-x-12 gap-y-6 mt-6">
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Vector.svg"}
              alt={"partners"}
              className={
                "h-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              }
              onClick={() => {
                window.open("https://www.twitch.tv", "_blank");
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Group.svg"}
              alt={"partners"}
              className={
                "h-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              }
              onClick={() => {
                window.open("https://www.roblox.com", "_blank");
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Vector-2.svg"}
              alt={"partners"}
              className={
                "h-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              }
              onClick={() => {
                window.open("https://www.asus.com/za/", "_blank");
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Group-2.svg"}
              alt={"partners"}
              className={
                "h-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              }
              onClick={() => {
                window.open("https://www.canon.co.za", "_blank");
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={"/assets/footer/companies/Group 1000001744.svg"}
              alt={"partners"}
              className={
                "h-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              }
              onClick={() => {
                window.open("https://www.microsoft.com/en-za/", "_blank");
              }}
            />
          </div>
          <div className={"grid sm:hidden"}>
            <div className="grid grid-cols-3 gap-6 ">
              <div className="col-span-4">
                <div className={"grid grid-cols-4 gap-2"}>
                  <div
                    className={"col-span-1"}
                    onClick={() => {
                      window.open("https://twitter.com", "_blank");
                    }}
                  >
                    <img
                      src={"/assets/footer/1.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open("https://twitter.com", "_blank");
                      }}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/2.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open("https://www.facebook.com", "_blank");
                      }}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/3.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open("https://www.instagram.com", "_blank");
                      }}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/4.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open(
                          "https://github.com/AnthonyGKruger/smarten",
                          "_blank",
                        );
                      }}
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
                  <div
                    className={"col-span-1"}
                    onClick={() => {
                      window.open("https://twitter.com", "_blank");
                    }}
                  >
                    <img
                      src={"/assets/footer/1.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open("https://twitter.com", "_blank");
                      }}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/2.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open("https://www.facebook.com", "_blank");
                      }}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/3.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open("https://www.instagram.com", "_blank");
                      }}
                    />
                  </div>
                  <div className={"col-span-1"}>
                    <img
                      src={"/assets/footer/4.svg"}
                      alt={"social-icon"}
                      className={
                        "hover:scale-105 transition-all delay-100 cursor-pointer"
                      }
                      onClick={() => {
                        window.open(
                          "https://github.com/AnthonyGKruger/smarten",
                          "_blank",
                        );
                      }}
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
