import { useMemo } from "react";
import AuthorContainer from "./AuthorContainer";

const ShortInfo = ({
  dimensionsCode,
  imageWidth,
  imageBorder,
  imageHeight,
}) => {
  const imageStyle = useMemo(() => {
    return {
      width: imageWidth,
      border: imageBorder,
      height: imageHeight,
    };
  }, [imageWidth, imageBorder, imageHeight]);

  return (
    <div className="flex flex-row items-center justify-start relative gap-[19px]">
      <AuthorContainer />
      <img
        className="w-[9.6px] absolute !m-[0] top-[8.6px] left-[12.3px] h-[17.1px] object-contain z-[1]"
        alt=""
        src={dimensionsCode}
      />
    </div>
  );
};

export default ShortInfo;
