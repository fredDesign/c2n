import { FunctionComponent } from "react";
import LogoSlider from "./LogoSlider";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.logoSliderWrapper}>
      <LogoSlider />
    </section>
  );
};

export default FrameComponent1;
