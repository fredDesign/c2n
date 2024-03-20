import { useMemo } from "react";

const LogoL = ({
  cigle,
  txt,
  logoLWidth,
  logoLHeight,
  logoLPosition,
  logoLTop,
  logoLRight,
  logoLBottom,
  logoLLeft,
}) => {
  const logoLStyle = useMemo(() => {
    return {
      width: logoLWidth,
      height: logoLHeight,
      position: logoLPosition,
      top: logoLTop,
      right: logoLRight,
      bottom: logoLBottom,
      left: logoLLeft,
    };
  }, [
    logoLWidth,
    logoLHeight,
    logoLPosition,
    logoLTop,
    logoLRight,
    logoLBottom,
    logoLLeft,
  ]);

  return (
    <div
      className="w-[262px] h-[77px] flex flex-col items-start justify-start"
      style={logoLStyle}
    >
      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[12px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
          alt=""
          src={cigle}
        />
        <img
          className="w-[172.8px] relative h-[72.2px] overflow-hidden shrink-0"
          alt=""
          src={txt}
        />
      </div>
    </div>
  );
};

export default LogoL;
