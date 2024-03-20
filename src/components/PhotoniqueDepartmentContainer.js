import { useMemo } from "react";

const PhotoniqueDepartmentContainer = ({
  departmentDescription,
  departmentImageSize,
  departmentOverviewText,
  departementHeight,
  dPARTEMENTPHOTONIQUETextTransform,
  dPARTEMENTMargin,
  pHOTONIQUEColor,
  leDpartementPhotoniqueAlignSelf,
  leDpartementPhotoniquePosition,
  leDpartementPhotoniqueFontSize,
  leDpartementPhotoniqueLineHeight,
  leDpartementPhotoniqueFontWeight,
  leDpartementPhotoniqueFontFamily,
  leDpartementPhotoniqueColor,
  leDpartementPhotoniqueTextAlign,
  leDpartementPhotoniqueDisplay,
  leDpartementPhotoniqueMargin,
}) => {
  const departementStyle = useMemo(() => {
    return {
      height: departementHeight,
    };
  }, [departementHeight]);

  const dPARTEMENTPHOTONIQUEStyle = useMemo(() => {
    return {
      textTransform: dPARTEMENTPHOTONIQUETextTransform,
    };
  }, [dPARTEMENTPHOTONIQUETextTransform]);

  const dPARTEMENTStyle = useMemo(() => {
    return {
      margin: dPARTEMENTMargin,
    };
  }, [dPARTEMENTMargin]);

  const pHOTONIQUEStyle = useMemo(() => {
    return {
      color: pHOTONIQUEColor,
    };
  }, [pHOTONIQUEColor]);

  const leDpartementPhotoniqueStyle = useMemo(() => {
    return {
      alignSelf: leDpartementPhotoniqueAlignSelf,
      position: leDpartementPhotoniquePosition,
      fontSize: leDpartementPhotoniqueFontSize,
      lineHeight: leDpartementPhotoniqueLineHeight,
      fontWeight: leDpartementPhotoniqueFontWeight,
      fontFamily: leDpartementPhotoniqueFontFamily,
      color: leDpartementPhotoniqueColor,
      textAlign: leDpartementPhotoniqueTextAlign,
      display: leDpartementPhotoniqueDisplay,
      margin: leDpartementPhotoniqueMargin,
    };
  }, [
    leDpartementPhotoniqueAlignSelf,
    leDpartementPhotoniquePosition,
    leDpartementPhotoniqueFontSize,
    leDpartementPhotoniqueLineHeight,
    leDpartementPhotoniqueFontWeight,
    leDpartementPhotoniqueFontFamily,
    leDpartementPhotoniqueColor,
    leDpartementPhotoniqueTextAlign,
    leDpartementPhotoniqueDisplay,
    leDpartementPhotoniqueMargin,
  ]);

  return (
    <div
      className="w-[292px] rounded-3xl bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-4 min-w-[292px] max-w-[594px] text-center text-5xl text-grass font-oswald border-[1px] border-solid border-steelblue-200"
      style={departementStyle}
    >
      <div className="self-stretch rounded-3xl h-[194px] flex flex-col items-center justify-start p-3 box-border">
        <img
          className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={departmentDescription}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 pr-6 pl-4 gap-[10px]">
        <b
          className="self-stretch relative leading-[32px]"
          style={dPARTEMENTPHOTONIQUEStyle}
        >
          <span style={dPARTEMENTStyle}>{departmentImageSize}</span>
          <span className="text-steelblue-100" style={pHOTONIQUEStyle}>
            {" "}
            PHOTONIQUE
          </span>
        </b>
        <div
          className="self-stretch relative text-sm leading-[20px] font-light font-title5 text-dark-blue"
          style={leDpartementPhotoniqueStyle}
        >
          {departmentOverviewText}
        </div>
      </div>
    </div>
  );
};

export default PhotoniqueDepartmentContainer;
