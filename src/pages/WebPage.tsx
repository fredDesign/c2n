import { FunctionComponent } from "react";
import styles from "./WebPage.module.css";

const WebPage: FunctionComponent = () => {
  return (
    <div className={styles.webPage}>
      <div className={styles.header}>
        <div className={styles.navbarcontainer}>
          <div className={styles.navbarContent}>
            <div className={styles.navbarBrandWrapper}>
              <img
                className={styles.navbarBrandIcon}
                alt=""
                src="/navbar-brand@2x.png"
              />
            </div>
            <div className={styles.navbarMenu}>
              <div className={styles.navbarLink}>
                <div className={styles.accs}>Accès</div>
              </div>
              <div className={styles.navbarLink}>
                <div className={styles.accs}>Intranet</div>
              </div>
              <div className={styles.navbarLink}>
                <div className={styles.accs}>Contact</div>
              </div>
              <div className={styles.navbarLink3}>
                <div className={styles.accs}>Annuaire</div>
              </div>
            </div>
            <div className={styles.mores}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
            <div className={styles.mores1}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
            <div className={styles.mores2}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
            </div>
          </div>
        </div>
        <nav className={styles.mainNav} id="mainNavigation">
          <div className={styles.navList}>
            <div className={styles.laboratoire}>
              <a
                className={styles.leLaboratoire}
                href="https://link"
                target="_blank"
              >
                Le laboratoire
              </a>
              <img
                className={styles.chevronBotIcon}
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className={styles.laboratoire}>
              <a
                className={styles.leLaboratoire}
                href="https://link"
                target="_blank"
              >
                Recherche
              </a>
              <img
                className={styles.chevronBotIcon}
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className={styles.laboratoire}>
              <a
                className={styles.leLaboratoire}
                href="https://link"
                target="_blank"
              >
                Plateforme
              </a>
              <img
                className={styles.chevronBotIcon}
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className={styles.laboratoire}>
              <a
                className={styles.leLaboratoire}
                href="https://link"
                target="_blank"
              >{`Partenariat & Valorisation`}</a>
              <img
                className={styles.chevronBotIcon}
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className={styles.laboratoire}>
              <a
                className={styles.leLaboratoire}
                href="https://link"
                target="_blank"
              >
                Emploi
              </a>
              <img
                className={styles.chevronBotIcon}
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className={styles.laboratoire}>
              <a
                className={styles.leLaboratoire}
                href="https://link"
                target="_blank"
              >
                Science et société
              </a>
              <img
                className={styles.chevronBotIcon}
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className={styles.laboratoire}>
              <a
                className={styles.leLaboratoire}
                href="https://link"
                target="_blank"
              >{`C2N & EUROPE`}</a>
              <img
                className={styles.chevronBotIcon}
                alt=""
                src="/chevronbot.svg"
              />
            </div>
          </div>
          <img className={styles.menuIcon} alt="" src="/menu.svg" />
        </nav>
      </div>
      <div className={styles.heroNoImage}>
        <div className={styles.heroNoImageChild} />
        <div className={styles.smallContainer}>
          <div className={styles.content}>
            <h1 className={styles.recherchesEnMatriauxContainer} id="heroTitle">
              <span>{`Recherches en `}</span>
              <span className={styles.matriaux}>matériaux</span>
              <span>{`, `}</span>
              <span className={styles.matriaux}>nanophotonique</span>
              <span>{`, `}</span>
              <span className={styles.matriaux}>nanoélectronique</span>
              <span className={styles.span}>{`,  `}</span>
              <span className={styles.matriaux}>nano-bio-technologies</span>
              <span>{` et `}</span>
              <span className={styles.matriaux}>microsystèmes</span>
            </h1>
            <div className={styles.leCentreDe}>
              Le Centre de Nanosciences et de Nanotechnologies - C2N
              (CNRS/Université Paris-Saclay) développe des recherches dans les
              domaines des matériaux, de la nanophotonique, de la
              nanoélectronique, des nano-bio-technologies et des microsystèmes,
              ainsi que dans ceux des nanotechnologies.
            </div>
            <div className={styles.row}>
              <button className={styles.buttonPrimary}>
                <div className={styles.enSavoirPlus}>
                  En savoir plus sur le laboratoire
                </div>
              </button>
              <button className={styles.buttonSecondary}>
                <div className={styles.nosDpartementsDe}>
                  Nos départements de recherche
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logoSlider}>
        <div className={styles.logoSlider1}>
          <h4 className={styles.title}>Nos partenaires</h4>
          <div className={styles.content1}>
            <div className={styles.logos} overflow="hidden">
              <div className={styles.logoSlider11}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className={styles.logoSlider11}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className={styles.logoSlider11}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className={styles.logoSlider11}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className={styles.logoSlider11}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className={styles.logoSlider11}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className={styles.logoSlider11}>
                <img
                  className={styles.image2Icon}
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.arrowCont}>
            <div className={styles.arrowPlacement}>
              <img
                className={styles.slideLeftIcon}
                alt=""
                src="/slideleft.svg"
              />
              <img
                className={styles.slideLeftIcon}
                alt=""
                src="/slideright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.departements}>
        <div className={styles.depContainer}>
          <div className={styles.depTitle}>
            <h4 className={styles.nosDepartements}>NOS DEPARTEMENTS</h4>
            <div className={styles.depTitleChild} />
            <div className={styles.lunitEstStructureEn4DWrapper}>
              <h2 className={styles.lunitEstStructureContainer}>
                <p
                  className={styles.lunitEstStructure}
                >{` L’unité est structurée `}</p>
                <p
                  className={styles.lunitEstStructure}
                >{`en 4 départements scientifiques `}</p>
              </h2>
            </div>
          </div>
          <div className={styles.depList}>
            <article className={styles.departement}>
              <div className={styles.departementInner}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-39@2x.png"
                />
              </div>
              <div className={styles.dpartementPhotoniqueParent}>
                <b className={styles.dpartementPhotonique}>
                  <span>DÉPARTEMENT</span>
                  <span className={styles.photonique}> PHOTONIQUE</span>
                </b>
                <div className={styles.leDpartementPhotonique}>
                  Le département photonique du C2N regroupe un large éventail
                  d’activités de recherche, allant de la recherche fondamentale
                  au développement de nouveaux dispositifs photoniques.
                </div>
              </div>
            </article>
            <article className={styles.departement}>
              <div className={styles.departementInner}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-39@2x.png"
                />
              </div>
              <div className={styles.dpartementPhotoniqueParent}>
                <b className={styles.dpartementPhotonique}>
                  <p className={styles.lunitEstStructure}>DÉPARTEMENT</p>
                  <p className={styles.nanoLectronique}>MATÉRIAUX</p>
                </b>
                <div
                  className={styles.leDpartementPhotonique}
                >{`L'innovation en science des matériaux est essentielle pour la R&D de demain. Au C2N, cinq équipes fabriquent et étudient les propriétés de nouvelles structures avec des fonctionnalités avancées.`}</div>
              </div>
            </article>
            <article className={styles.departement}>
              <div className={styles.departementInner}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-39@2x.png"
                />
              </div>
              <div className={styles.dpartementPhotoniqueParent}>
                <b className={styles.dpartementPhotonique2}>
                  <p className={styles.lunitEstStructure}>Département</p>
                  <p className={styles.nanoLectronique}>nano-électronique</p>
                </b>
                <div className={styles.leDpartementPhotonique}>
                  Ce Département se focalise sur la compréhension et la
                  réalisation de phénomènes et de dispositifs à l'échelle du
                  nanomètre, ainsi que sur le développement d'architectures pour
                  les nanocircuits intégrés.
                </div>
              </div>
            </article>
            <article className={styles.departement}>
              <div className={styles.departementInner}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/rectangle-39@2x.png"
                />
              </div>
              <div className={styles.dpartementPhotoniqueParent}>
                <b className={styles.dpartementPhotonique2}>
                  <span>Département</span>
                  <span className={styles.photonique}>
                    {" "}
                    microsystèmes et nanobiofluidique
                  </span>
                </b>
                <div className={styles.leDpartementPhotonique}>
                  L’activité de recherche du département est centrée sur l’étude
                  et la conception de micro / nano dispositifs innovants.
                </div>
              </div>
            </article>
          </div>
        </div>
        <button className={styles.buttonPrimary1}>
          <div className={styles.enSavoirPlus}>En savoir plus</div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
        </button>
      </div>
      <div className={styles.section}>
        <div className={styles.actuComponent}>
          <div className={styles.actuHeader}>
            <div className={styles.actuTitle}>
              <div className={styles.actuTitleChild} />
              <div className={styles.lactualitDuLaboratoireWrapper}>
                <h2 className={styles.lunitEstStructureContainer}>
                  L’actualité du laboratoire
                </h2>
              </div>
            </div>
            <div className={styles.actuTab}>
              <div className={styles.actualits}>Actualités</div>
              <div className={styles.div}>|</div>
              <div className={styles.actualits}>Agenda</div>
            </div>
          </div>
          <div className={styles.actuList}>
            <article className={styles.mPostCardGrid}>
              <img
                className={styles.mPostCardGridChild}
                alt=""
                src="/rectangle-38@2x.png"
              />
              <div className={styles.content2}>
                <div className={styles.heading}>
                  <div className={styles.aBadge}>
                    <div className={styles.text}>7 décembre 2023</div>
                  </div>
                  <b className={styles.title1}>
                    Titiksha Srivastava, Lauréate du concours Chargé.e de
                    recherche CNRS
                  </b>
                  <div className={styles.title2}>
                    Titiksha Srivastava, originaire d'Inde, a cultivé son
                    intérêt pour les nanosciences en obtenant un Master en
                    Nanosciences et Nanotechnologies à l'Université Grenoble
                    Alpes. Son stage …
                  </div>
                </div>
                <div className={styles.shortInfo}>
                  <div className={styles.aAuthor}>
                    <div className={styles.image} />
                    <div className={styles.author}>Lire la suite</div>
                  </div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </article>
            <article className={styles.mPostCardGrid1}>
              <img
                className={styles.mPostCardGridItem}
                alt=""
                src="/rectangle-38@2x.png"
              />
              <div className={styles.content3}>
                <div className={styles.heading1}>
                  <div className={styles.aBadge1}>
                    <div className={styles.text1}>7 décembre 2023</div>
                  </div>
                  <b className={styles.title3}>
                    Le C2N et ses partenaires dévoilent un réseau neuronal
                    innovant basé sur les memristors pour améliorer le
                    diagnostic médical.
                  </b>
                  <div className={styles.title4}>
                    Une étude novatrice publiée dans Nature Communications le 7
                    décembre 2023 démontre une avancée majeure dans la
                    technologie des réseaux neuronaux, avec des implications
                    significatives …
                  </div>
                </div>
                <div className={styles.shortInfo1}>
                  <div className={styles.aAuthor1}>
                    <div className={styles.image1} />
                    <div className={styles.author1}>Lire la suite</div>
                  </div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </article>
            <article className={styles.mPostCardGrid2}>
              <img
                className={styles.mPostCardGridInner}
                alt=""
                src="/rectangle-38@2x.png"
              />
              <div className={styles.content4}>
                <div className={styles.heading2}>
                  <div className={styles.aBadge2}>
                    <div className={styles.text2}>7 décembre 2023</div>
                  </div>
                  <b className={styles.title5}>
                    Pascale Senellart nommée membre permanente du « Conseil
                    présidentiel de la science »
                  </b>
                  <div className={styles.title6}>
                    Jeudi 7 décembre 2023, le Président de la République,
                    Emmanuel Macron, a annoncé la création du « Conseil
                    présidentiel de la science » composé de douze scientifiques.
                    …
                  </div>
                </div>
                <div className={styles.shortInfo2}>
                  <div className={styles.aAuthor2}>
                    <div className={styles.image2} />
                    <div className={styles.author2}>Lire la suite</div>
                  </div>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </div>
            </article>
          </div>
          <div className={styles.arrowCont}>
            <div className={styles.arrowPlacement}>
              <img
                className={styles.slideLeftIcon}
                alt=""
                src="/slideleft.svg"
              />
              <img
                className={styles.slideLeftIcon}
                alt=""
                src="/slideright.svg"
              />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild1} />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.layer1}>
          <img className={styles.layer1Child} alt="" src="/group-4@2x.png" />
          <div className={styles.logoL}>
            <div className={styles.logtype}>
              <img className={styles.cigleIcon} alt="" src="/cigle.svg" />
              <img className={styles.txtIcon} alt="" src="/txt.svg" />
            </div>
          </div>
          <div className={styles.socialWrapper}>
            <div className={styles.social}>
              <div className={styles.title7}>Nous suivre</div>
              <div className={styles.socialLogos}>
                <img
                  className={styles.iconsLogosSimpleInsta}
                  alt=""
                  src="/icons--logos--simple--instagram.svg"
                />
                <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
                <img
                  className={styles.iconsLogosSimpleYoutu}
                  alt=""
                  src="/icons--logos--simple--youtube@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.columnsParent}>
          <div className={styles.columns}>
            <div className={styles.smallColumns}>
              <div className={styles.info}>
                <div className={styles.about}>
                  <div className={styles.email}>Contact</div>
                  <div className={styles.desciption}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </div>
                </div>
                <div className={styles.contact2}>
                  <div className={styles.email}>
                    <span>{`Email : `}</span>
                    <span className={styles.infojstemplatenet}>
                      info@jstemplate.net
                    </span>
                  </div>
                  <div className={styles.email}>
                    <span>Phone :</span>
                    <span className={styles.span1}>{` `}</span>
                    <span className={styles.infojstemplatenet}>
                      880 123 456 789
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.content5}>
                  <div className={styles.enUnClic}>EN UN CLIC</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <p className={styles.lunitEstStructure}>Direction</p>
                      <p className={styles.lunitEstStructure}>Services</p>
                      <p className={styles.lunitEstStructure}>Organigramme</p>
                      <p className={styles.lunitEstStructure}>
                        Se rendre au C2N
                      </p>
                      <p className={styles.lunitEstStructure}>Annuaire</p>
                      <p className={styles.lunitEstStructure}>Espace membres</p>
                      <p className={styles.lunitEstStructure}>
                        Wiki information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column1}>
                <div className={styles.content5}>
                  <div className={styles.enUnClic}>LA SCIENCE DU C2N</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <p className={styles.lunitEstStructure}>Direction</p>
                      <p className={styles.lunitEstStructure}>Services</p>
                      <p className={styles.lunitEstStructure}>Organigramme</p>
                      <p className={styles.lunitEstStructure}>
                        Se rendre au C2N
                      </p>
                      <p className={styles.lunitEstStructure}>Annuaire</p>
                      <p className={styles.lunitEstStructure}>Espace membres</p>
                      <p className={styles.lunitEstStructure}>
                        Wiki information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column2}>
                <div className={styles.content5}>
                  <div className={styles.enUnClic}>À PROPOS DU C2N</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <p className={styles.lunitEstStructure}>Evènements</p>
                      <p className={styles.lunitEstStructure}>
                        Prix et distinctions
                      </p>
                      <p className={styles.lunitEstStructure}>
                        On parle du C2N
                      </p>
                      <p className={styles.lunitEstStructure}>
                        Faits Marquants
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.social1}>
                  <div className={styles.titleWrapper}>
                    <div className={styles.title8}>Language</div>
                  </div>
                  <div className={styles.titleContainer}>
                    <div className={styles.title9}>
                      <span>FR</span>
                      <span className={styles.infojstemplatenet}> / EN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.column3} />
            </div>
          </div>
          <div className={styles.copyrightWrapper}>
            <div className={styles.copyright}>
              <div className={styles.text3}>Copyright © 2024 Designluch</div>
              <div className={styles.textParent}>
                <div className={styles.text3}>{`Contact `}</div>
                <div className={styles.text3}>Plan du site</div>
                <div className={styles.text3}>Mentions légales</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebPage;
