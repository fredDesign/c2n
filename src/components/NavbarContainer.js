import { useMemo } from "react";

const NavbarContainer = ({
  dimensionCode,
  imageDimensionsCode,
  imageDimensionsCode2,
  imageDimensionsCode3,
  navbarContainerWidth,
  navbarContainerAlignSelf,
}) => {
  const navbarContainerStyle = useMemo(() => {
    return {
      width: navbarContainerWidth,
      alignSelf: navbarContainerAlignSelf,
    };
  }, [navbarContainerWidth, navbarContainerAlignSelf]);

  return (
    <div
      className="w-[1240px] box-border max-w-full flex flex-row items-center justify-center pt-0 px-0 pb-2 text-left text-xs text-primary font-title5 border-b-[1px] border-solid border-yellowgreen-200"
      style={navbarContainerStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="self-stretch flex flex-col items-start justify-center py-3 px-6">
          <img
            className="w-[200px] flex-1 max-h-full object-cover"
            alt=""
            src={dimensionCode}
          />
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-end gap-[12px]">
          <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px">
            <div className="relative tracking-[-0.01em] leading-[17px]">
              Accès
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px">
            <div className="relative tracking-[-0.01em] leading-[17px]">
              Intranet
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px">
            <div className="relative tracking-[-0.01em] leading-[17px]">
              Contact
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px border-r-[1px] border-solid border-yellowgreen-100">
            <div className="relative tracking-[-0.01em] leading-[17px]">
              Annuaire
            </div>
          </div>
        </div>
        <div className="w-[113px] h-20 flex flex-row items-center justify-center py-2 px-5 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={imageDimensionsCode}
          />
        </div>
        <div className="w-[97px] h-20 flex flex-row items-center justify-center py-2 px-5 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={imageDimensionsCode2}
          />
        </div>
        <div className="w-[88px] h-20 flex flex-row items-center justify-center py-2 px-5 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={imageDimensionsCode3}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarContainer;
