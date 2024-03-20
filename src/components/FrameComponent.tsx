import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Departement1 from "./Departement1";
import Departement from "./Departement";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.webPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.nosDepartementsWrapper}>
                <b className={styles.nosDepartements}>NOS DEPARTEMENTS</b>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.frameChild} />
                <div className={styles.lunitEstStructureEn4DWrapper}>
                  <h1 className={styles.lunitEstStructureContainer}>
                    <p
                      className={styles.lunitEstStructure}
                    >{` L’unité est structurée `}</p>
                    <p
                      className={styles.en4DpartementsScientifique}
                    >{`en 4 départements scientifiques `}</p>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.depList}>
            <Departement1
              rectangle39="/rectangle-39@2x.png"
              dPARTEMENT="DÉPARTEMENT"
              pHOTONIQUE=" PHOTONIQUE"
              leDpartementPhotoniqueDuC="Le département photonique du C2N regroupe un large éventail d’activités de recherche, allant de la recherche fondamentale au développement de nouveaux dispositifs photoniques."
            />
            <Departement
              rectangle39="/rectangle-39-1@2x.png"
              dPARTEMENT="DÉPARTEMENT"
              mATRIAUX="MATÉRIAUX"
              leDpartementPhotoniqueDuC={`L'innovation en science des matériaux est essentielle pour la R&D de demain. Au C2N, cinq équipes fabriquent et étudient les propriétés de nouvelles structures avec des fonctionnalités avancées.`}
            />
            <Departement
              rectangle39="/rectangle-39-2@2x.png"
              dPARTEMENT="Département"
              mATRIAUX="nano-électronique"
              leDpartementPhotoniqueDuC="Ce Département se focalise sur la compréhension et la réalisation de phénomènes et de dispositifs à l'échelle du nanomètre, ainsi que sur le développement d'architectures pour les nanocircuits intégrés."
              propTextTransform="uppercase"
            />
            <Departement1
              rectangle39="/rectangle-39-3@2x.png"
              dPARTEMENT="Département"
              pHOTONIQUE=" microsystèmes et nanobiofluidique"
              leDpartementPhotoniqueDuC="L’activité de recherche du département est centrée sur l’étude et la conception de micro / nano dispositifs innovants."
              propPadding="var(--padding-smi) var(--padding-xs) var(--padding-46xl)"
              propTextTransform="uppercase"
            />
          </div>
        </div>
        <div className={styles.conditionalSplitter}>
          <Button
            className={styles.buttonPrimary}
            endIcon={<img width="8px" height="14.2px" src="/vector-9.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fefefe",
              fontSize: "18",
              background: "linear-gradient(180deg, #174269, #3e6392)",
              borderRadius: "50px",
              "&:hover": {
                background: "linear-gradient(180deg, #174269, #3e6392)",
              },
              width: 194,
            }}
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
