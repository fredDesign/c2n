import MPostCardGrid from "./MPostCardGrid";

const ActuComponent = () => {
  return (
    <div className="self-stretch rounded-2xl flex flex-col items-center justify-start py-0 px-8 gap-[40px] text-center text-23xl text-dark-blue font-title5">
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <div className="self-stretch flex flex-col items-center justify-start relative">
          <div className="w-[1181px] absolute !m-[0] top-[27.5px] left-[-0.5px] box-border h-px z-[0] border-t-[1px] border-solid border-secondary" />
          <div className="bg-white flex flex-row items-center justify-center py-0 px-3 z-[1]">
            <h2 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit">
              L’actualité du laboratoire
            </h2>
          </div>
        </div>
        <div className="bg-white flex flex-row items-center justify-start gap-[10px] text-left text-sm text-secondary">
          <div className="relative leading-[20px] font-medium">Actualités</div>
          <div className="relative leading-[20px] font-medium text-overdark">
            |
          </div>
          <div className="relative leading-[20px] font-medium">Agenda</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[20px]">
        <MPostCardGrid
          rectangle38="/rectangle-38@2x.png"
          title="Titiksha Srivastava, Lauréate du concours Chargé.e de recherche CNRS"
          title1="Titiksha Srivastava, originaire d'Inde, a cultivé son intérêt pour les nanosciences en obtenant un Master en Nanosciences et Nanotechnologies à l'Université Grenoble Alpes. Son stage …"
          vector="/vector1.svg"
          mPostCardGridWidth="372.4px"
          mPostCardGridBorder="0.9px solid rgba(22, 67, 105, 0.25)"
          rectangleIconWidth="342px"
          rectangleIconHeight="228px"
          imageWidth="34.2px"
          imageBorder="0.9px solid #98cc4c"
          imageHeight="34.2px"
        />
        <MPostCardGrid
          rectangle38="/rectangle-381@2x.png"
          title="Le C2N et ses partenaires dévoilent un réseau neuronal innovant basé sur les memristors pour améliorer le diagnostic médical."
          title1="Une étude novatrice publiée dans Nature Communications le 7 décembre 2023 démontre une avancée majeure dans la technologie des réseaux neuronaux, avec des implications significatives …"
          vector="/vector2.svg"
          mPostCardGridWidth="409.6px"
          mPostCardGridBorder="1px solid rgba(22, 67, 105, 0.25)"
          rectangleIconWidth="376.2px"
          rectangleIconHeight="250.8px"
          imageWidth="37.6px"
          imageBorder="1px solid #98cc4c"
          imageHeight="37.6px"
        />
        <MPostCardGrid
          rectangle38="/rectangle-382@2x.png"
          title="Pascale Senellart nommée membre permanente du « Conseil présidentiel de la science »"
          title1="Jeudi 7 décembre 2023, le Président de la République, Emmanuel Macron, a annoncé la création du « Conseil présidentiel de la science » composé de douze scientifiques. …"
          vector="/vector3.svg"
          mPostCardGridWidth="353.8px"
          mPostCardGridBorder="0.9px solid rgba(22, 67, 105, 0.25)"
          rectangleIconWidth="324.9px"
          rectangleIconHeight="216.6px"
          imageWidth="32.5px"
          imageBorder="0.9px solid #98cc4c"
          imageHeight="32.5px"
        />
      </div>
      <div className="self-stretch h-0 flex flex-row items-center justify-center">
        <div className="w-[800px] h-[150px] flex flex-row items-start justify-between max-w-[800px]">
          <img
            className="w-[13.3px] relative h-[23.6px] object-contain"
            alt=""
            src="/slideleft.svg"
          />
          <img
            className="w-[13.3px] relative h-[23.6px] object-contain"
            alt=""
            src="/slideright.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-center gap-[8px]">
        <div className="w-12 relative rounded-3xs bg-primary h-2.5" />
        <div className="w-5 relative rounded-3xs bg-grass h-2.5" />
        <div className="w-5 relative rounded-3xs bg-grass h-2.5" />
      </div>
    </div>
  );
};

export default ActuComponent;
