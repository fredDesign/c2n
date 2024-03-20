import PartnerLogoSliderContainer from "./PartnerLogoSliderContainer";

const LogoSlider = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start">
      <PartnerLogoSliderContainer
        dimensionsText="/image-23@2x.png"
        titleMargin="0"
        titleFontWeight="700"
      />
    </div>
  );
};

export default LogoSlider;
