import { FeatureItem } from "./FeatureItem.jsx";
import brandIllustration from "../assets/images/icon-brand-recognition.svg";
import detailedIllustration from "../assets/images/icon-detailed-records.svg";
import fullyIllustration from "../assets/images/icon-fully-customizable.svg";

export default function AdvancedFeatures() {
  const featureItemList = [
    {
      img: brandIllustration,
      title: "Brand Recognition",
      mt: "0",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      img: detailedIllustration,
      title: "Detailed Records",
      mt: "40",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      img: fullyIllustration,
      title: "Fully Customizable",
      mt: "80",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <div className="relative pb-20">
      <div className="mx-auto flex flex-col items-center justify-center pt-40">
        <h2 className="text-[28px] leading-[48px] font-bold tracking-[-0.7px] md:text-[40px] md:tracking-[-1px]">
          Advanced Statistics
        </h2>
        <p className="text-grayish-violet mt-6 w-10/12 text-center text-[16px] leading-[28px] tracking-[0.11px] md:w-4/12 md:text-[18px] md:leading-[32px] md:tracking-[0.12px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="relative left-1/12 mt-20 grid w-10/12 max-w-screen-lg grid-cols-1 gap-20 md:grid-cols-3 md:gap-80">
        {featureItemList.map((item, index) => (
          <FeatureItem key={index} item={item} />
        ))}
        <div className="bg-cyan absolute top-40 left-[168px] z-10 h-[700px] w-[8px] md:left-32 md:h-[8px] md:w-[1110px]"></div>
      </div>
    </div>
  );
}
