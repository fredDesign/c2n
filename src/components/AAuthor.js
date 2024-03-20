import { useMemo } from "react";

const AAuthor = ({
  authorWidth,
  authorBorderRadius,
  authorBorder,
  authorHeight,
  propLineHeight,
}) => {
  const image2Style = useMemo(() => {
    return {
      width: authorWidth,
      borderRadius: authorBorderRadius,
      border: authorBorder,
      height: authorHeight,
    };
  }, [authorWidth, authorBorderRadius, authorBorder, authorHeight]);

  const authorStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="flex flex-row items-center justify-start gap-[10.829999923706055px] z-[0] text-left text-2xs-8 text-green font-title5">
      <div
        className="w-[32.5px] relative rounded-[25.27px] box-border h-[32.5px] border-[0.9px] border-solid border-grass"
        style={image2Style}
      />
      <div
        className="relative leading-[21.66px] font-medium"
        style={authorStyle}
      >
        Lire la suite
      </div>
    </div>
  );
};

export default AAuthor;
