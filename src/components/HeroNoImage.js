const HeroNoImage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-10 px-6 pb-0 relative gap-[10px] text-center text-35xl text-dark-blue font-title5">
      <div className="w-[1384.6px] absolute !m-[0] top-[calc(50%_-_762.8px)] left-[calc(50%_-_692.3px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ebf5fa,_#ebf5fa_18.5%,_#f1faff_55.5%,_rgba(241,_250,_255,_0)_94.5%)] h-[998.3px] z-[0]" />
      <div className="self-stretch rounded-2xl flex flex-col items-center justify-start p-8 box-border min-w-[300px] z-[1]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
          <h1
            className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[58px] font-bold font-inherit"
            id="heroTitle"
          >
            <span>{`Recherches en `}</span>
            <span className="text-secondary">matériaux</span>
            <span>{`, `}</span>
            <span className="text-secondary">nanophotonique</span>
            <span>{`, `}</span>
            <span className="text-secondary">nanoélectronique</span>
            <span className="whitespace-pre-wrap">{`,  `}</span>
            <span className="text-secondary">nano-bio-technologies</span>
            <span>{` et `}</span>
            <span className="text-secondary">microsystèmes</span>
          </h1>
          <div className="self-stretch relative text-2xl tracking-[-0.03em] leading-[27px] text-greyblue">
            Le Centre de Nanosciences et de Nanotechnologies - C2N
            (CNRS/Université Paris-Saclay) développe des recherches dans les
            domaines des matériaux, de la nanophotonique, de la
            nanoélectronique, des nano-bio-technologies et des microsystèmes,
            ainsi que dans ceux des nanotechnologies.
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-center gap-[10px]">
            <button className="cursor-pointer py-2 px-8 bg-[transparent] rounded-31xl [background:linear-gradient(180deg,_#174269,_#3e6392)] flex flex-row items-center justify-start border-[1px] border-solid border-prim-light">
              <div className="relative text-lg tracking-[-0.03em] leading-[32px] font-semibold font-healine-6 text-light-level-1 text-left">
                En savoir plus sur le laboratoire
              </div>
            </button>
            <button className="cursor-pointer py-2 px-8 bg-[transparent] rounded-31xl flex flex-row items-center justify-start border-[1px] border-solid border-overdark">
              <div className="relative text-lg tracking-[-0.03em] leading-[32px] font-semibold font-healine-6 text-overdark text-left">
                Nos départements de recherche
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNoImage;
