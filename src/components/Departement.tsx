import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Departement.module.css";

export type DepartementType = {
  rectangle39?: string;
  dPARTEMENT?: string;
  mATRIAUX?: string;
  leDpartementPhotoniqueDuC?: string;

  /** Style props */
  propTextTransform?: CSSProperties["textTransform"];
};

const Departement: FunctionComponent<DepartementType> = ({
  rectangle39,
  dPARTEMENT,
  mATRIAUX,
  leDpartementPhotoniqueDuC,
  propTextTransform,
}) => {
  const dPARTEMENTPHOTONIQUE1Style: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
    };
  }, [propTextTransform]);

  return (
    <div className={styles.departement}>
      <div className={styles.departementInner}>
        <img className={styles.frameChild} alt="" src={rectangle39} />
      </div>
      <div className={styles.dpartementPhotoniqueParent}>
        <h2
          className={styles.dpartementPhotonique}
          style={dPARTEMENTPHOTONIQUE1Style}
        >
          <p className={styles.dpartement}>{dPARTEMENT}</p>
          <p className={styles.matriaux}>{mATRIAUX}</p>
        </h2>
        <div className={styles.leDpartementPhotonique}>
          {leDpartementPhotoniqueDuC}
        </div>
      </div>
    </div>
  );
};

export default Departement;
