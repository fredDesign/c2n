import { useMemo } from "react";

const MainNav = ({ mainNavWidth, mainNavMargin, mainNavAlignSelf }) => {
  const mainNavStyle = useMemo(() => {
    return {
      width: mainNavWidth,
      margin: mainNavMargin,
      alignSelf: mainNavAlignSelf,
    };
  }, [mainNavWidth, mainNavMargin, mainNavAlignSelf]);

  return (
    <div
      className="max-w-full h-[43px] flex flex-row items-center justify-start text-left text-xs text-prim-light font-title5 self-stretch"
      style={mainNavStyle}
    >
      <div className="flex flex-row flex-wrap items-center justify-end py-0 px-7 gap-[24px]">
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <a
            className="relative font-bold text-[inherit] [text-decoration:none]"
            href="https://link"
            target="_blank"
          >
            Le laboratoire
          </a>
          <img
            className="w-[9px] relative h-[5px]"
            alt=""
            src="/chevronbot.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <a
            className="relative font-bold text-[inherit] [text-decoration:none]"
            href="https://link"
            target="_blank"
          >
            Recherche
          </a>
          <img
            className="w-[9px] relative h-[5px]"
            alt=""
            src="/chevronbot.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <a
            className="relative font-bold text-[inherit] [text-decoration:none]"
            href="https://link"
            target="_blank"
          >
            Plateforme
          </a>
          <img
            className="w-[9px] relative h-[5px]"
            alt=""
            src="/chevronbot.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <a
            className="relative font-bold text-[inherit] [text-decoration:none]"
            href="https://link"
            target="_blank"
          >{`Partenariat & Valorisation`}</a>
          <img
            className="w-[9px] relative h-[5px]"
            alt=""
            src="/chevronbot.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <a
            className="relative font-bold text-[inherit] [text-decoration:none]"
            href="https://link"
            target="_blank"
          >
            Emploi
          </a>
          <img
            className="w-[9px] relative h-[5px]"
            alt=""
            src="/chevronbot.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <a
            className="relative font-bold text-[inherit] [text-decoration:none]"
            href="https://link"
            target="_blank"
          >
            Science et société
          </a>
          <img
            className="w-[9px] relative h-[5px]"
            alt=""
            src="/chevronbot.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <a
            className="relative font-bold text-[inherit] [text-decoration:none]"
            href="https://link"
            target="_blank"
          >{`C2N & EUROPE`}</a>
          <img
            className="w-[9px] relative h-[5px]"
            alt=""
            src="/chevronbot.svg"
          />
        </div>
      </div>
      <img
        className="w-[34px] relative h-[23px] hidden"
        alt=""
        src="/menu.svg"
      />
    </div>
  );
};

export default MainNav;
