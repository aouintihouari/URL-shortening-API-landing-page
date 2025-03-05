import illustration from "../assets/images/illustration-working.svg";

export default function Hero() {
  return (
    <section className="relative flex flex-col p-7 md:flex-row-reverse md:items-center md:py-6 md:pl-36">
      <img
        className="absolute -mr-44 w-12/12 md:relative md:-mr-32"
        src={illustration}
        alt="Working Illustration"
      />
      <article className="mt-80 flex flex-col text-center md:mt-0 md:text-left">
        <h1 className="text-light-violet text-[42px] leading-[48px] font-bold tracking-[-1.05px] md:w-11/12 md:text-[80px] md:leading-[90px] md:tracking-[-2px]">
          More than just shorter links
        </h1>
        <p className="text-grayish-violet my-6 text-[18px] leading-[30px] tracking-[0.12px] md:w-11/12 md:text-[22px] md:leading-[36px] md:tracking-[0.15px]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-cyan mx-auto flex h-[56px] w-[197px] cursor-pointer items-center justify-center rounded-[28px] font-bold text-white transition duration-1000 hover:brightness-115 md:mx-0">
          Get Started
        </button>
      </article>
    </section>
  );
}
