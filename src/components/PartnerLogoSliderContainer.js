import { useMemo } from "react";

const PartnerLogoSliderContainer = ({
  dimensionsText,
  titleMargin,
  titleFontWeight,
}) => {
  const titleStyle = useMemo(() => {
    return {
      margin: titleMargin,
      fontWeight: titleFontWeight,
    };
  }, [titleMargin, titleFontWeight]);

  return (
    <div className="max-w-full overflow-hidden flex flex-col items-center justify-start pt-16 px-6 pb-0 box-border gap-[32px] text-center text-lg text-secondary font-title5 self-stretch">
      <b
        className="w-[560px] relative tracking-[-0.03em] leading-[32px] uppercase inline-block"
        style={titleStyle}
      >
        Nos partenaires
      </b>
      <div className="w-full flex flex-col items-center justify-center py-0 px-[50px] box-border min-w-[300px] max-w-[800px]">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 px-6 gap-[64px]">
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
              alt=""
              src="/image-21@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
              alt=""
              src="/image-22@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
              alt=""
              src={dimensionsText}
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
              alt=""
              src="/image-24@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
              alt=""
              src="/image-25@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <img
              className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
              alt=""
              src="/image-26@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-0 flex flex-row items-center justify-center">
        <div className="w-[800px] h-[150px] flex flex-row items-start justify-between max-w-[800px]">
          <img
            className="w-[13.3px] relative h-[23.6px] object-contain"
            alt=""
            src="/slideleft.svg"
          />
          <img
            className="w-[13.3px] relative h-[23.6px] object-contain"
            alt=""
            src="/slideright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogoSliderContainer;
