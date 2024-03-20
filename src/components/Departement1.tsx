import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Departement1.module.css";

export type Departement1Type = {
  rectangle39?: string;
  dPARTEMENT?: string;
  pHOTONIQUE?: string;
  leDpartementPhotoniqueDuC?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propTextTransform?: CSSProperties["textTransform"];
};

const Departement1: FunctionComponent<Departement1Type> = ({
  rectangle39,
  dPARTEMENT,
  pHOTONIQUE,
  leDpartementPhotoniqueDuC,
  propPadding,
  propTextTransform,
}) => {
  const departementStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const dPARTEMENTPHOTONIQUEStyle: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className={styles.departement} style={departementStyle}>
      <div className={styles.departementInner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={rectangle39}
        />
      </div>
      <div className={styles.dpartementPhotoniqueParent}>
        <h2
          className={styles.dpartementPhotonique}
          style={dPARTEMENTPHOTONIQUEStyle}
        >
          <span>{dPARTEMENT}</span>
          <span className={styles.photonique}>{pHOTONIQUE}</span>
        </h2>
        <div className={styles.leDpartementPhotonique}>
          {leDpartementPhotoniqueDuC}
        </div>
      </div>
    </div>
  );
};

export default Departement1;
