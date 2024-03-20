import { useMemo } from "react";
import LogoL from "./LogoL";

const Footer = ({
  group4,
  cigle,
  txt,
  iconsLogosSimpleInstagram,
  iconsLogosSimpleYoutube,
  smallColumnsWidth,
  smallColumnsFlex,
}) => {
  const smallColumnsStyle = useMemo(() => {
    return {
      width: smallColumnsWidth,
      flex: smallColumnsFlex,
    };
  }, [smallColumnsWidth, smallColumnsFlex]);

  return (
    <footer className="bg-overdark max-w-full flex flex-row items-start justify-center pt-16 px-6 pb-2 box-border relative gap-[40px] text-left text-base text-white font-oswald self-stretch">
      <div className="w-[512px] absolute !m-[0] top-[-118px] left-[-170px] h-[512px] z-[0]">
        <img
          className="absolute h-[73.52%] w-[73.46%] top-[13.28%] right-[-0.33%] bottom-[13.2%] left-[26.88%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={group4}
        />
        <LogoL
          cigle="/cigle.svg"
          txt="/txt.svg"
          logoLWidth="51.17%"
          logoLHeight="15.04%"
          logoLPosition="absolute"
          logoLTop="42.58%"
          logoLRight="8.98%"
          logoLBottom="42.38%"
          logoLLeft="39.84%"
        />
        <div className="absolute top-[323px] left-[211px] h-[88px] flex flex-col items-start justify-start">
          <div className="w-[221px] flex flex-row items-center justify-start gap-[24px]">
            <div className="relative leading-[13px] font-light">
              Nous suivre
            </div>
            <div className="flex-1 flex flex-row items-end justify-start gap-[16px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src={iconsLogosSimpleInstagram}
              />
              <img
                className="w-[17.9px] relative h-6"
                alt=""
                src="/vector4.svg"
              />
              <img
                className="w-6 relative h-6 object-cover hidden"
                alt=""
                src={iconsLogosSimpleYoutube}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-[32px] z-[1] text-sm text-secondary font-title5">
        <div className="self-stretch flex flex-row items-start justify-center">
          <div
            className="w-[1240px] flex flex-row flex-wrap items-start justify-start pt-4 pb-0 pr-0 pl-[330px] box-border gap-[12px] max-w-[1240px]"
            style={smallColumnsStyle}
          >
            <div className="w-[289px] flex flex-col items-start justify-start gap-[24px]">
              <div className="flex flex-col items-start justify-start gap-[12px]">
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  Contact
                </div>
                <div className="w-[280px] relative leading-[20px] font-light text-white inline-block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[4px] text-grass">
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  <span>{`Email : `}</span>
                  <span className="text-white">info@jstemplate.net</span>
                </div>
                <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                  <span>Phone :</span>
                  <span className="text-secondary-800">{` `}</span>
                  <span className="text-white">880 123 456 789</span>
                </div>
              </div>
            </div>
            <div className="w-[168px] flex flex-col items-start justify-start">
              <div className="w-[199px] flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                  EN UN CLIC
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-white">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-light">
                    <p className="m-0">Direction</p>
                    <p className="m-0">Services</p>
                    <p className="m-0">Organigramme</p>
                    <p className="m-0">Se rendre au C2N</p>
                    <p className="m-0">Annuaire</p>
                    <p className="m-0">Espace membres</p>
                    <p className="m-0">Wiki information</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[178px] flex flex-col items-start justify-start">
              <div className="w-[199px] flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                  LA SCIENCE DU C2N
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-white">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-light">
                    <p className="m-0">Direction</p>
                    <p className="m-0">Services</p>
                    <p className="m-0">Organigramme</p>
                    <p className="m-0">Se rendre au C2N</p>
                    <p className="m-0">Annuaire</p>
                    <p className="m-0">Espace membres</p>
                    <p className="m-0">Wiki information</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[199px] flex flex-col items-start justify-start gap-[12px]">
              <div className="w-[199px] flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                  À PROPOS DU C2N
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-white">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-light">
                    <p className="m-0">Evènements</p>
                    <p className="m-0">Prix et distinctions</p>
                    <p className="m-0">On parle du C2N</p>
                    <p className="m-0">Faits Marquants</p>
                  </div>
                </div>
              </div>
              <div className="w-[199px] h-5 flex flex-row items-center justify-start pt-8 px-0 pb-0 box-border gap-[24px] text-base text-grass font-oswald">
                <div className="flex flex-row items-start justify-start">
                  <div className="w-[64.7px] relative leading-[13px] font-light inline-block shrink-0">
                    Language
                  </div>
                </div>
                <div className="w-11 relative h-[11px]">
                  <div className="absolute top-[0px] left-[0px] leading-[11px] uppercase">
                    <span>FR</span>
                    <span className="text-white"> / EN</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 h-24" />
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center max-w-[1240px] text-xs text-light-level-1 font-healine-6">
          <div className="flex flex-row items-center justify-center pt-7 px-0 pb-3 gap-[32px]">
            <div className="relative leading-[150%]">
              Copyright © 2024 Designluch
            </div>
            <div className="flex flex-row items-center justify-start gap-[32px]">
              <div className="relative leading-[150%]">{`Contact `}</div>
              <div className="relative leading-[150%]">Plan du site</div>
              <div className="relative leading-[150%]">Mentions légales</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
