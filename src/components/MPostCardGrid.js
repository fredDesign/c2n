import { useMemo } from "react";
import ABadge from "./ABadge";
import AuthorContainer from "./AuthorContainer";

const MPostCardGrid = ({
  rectangle38,
  title,
  title1,
  vector,
  mPostCardGridWidth,
  mPostCardGridBorder,
  rectangleIconWidth,
  rectangleIconHeight,
  imageWidth,
  imageBorder,
  imageHeight,
}) => {
  const mPostCardGridStyle = useMemo(() => {
    return {
      width: mPostCardGridWidth,
      border: mPostCardGridBorder,
    };
  }, [mPostCardGridWidth, mPostCardGridBorder]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: rectangleIconWidth,
      height: rectangleIconHeight,
    };
  }, [rectangleIconWidth, rectangleIconHeight]);

  const imageStyle = useMemo(() => {
    return {
      width: imageWidth,
      border: imageBorder,
      height: imageHeight,
    };
  }, [imageWidth, imageBorder, imageHeight]);

  return (
    <div
      className="w-[372.4px] rounded-3xl-8 bg-white box-border max-w-full overflow-hidden flex flex-col items-center justify-center p-[15.199999809265137px] gap-[15.199999809265137px] text-left text-3xl-8 text-secondary-800 font-title5 border-[0.9px] border-solid border-primary-25"
      style={mPostCardGridStyle}
    >
      <img
        className="w-[342px] relative rounded-base-2 h-[228px] object-cover"
        alt=""
        src={rectangle38}
        style={rectangleIconStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start p-[7.599999904632568px] gap-[19px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15.199999809265137px]">
          <ABadge />
          <b className="self-stretch relative leading-[26.6px]">{title}</b>
          <div className="self-stretch relative text-base-2 leading-[19px]">
            {title1}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start relative gap-[19px]">
          <AuthorContainer />
          <img
            className="w-[9.6px] absolute !m-[0] top-[8.6px] left-[12.3px] h-[17.1px] object-contain z-[1]"
            alt=""
            src={vector}
          />
        </div>
      </div>
    </div>
  );
};

export default MPostCardGrid;
