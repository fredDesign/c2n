import { useMemo } from "react";

const Departement = ({
  departmentDescription,
  materialType,
  materialInnovationDescrip,
  propTextTransform,
}) => {
  const dPARTEMENTPHOTONIQUE1Style = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <article className="w-[292px] rounded-3xl bg-white box-border h-[426px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 min-w-[292px] max-w-[594px] text-center text-5xl text-grass font-oswald border-[1px] border-solid border-steelblue-200">
      <div className="self-stretch rounded-3xl h-[194px] flex flex-col items-center justify-start p-3 box-border">
        <img
          className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-391@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 pr-6 pl-4 gap-[10px]">
        <b
          className="self-stretch relative leading-[32px]"
          style={dPARTEMENTPHOTONIQUE1Style}
        >
          <p className="m-0">{departmentDescription}</p>
          <p className="m-0 text-steelblue-100">{materialType}</p>
        </b>
        <div className="self-stretch relative text-sm leading-[20px] font-light font-title5 text-dark-blue">
          {materialInnovationDescrip}
        </div>
      </div>
    </article>
  );
};

export default Departement;
