import { useMemo } from "react";

const AAuthor1 = ({ authorWidth, authorBorder, authorHeight }) => {
  const image1Style = useMemo(() => {
    return {
      width: authorWidth,
      border: authorBorder,
      height: authorHeight,
    };
  }, [authorWidth, authorBorder, authorHeight]);

  return (
    <div className="flex flex-row items-center justify-start gap-[12.539999961853027px] z-[0] text-left text-smi-5 text-green font-title5">
      <div
        className="w-[37.6px] relative rounded-[29.26px] box-border h-[37.6px] border-[1px] border-solid border-grass"
        style={image1Style}
      />
      <div className="relative leading-[25.08px] font-medium">
        Lire la suite
      </div>
    </div>
  );
};

export default AAuthor1;
