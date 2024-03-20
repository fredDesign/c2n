import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rulerCreator}>
        <div className={styles.rounder}>
          <div className={styles.guideGenerator}>
            <div className={styles.spacingManager}>
              <div className={styles.logoL}>
                <div className={styles.logtype}>
                  <img
                    className={styles.cigleIcon}
                    loading="lazy"
                    alt=""
                    src="/cigle.svg"
                  />
                  <div className={styles.numberCruncher}>
                    <img
                      className={styles.txtIcon}
                      loading="lazy"
                      alt=""
                      src="/txt.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.symbolInstance}>
                <div className={styles.layerVisibilityManager}>
                  <img
                    className={styles.layerVisibilityManagerChild}
                    alt=""
                    src="/group-4@2x.png"
                  />
                  <div className={styles.projectCalendar}>
                    <div className={styles.social}>
                      <div className={styles.title}>Nous suivre</div>
                      <div className={styles.socialLogos}>
                        <img
                          className={styles.iconsLogosSimpleInsta}
                          loading="lazy"
                          alt=""
                          src="/icons--logos--simple--instagram.svg"
                        />
                        <img
                          className={styles.closeoutProcedureIcon}
                          alt=""
                          src="/vector-15.svg"
                        />
                        <img
                          className={styles.iconsLogosSimpleYoutu}
                          alt=""
                          src="/icons--logos--simple--youtube@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.layerLinker}>
            <div className={styles.text}>Copyright © 2024 Designluch</div>
            <div className={styles.text1}>{`Contact `}</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.blendingModesWrapper}>
          <div className={styles.blendingModes}>
            <div className={styles.contact}>Contact</div>
            <div className={styles.layerMerger}>
              <div className={styles.desciption}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
              <div className={styles.emailParent}>
                <div className={styles.email}>
                  <span>{`Email : `}</span>
                  <span className={styles.infojstemplatenet}>
                    info@jstemplate.net
                  </span>
                </div>
                <div className={styles.phone}>
                  <span>Phone :</span>
                  <span className={styles.span}>{` `}</span>
                  <span className={styles.span1}>880 123 456 789</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shapeComposer}>
          <div className={styles.text2}>Plan du site</div>
          <div className={styles.text3}>Mentions légales</div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.content}>
          <div className={styles.enUnClic}>EN UN CLIC</div>
          <div className={styles.footerLinks}>
            <div className={styles.link}>
              <p className={styles.direction}>Direction</p>
              <p className={styles.services}>Services</p>
              <p className={styles.organigramme}>Organigramme</p>
              <p className={styles.seRendreAu}>Se rendre au C2N</p>
              <p className={styles.annuaire}>Annuaire</p>
              <p className={styles.espaceMembres}>Espace membres</p>
              <p className={styles.wikiInformation}>Wiki information</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.column1} />
      <div className={styles.column2}>
        <div className={styles.content1}>
          <div className={styles.laScienceDu}>LA SCIENCE DU C2N</div>
          <div className={styles.footerLinks1}>
            <div className={styles.link1}>
              <p className={styles.direction1}>Direction</p>
              <p className={styles.services1}>Services</p>
              <p className={styles.organigramme1}>Organigramme</p>
              <p className={styles.seRendreAu1}>Se rendre au C2N</p>
              <p className={styles.annuaire1}>Annuaire</p>
              <p className={styles.espaceMembres1}>Espace membres</p>
              <p className={styles.wikiInformation1}>Wiki information</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.commentingSystem}>
        <div className={styles.accessibilityFeatures}>
          <div className={styles.proposDuC2n}>À PROPOS DU C2N</div>
          <div className={styles.link2}>
            <p className={styles.evnements}>Evènements</p>
            <p className={styles.prixEtDistinctions}>Prix et distinctions</p>
            <p className={styles.onParleDu}>On parle du C2N</p>
            <p className={styles.faitsMarquants}>Faits Marquants</p>
          </div>
        </div>
        <div className={styles.projectMonitoring}>
          <div className={styles.title1}>Language</div>
          <div className={styles.budgetTracking}>
            <div className={styles.title2}>
              <span>FR</span>
              <span className={styles.en}> / EN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
