import { useState } from "react";

const Nav = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const navItemClasses =
    "flex items-center gap-1 py-4 focus:outline-none focus-visible:outline-none lg:px-3 text-sm uppercase font-lato tracking-wider";

  return (
    <>
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-24 items-stretch justify-between font-medium text-white"
          role="navigation"
        >
          <a
            id="logo"
            aria-label="logo"
            aria-current="page"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            href="http://localhost:3000"
          >
            <img
              src={
                "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/icon.png"
              }
              alt={"nav icon"}
            />

            <span className={"font-ondo font-extrabold text-2xl"}>board</span>
          </a>

          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(2)]:w-6 [&_span:nth-child(2)]:-translate-x-2"
                    : ""
                }
              `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="ml-2 absolute block h-0.5 w-4/6 transform rounded-full bg-white transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
            </div>
          </button>

          <ul
            role="menubar"
            aria-label="navigation"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-slate-600/50 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm pt-20"
                : "invisible opacity-0"
            }`}
          >
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                aria-haspopup="false"
                className={navItemClasses}
                href="https://ezdev.solutions"
                target="_blank"
                rel="noreferrer"
              >
                <span className={"font-extrabold"}>Products</span>
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                className={navItemClasses}
                href="https://ezdev.solutions"
                target="_blank"
                rel="noreferrer"
              >
                <span>Apps & Games</span>
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                aria-haspopup="false"
                className={navItemClasses}
                href="https://ezdev.solutions"
                target="_blank"
                rel="noreferrer"
              >
                <span>Features</span>
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                aria-haspopup="false"
                className={navItemClasses}
                href="https://ezdev.solutions"
                target="_blank"
                rel="noreferrer"
              >
                <span>Support</span>
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                aria-haspopup="false"
                className={navItemClasses}
                href="https://ezdev.solutions"
                target="_blank"
                rel="noreferrer"
              >
                <span>Wishlist</span>
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                aria-haspopup="false"
                className={navItemClasses}
                href="https://ezdev.solutions"
                target="_blank"
                rel="noreferrer"
              >
                <span>About</span>
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                href="https://ezdev.solutions"
                target="_blank"
                rel="noreferrer"
                className={`${navItemClasses} lg:invisible visible`}
              >
                <img
                  src={
                    "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/nav/cart-icon.svg"
                  }
                  alt={"cart icon"}
                  className={"h-4 lg:invisible visible"}
                />
                <div className="absolute bottom-5 left-11 mt-2 mr-2">
                  <img
                    src="https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/nav/Ellipse+1.svg"
                    alt="cart icon bagde"
                    className="h-1.5 w-1.5 xl:h-1.5 xl:w-1.5 mr-2 lg:invisible visible"
                  />
                </div>
              </a>
            </li>
          </ul>

          <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0 invisible lg:visible">
            <a
              href="http://localhost:3000"
              className="relative inline-flex h-10 w-10 items-center justify-center text-lg invisible lg:visible"
            >
              <img
                src={
                  "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/nav/cart-icon.svg"
                }
                alt={"cart icon"}
                className={"h-4 invisible lg:visible"}
              />
              <div className="absolute xl:top-4 xl:-right-1 lg:-right-1.5  mr-2">
                <img
                  src="https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/nav/Ellipse+1.svg"
                  alt="cart badge"
                  className="xl:h-1.5 xl:w-1.5 mr-2 invisible lg:visible"
                />
              </div>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
