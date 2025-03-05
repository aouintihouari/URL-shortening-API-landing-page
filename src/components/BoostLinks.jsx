import React from "react";

export default function BoostLinks() {
  return (
    <div className="bg-light-violet flex h-[300px] w-full flex-col items-center bg-[url('/src/assets/images/bg-boost-mobile.svg')] bg-cover bg-center bg-no-repeat py-20 md:h-[250px] md:bg-[url('/src/assets/images/bg-boost-desktop.svg')]">
      <h4 className="text-[28px] leading-[48px] font-bold tracking-[-0.7px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-1px]">
        Boost your links today
      </h4>
      <button className="bg-cyan text-bold my-10 min-h-[56px] min-w-[197px] cursor-pointer rounded-[28px] text-[20px] text-white transition duration-1000 hover:brightness-115">
        Get Started
      </button>
    </div>
  );
}
