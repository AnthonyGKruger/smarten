import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import axios from "axios";

const Footer = () => {
  const [state, setState] = useState(null);

  const randomId = Math.floor(Math.random() * 100) + 1;

  const flag = state !== null;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}footer`).then((res) => {
      setState(res.data);
    });

    if (state != null) {
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
    }
  }, [flag]);

  const spanClasses =
    "uppercase inline-flex font-extrabold lg:mt-2 md:mt-3 mt-3 banner-item lg:text-3xl md:text-2xl text-sm";
  const liClasses = "inline-flex uppercase font-extrabold ";
  const imgClasses =
    "md:h-1/2 h-1/4 mr-6 md:mt-0 md:mt-2 lg:mt-1 justify-center items-center";

  return (
    <footer className="w-full text-white  relative 2xl:h-[44em] lg:h-[34em] md:h-[50em] h-[60em] font-lato ">
      {state !== null && (
        <img
          src={state.footerBanner}
          alt={"footer"}
          className={
            " absolute 2xl:object-contain xl:object-contain h-full 2xl:h-[44em] object-center object-cover -z-50 "
          }
        />
      )}

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
            {state !== null &&
              state.tiltedBannerText.map((text, idx) => {
                return (
                  <li key={idx} className={liClasses}>
                    <img
                      src={
                        "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/Star+1.svg"
                      }
                      alt={"star"}
                      className={imgClasses}
                    />{" "}
                    <span className={spanClasses}>{text}</span>
                  </li>
                );
              })}
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
                id="footer logo"
                aria-label="footer logo"
                aria-current="footer"
                className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 mb-3 cursor-pointer"
                href="https://ezdev.solutions"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <img
                  src={
                    "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/icon.png"
                  }
                  alt={"nav icon"}
                />

                <span
                  className={"font-ondo font-extrabold text-3xl text-white"}
                >
                  board
                </span>
              </a>

              {state !== null && (
                <p className={"text-lg p-3"}>{state.paragraphText}</p>
              )}
            </div>

            {state !== null &&
              state.navs.map((nav, idx) => {
                return (
                  <nav
                    key={idx}
                    className="col-span-2 md:col-span-4 lg:col-span-2"
                    aria-labelledby={`${nav.title} - navigation title`}
                  >
                    <h3 className="mb-6 text-base font-extrabold uppercase font-lato text-white">
                      {nav.title}
                    </h3>
                    <ul>
                      {nav.links.map((link, idx) => {
                        return (
                          <li key={idx} className="mb-2 leading-6">
                            <a
                              href="https://ezdev.solutions"
                              className="transition-colors duration-300 text-lg cursor-pointer"
                              target={"_blank"}
                              rel={"noreferrer"}
                            >
                              {link}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                );
              })}
          </div>
        </div>
      </div>

      <div className="md:px-8 px-12 xl:py-0 md:py-4 2xl:pt-20 2xl:-ml-14 z-50">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-x-12 gap-y-6 mt-6">
          {state !== null &&
            state.companies.map((company, idx) => {
              return (
                <div className="flex justify-center items-center" key={idx}>
                  <img
                    src={company.imageUrl}
                    alt={"partners"}
                    className={
                      "h-6 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
                    }
                    onClick={() => {
                      window.open(company.url, "_blank");
                    }}
                  />
                </div>
              );
            })}
          <div className={"grid sm:hidden"}>
            <div className="grid grid-cols-3 gap-6 ">
              <div className="col-span-4">
                <div className={"grid grid-cols-4 gap-2"}>
                  {state !== null &&
                    state.socialIcons.map((socialIcon, idx) => {
                      return (
                        <div
                          key={idx}
                          className={"col-span-1"}
                          onClick={() => {
                            window.open(socialIcon.url, "_blank");
                          }}
                        >
                          <img
                            src={socialIcon.imageUrl}
                            alt={"social-icon"}
                            className={
                              "hover:scale-105 transition-all delay-100 cursor-pointer"
                            }
                            onClick={() => {
                              window.open(socialIcon.url, "_blank");
                            }}
                          />
                        </div>
                      );
                    })}
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
        {" "}
        <div className="container xl:px-6 m-auto grid grid-cols-3 gap-2">
          <div className={"xl:col-span-1 col-span-3 hidden sm:grid"}>
            <div className="grid grid-cols-3 gap-6 ">
              <div className="col-span-4">
                <div className={"grid grid-cols-4 gap-2"}>
                  {state !== null &&
                    state.socialIcons.map((socialIcon, idx) => {
                      return (
                        <div
                          key={idx}
                          className={"col-span-1"}
                          onClick={() => {
                            window.open(socialIcon.url, "_blank");
                          }}
                        >
                          <img
                            src={socialIcon.imageUrl}
                            alt={"social-icon"}
                            className={
                              "hover:scale-105 transition-all delay-100 cursor-pointer"
                            }
                            onClick={() => {
                              window.open(socialIcon.url, "_blank");
                            }}
                          />
                        </div>
                      );
                    })}
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
