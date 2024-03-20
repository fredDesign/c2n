import { FunctionComponent } from "react";
import styles from "./LogoSlider.module.css";

const LogoSlider: FunctionComponent = () => {
  return (
    <div className={styles.logoSlider}>
      <b className={styles.title}>Nos partenaires</b>
      <div className={styles.content}>
        <div className={styles.logos}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <img
                className={styles.image2Icon}
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
          </div>
          <button className={styles.logoWrapper1}>
            <div className={styles.logo1}>
              <img
                className={styles.image2Icon1}
                alt=""
                src="/image-2-1@2x.png"
              />
            </div>
          </button>
          <button className={styles.logoWrapper2}>
            <div className={styles.logo2}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/image-1-3@2x.png"
              />
            </div>
          </button>
          <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
        </div>
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector-8.svg" />
    </div>
  );
};

export default LogoSlider;
