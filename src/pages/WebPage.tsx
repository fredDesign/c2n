import { FunctionComponent } from "react";
import Header from "../components/Header";
import HeroNoImage from "../components/HeroNoImage";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Section from "../components/Section";
import Footer from "../components/Footer";
import styles from "./WebPage.module.css";

const WebPage: FunctionComponent = () => {
  return (
    <div className={styles.webPage}>
      <Header1 />
      <HeroNoImage1 />
      <FrameComponent1 />
      <FrameComponent />
      <Section />
      <Footer />
    </div>
  );
};

export default WebPage;
