import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1141px] w-full mx-auto px-4">
      <div className="hero">
        <h1 className="hero-text-shadow text-[135px] font-black text-white uppercase text-center mt-[108px] leading-normal">
          Dynamic learn
        </h1>
        <div className="flex flex-wrap  justify-between items-center gap-7">
          <p className="max-w-[373px] text-white leading-[157%]">
            Felis ornare posuere dignissim dictum nulla tempus vulputate. Est
            feugiat quis lacus eu proin consectetur
          </p>
          <p className="max-w-[373px] text-white leading-[157%]">
            Felis ornare posuere dignissim dictum nulla tempus vulputate. Est
            feugiat quis lacus eu proin consectetur
          </p>
          <button className="flex items-center  text-white leading-[157%] font-bold uppercase gap-2 group translate-x-1">
            get in touch{" "}
            <span>
              <svg
                className="group-hover:translate-x-1 transition-all duration-300"
                width="22"
                height="9"
                viewBox="0 0 22 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3536 4.85355C21.5488 4.65829 21.5488 4.34171 21.3536 4.14645L18.1716 0.964466C17.9763 0.769204 17.6597 0.769204 17.4645 0.964466C17.2692 1.15973 17.2692 1.47631 17.4645 1.67157L20.2929 4.5L17.4645 7.32843C17.2692 7.52369 17.2692 7.84027 17.4645 8.03553C17.6597 8.2308 17.9763 8.2308 18.1716 8.03553L21.3536 4.85355ZM0 5H21V4H0V5Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
