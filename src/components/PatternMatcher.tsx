import { FunctionComponent } from "react";
import styles from "./PatternMatcher.module.css";

const PatternMatcher: FunctionComponent = () => {
  return (
    <div className={styles.patternMatcher}>
      <div className={styles.actuHeader}>
        <div className={styles.actuTitle}>
          <div className={styles.scoreCalculator} />
          <div className={styles.clusterAnalyzer}>
            <h1 className={styles.lactualitDuLaboratoire}>
              L’actualité du laboratoire
            </h1>
          </div>
        </div>
        <div className={styles.actuTabWrapper}>
          <div className={styles.actuTab}>
            <div className={styles.actualits}>Actualités</div>
            <div className={styles.sequenceHandler}>|</div>
            <div className={styles.agenda}>Agenda</div>
          </div>
        </div>
      </div>
      <div className={styles.actuList}>
        <div className={styles.connectionManager}>
          <div className={styles.mPostCardGrid}>
            <img
              className={styles.mPostCardGridChild}
              loading="lazy"
              alt=""
              src="/rectangle-38@2x.png"
            />
            <div className={styles.content}>
              <div className={styles.heading}>
                <div className={styles.aBadge}>
                  <div className={styles.layerProcessor}>7 décembre 2023</div>
                </div>
                <b className={styles.title}>
                  Titiksha Srivastava, Lauréate du concours Chargé.e de
                  recherche CNRS
                </b>
                <div className={styles.title1}>
                  Titiksha Srivastava, originaire d'Inde, a cultivé son intérêt
                  pour les nanosciences en obtenant un Master en Nanosciences et
                  Nanotechnologies à l'Université Grenoble Alpes. Son stage …
                </div>
              </div>
              <div className={styles.shortInfo}>
                <div className={styles.aAuthor}>
                  <div className={styles.image} />
                  <div className={styles.gradientDescent}>
                    <div className={styles.author}>Lire la suite</div>
                  </div>
                </div>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mPostCardGrid1}>
          <img
            className={styles.mPostCardGridItem}
            alt=""
            src="/rectangle-38-1@2x.png"
          />
          <div className={styles.content1}>
            <div className={styles.heading1}>
              <button className={styles.aBadge1}>
                <div className={styles.text}>7 décembre 2023</div>
              </button>
              <b className={styles.title2}>
                Le C2N et ses partenaires dévoilent un réseau neuronal innovant
                basé sur les memristors pour améliorer le diagnostic médical.
              </b>
              <div className={styles.title3}>
                Une étude novatrice publiée dans Nature Communications le 7
                décembre 2023 démontre une avancée majeure dans la technologie
                des réseaux neuronaux, avec des implications significatives …
              </div>
            </div>
            <div className={styles.shortInfo1}>
              <div className={styles.aAuthor1}>
                <div className={styles.image1} />
                <div className={styles.subtreeMerger}>
                  <div className={styles.author1}>Lire la suite</div>
                </div>
              </div>
              <img
                className={styles.treeBalancerIcon}
                alt=""
                src="/vector-12.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.treeOptimizer}>
          <div className={styles.mPostCardGrid2}>
            <img
              className={styles.treeVisualizerIcon}
              alt=""
              src="/rectangle-38-2@2x.png"
            />
            <div className={styles.content2}>
              <div className={styles.heading2}>
                <div className={styles.aBadge2}>
                  <div className={styles.inputCollector}>7 décembre 2023</div>
                </div>
                <b className={styles.title4}>
                  Pascale Senellart nommée membre permanente du « Conseil
                  présidentiel de la science »
                </b>
                <div className={styles.title5}>
                  Jeudi 7 décembre 2023, le Président de la République, Emmanuel
                  Macron, a annoncé la création du « Conseil présidentiel de la
                  science » composé de douze scientifiques. …
                </div>
              </div>
              <div className={styles.shortInfo2}>
                <div className={styles.aAuthor2}>
                  <div className={styles.image2} />
                  <div className={styles.errorHandler}>
                    <div className={styles.author2}>Lire la suite</div>
                  </div>
                </div>
                <img
                  className={styles.treeStructureIcon}
                  alt=""
                  src="/vector-13.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.graphConnection}>
        <div className={styles.matrixManipulation}>
          <div className={styles.algorithmDesign} />
          <div className={styles.algorithmDesign1} />
          <div className={styles.algorithmDesign2} />
        </div>
      </div>
    </div>
  );
};

export default PatternMatcher;
