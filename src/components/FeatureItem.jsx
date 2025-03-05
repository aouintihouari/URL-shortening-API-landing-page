export function FeatureItem({ item }) {
  const { img, title, mt, description } = item;
  return (
    <div
      style={{
        marginTop: mt ? `${mt}px` : "0px",
      }}
      className="feature-item relative z-20 h-[267px] w-[350px] rounded-lg bg-white p-6 pt-20 text-center shadow-lg md:text-left"
    >
      <div className="bg-light-violet absolute -top-12 left-32 mb-4 flex h-[88px] w-[88px] items-center justify-center rounded-full p-4 md:left-5">
        <img src={img} alt={title} />
      </div>
      <h3 className="text-bold text-dark-blue text-xl text-[22px] leading-[33px] font-bold">
        {title}
      </h3>
      <p className="text-grayish-violet mt-2 text-[15px] leading-[26px] tracking-[0px]">
        {description}
      </p>
      <style>
        {`
          @media (max-width: 767px) {
            .feature-item {
              margin-top: 0px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
