import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./HeroNoImage1.module.css";

const HeroNoImage: FunctionComponent = () => {
  return (
    <section className={styles.heroNoImage}>
      <div className={styles.heroNoImageChild} />
      <div className={styles.smallContainer}>
        <div className={styles.content}>
          <h1 className={styles.recherchesEnMatriauxContainer}>
            <span>{`Recherches en `}</span>
            <span className={styles.matriaux}>matériaux</span>
            <span>{`, `}</span>
            <span className={styles.nanophotonique}>nanophotonique</span>
            <span>{`, `}</span>
            <span className={styles.nanolectronique}>nanoélectronique</span>
            <span className={styles.span}>{`,  `}</span>
            <span className={styles.nanoBioTechnologies}>
              nano-bio-technologies
            </span>
            <span>{` et `}</span>
            <span className={styles.microsystmes}>microsystèmes</span>
          </h1>
          <h3 className={styles.leCentreDe}>
            Le Centre de Nanosciences et de Nanotechnologies - C2N
            (CNRS/Université Paris-Saclay) développe des recherches dans les
            domaines des matériaux, de la nanophotonique, de la
            nanoélectronique, des nano-bio-technologies et des microsystèmes,
            ainsi que dans ceux des nanotechnologies.
          </h3>
          <div className={styles.row}>
            <Button
              className={styles.buttonPrimary}
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
                width: 319,
                height: 48,
              }}
            >
              En savoir plus sur le laboratoire
            </Button>
            <Button
              className={styles.buttonSecondary}
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#111212",
                fontSize: "18",
                borderColor: "#111212",
                borderRadius: "50px",
                "&:hover": { borderColor: "#111212" },
                height: 48,
              }}
            >
              Nos départements de recherche
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNoImage;
