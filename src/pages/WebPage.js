const WebPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start text-center text-lg text-dark-blue font-title5">
      <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-3 px-[59px] gap-[7px] text-left text-xs text-primary border-b-[1px] border-solid border-aliceblue">
        <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-2 border-b-[1px] border-solid border-yellowgreen-200">
          <div className="flex-1 flex flex-row items-center justify-between">
            <div className="self-stretch flex flex-col items-start justify-center py-3 px-6">
              <img
                className="w-[200px] flex-1 max-h-full object-cover"
                alt=""
                src="/navbar-brand@2x.png"
              />
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-row flex-wrap items-center justify-end gap-[12px]">
              <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px">
                <div className="relative tracking-[-0.01em] leading-[17px]">
                  Accès
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px">
                <div className="relative tracking-[-0.01em] leading-[17px]">
                  Intranet
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px">
                <div className="relative tracking-[-0.01em] leading-[17px]">
                  Contact
                </div>
              </div>
              <div className="overflow-hidden flex flex-row items-start justify-start pt-0 px-3 pb-px border-r-[1px] border-solid border-yellowgreen-100">
                <div className="relative tracking-[-0.01em] leading-[17px]">
                  Annuaire
                </div>
              </div>
            </div>
            <div className="w-[113px] h-20 flex flex-row items-center justify-center py-2 px-5 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <div className="w-[97px] h-20 flex flex-row items-center justify-center py-2 px-5 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-11@2x.png"
              />
            </div>
            <div className="w-[88px] h-20 flex flex-row items-center justify-center py-2 px-5 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
        </div>
        <nav
          className="m-0 self-stretch h-[43px] flex flex-row items-center justify-start text-left text-xs text-prim-light font-title5 md:items-center md:justify-end"
          id="mainNavigation"
        >
          <div className="flex flex-row flex-wrap items-center justify-end py-0 px-7 gap-[24px] md:hidden">
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none]"
                href="https://link"
                target="_blank"
              >
                Le laboratoire
              </a>
              <img
                className="w-[9px] relative h-[5px]"
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none]"
                href="https://link"
                target="_blank"
              >
                Recherche
              </a>
              <img
                className="w-[9px] relative h-[5px]"
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none]"
                href="https://link"
                target="_blank"
              >
                Plateforme
              </a>
              <img
                className="w-[9px] relative h-[5px]"
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none]"
                href="https://link"
                target="_blank"
              >{`Partenariat & Valorisation`}</a>
              <img
                className="w-[9px] relative h-[5px]"
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none]"
                href="https://link"
                target="_blank"
              >
                Emploi
              </a>
              <img
                className="w-[9px] relative h-[5px]"
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none]"
                href="https://link"
                target="_blank"
              >
                Science et société
              </a>
              <img
                className="w-[9px] relative h-[5px]"
                alt=""
                src="/chevronbot.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[5px]">
              <a
                className="relative font-bold text-[inherit] [text-decoration:none]"
                href="https://link"
                target="_blank"
              >{`C2N & EUROPE`}</a>
              <img
                className="w-[9px] relative h-[5px]"
                alt=""
                src="/chevronbot.svg"
              />
            </div>
          </div>
          <img
            className="h-[23px] w-[34px] relative hidden lg:hidden md:cursor-pointer md:block"
            alt=""
            src="/menu.svg"
          />
        </nav>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-10 px-6 pb-0 relative gap-[10px] text-35xl">
        <div className="w-[1384.6px] absolute !m-[0] top-[calc(50%_-_762.8px)] left-[calc(50%_-_692.3px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ebf5fa,_#ebf5fa_18.5%,_#f1faff_55.5%,_rgba(241,_250,_255,_0)_94.5%)] h-[998.3px] z-[0]" />
        <div className="self-stretch rounded-2xl flex flex-col items-center justify-start p-8 box-border min-w-[300px] z-[1]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
            <h1
              className="m-0 self-stretch relative text-inherit tracking-[-0.03em] leading-[58px] font-bold font-inherit"
              id="heroTitle"
            >
              <span>{`Recherches en `}</span>
              <span className="text-secondary">matériaux</span>
              <span>{`, `}</span>
              <span className="text-secondary">nanophotonique</span>
              <span>{`, `}</span>
              <span className="text-secondary">nanoélectronique</span>
              <span className="whitespace-pre-wrap">{`,  `}</span>
              <span className="text-secondary">nano-bio-technologies</span>
              <span>{` et `}</span>
              <span className="text-secondary">microsystèmes</span>
            </h1>
            <div className="self-stretch relative text-2xl tracking-[-0.03em] leading-[27px] text-greyblue">
              Le Centre de Nanosciences et de Nanotechnologies - C2N
              (CNRS/Université Paris-Saclay) développe des recherches dans les
              domaines des matériaux, de la nanophotonique, de la
              nanoélectronique, des nano-bio-technologies et des microsystèmes,
              ainsi que dans ceux des nanotechnologies.
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-center gap-[10px]">
              <button className="cursor-pointer py-2 px-8 bg-[transparent] rounded-31xl [background:linear-gradient(180deg,_#174269,_#3e6392)] flex flex-row items-center justify-start border-[1px] border-solid border-prim-light">
                <div className="relative text-lg tracking-[-0.03em] leading-[32px] font-semibold font-healine-6 text-light-level-1 text-left">
                  En savoir plus sur le laboratoire
                </div>
              </button>
              <button className="cursor-pointer py-2 px-8 bg-[transparent] rounded-31xl flex flex-row items-center justify-start border-[1px] border-solid border-overdark">
                <div className="relative text-lg tracking-[-0.03em] leading-[32px] font-semibold font-healine-6 text-overdark text-left">
                  Nos départements de recherche
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-secondary">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-16 px-6 pb-0 gap-[32px]">
          <h4 className="m-0 w-[560px] relative text-inherit tracking-[-0.03em] leading-[32px] uppercase font-bold font-inherit inline-block">
            Nos partenaires
          </h4>
          <div className="w-full flex flex-col items-center justify-center py-0 px-[50px] box-border min-w-[300px] max-w-[800px]">
            <div
              className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 px-6 gap-[64px]"
              overflow="hidden"
            >
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
                  alt=""
                  src="/image-21@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
                  alt=""
                  src="/image-22@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
                  alt=""
                  src="/image-23@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
                  alt=""
                  src="/image-24@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
                  alt=""
                  src="/image-25@2x.png"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <img
                  className="w-[166.8px] relative h-16 object-cover mix-blend-multiply"
                  alt=""
                  src="/image-26@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-0 flex flex-row items-center justify-center">
            <div className="w-[800px] h-[150px] flex flex-row items-start justify-between max-w-[800px]">
              <img
                className="w-[13.3px] relative h-[23.6px] object-contain"
                alt=""
                src="/slideleft.svg"
              />
              <img
                className="w-[13.3px] relative h-[23.6px] object-contain"
                alt=""
                src="/slideright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-16 px-0 gap-[32px] text-left text-secondary">
        <div className="self-stretch flex flex-col items-center justify-start gap-[60px]">
          <div className="flex flex-col items-center justify-start relative gap-[16px]">
            <h4 className="m-0 relative text-inherit leading-[25px] font-bold font-inherit z-[0]">
              NOS DEPARTEMENTS
            </h4>
            <div className="w-[1181px] absolute !m-[0] top-[90.5px] left-[-270.5px] box-border h-px min-w-[300px] max-w-[1180px] z-[1] border-t-[1px] border-solid border-secondary" />
            <div className="bg-white flex flex-row items-center justify-start py-0 px-4 z-[2] text-center text-23xl text-dark-blue">
              <h2 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit">
                <p className="m-0">{` L’unité est structurée `}</p>
                <p className="m-0">{`en 4 départements scientifiques `}</p>
              </h2>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[16px]">
            <article className="w-[292px] rounded-3xl bg-white box-border h-[426px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 min-w-[292px] max-w-[594px] text-center text-5xl text-grass font-oswald border-[1px] border-solid border-steelblue-200">
              <div className="self-stretch rounded-3xl h-[194px] flex flex-col items-center justify-start p-3 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-39@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-6 pl-4 gap-[10px]">
                <b className="self-stretch relative leading-[32px]">
                  <span>DÉPARTEMENT</span>
                  <span className="text-steelblue-100"> PHOTONIQUE</span>
                </b>
                <div className="self-stretch relative text-sm leading-[20px] font-light font-title5 text-dark-blue">
                  Le département photonique du C2N regroupe un large éventail
                  d’activités de recherche, allant de la recherche fondamentale
                  au développement de nouveaux dispositifs photoniques.
                </div>
              </div>
            </article>
            <article className="w-[292px] rounded-3xl bg-white box-border h-[426px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 min-w-[292px] max-w-[594px] text-center text-5xl text-grass font-oswald border-[1px] border-solid border-steelblue-200">
              <div className="self-stretch rounded-3xl h-[194px] flex flex-col items-center justify-start p-3 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-391@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-6 pl-4 gap-[10px]">
                <b className="self-stretch relative leading-[32px]">
                  <p className="m-0">DÉPARTEMENT</p>
                  <p className="m-0 text-steelblue-100">MATÉRIAUX</p>
                </b>
                <div className="self-stretch relative text-sm leading-[20px] font-light font-title5 text-dark-blue">{`L'innovation en science des matériaux est essentielle pour la R&D de demain. Au C2N, cinq équipes fabriquent et étudient les propriétés de nouvelles structures avec des fonctionnalités avancées.`}</div>
              </div>
            </article>
            <article className="w-[292px] rounded-3xl bg-white box-border h-[426px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 min-w-[292px] max-w-[594px] text-center text-5xl text-grass font-oswald border-[1px] border-solid border-steelblue-200">
              <div className="self-stretch rounded-3xl h-[194px] flex flex-col items-center justify-start p-3 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-392@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-6 pl-4 gap-[10px]">
                <b className="self-stretch relative leading-[32px] uppercase">
                  <p className="m-0">Département</p>
                  <p className="m-0 text-steelblue-100">nano-électronique</p>
                </b>
                <div className="self-stretch relative text-sm leading-[20px] font-light font-title5 text-dark-blue">
                  Ce Département se focalise sur la compréhension et la
                  réalisation de phénomènes et de dispositifs à l'échelle du
                  nanomètre, ainsi que sur le développement d'architectures pour
                  les nanocircuits intégrés.
                </div>
              </div>
            </article>
            <article className="w-[292px] rounded-3xl bg-white box-border h-[426px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-4 min-w-[292px] max-w-[594px] text-center text-5xl text-grass font-oswald border-[1px] border-solid border-steelblue-200">
              <div className="self-stretch rounded-3xl h-[194px] flex flex-col items-center justify-start p-3 box-border">
                <img
                  className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/rectangle-393@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-6 pl-4 gap-[10px]">
                <b className="self-stretch relative leading-[32px] uppercase">
                  <span>Département</span>
                  <span className="text-steelblue-100">
                    {" "}
                    microsystèmes et nanobiofluidique
                  </span>
                </b>
                <div className="self-stretch relative text-sm leading-[20px] font-light font-title5 text-dark-blue">
                  L’activité de recherche du département est centrée sur l’étude
                  et la conception de micro / nano dispositifs innovants.
                </div>
              </div>
            </article>
          </div>
        </div>
        <button className="cursor-pointer py-2 pr-2 pl-8 bg-[transparent] rounded-31xl [background:linear-gradient(180deg,_#174269,_#3e6392)] flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-prim-light">
          <div className="relative text-lg tracking-[-0.03em] leading-[32px] font-semibold font-healine-6 text-light-level-1 text-left">
            En savoir plus
          </div>
          <div className="w-8 rounded-31xl box-border h-8 flex flex-col items-center justify-center border-[1px] border-solid border-white">
            <img
              className="w-2 relative h-[14.2px] object-contain"
              alt=""
              src="/vector.svg"
            />
          </div>
        </button>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-16 px-6 pb-[132px] text-23xl">
        <div className="self-stretch rounded-2xl flex flex-col items-center justify-start py-0 px-8 gap-[40px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start relative">
              <div className="w-[1181px] absolute !m-[0] top-[27.5px] left-[-0.5px] box-border h-px z-[0] border-t-[1px] border-solid border-secondary" />
              <div className="bg-white flex flex-row items-center justify-center py-0 px-3 z-[1]">
                <h2 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit">
                  L’actualité du laboratoire
                </h2>
              </div>
            </div>
            <div className="bg-white flex flex-row items-center justify-start gap-[10px] text-left text-sm text-secondary">
              <div className="relative leading-[20px] font-medium">
                Actualités
              </div>
              <div className="relative leading-[20px] font-medium text-overdark">
                |
              </div>
              <div className="relative leading-[20px] font-medium">Agenda</div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[20px]">
            <article className="w-[372.4px] rounded-3xl-8 bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-center p-[15.199999809265137px] gap-[15.199999809265137px] text-left text-sm-3 text-secondary-800 font-title5 border-[0.9px] border-solid border-primary-25">
              <img
                className="w-[342px] relative rounded-base-2 h-[228px] object-cover"
                alt=""
                src="/rectangle-38@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start p-[7.599999904632568px] gap-[19px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15.199999809265137px]">
                  <div className="rounded-7xs-7 bg-mediumslateblue flex flex-row items-center justify-center py-[3.799999952316284px] px-[9.5px] text-steelblue-100">
                    <div className="relative leading-[19px] font-medium">
                      7 décembre 2023
                    </div>
                  </div>
                  <b className="self-stretch relative text-3xl-8 leading-[26.6px]">
                    Titiksha Srivastava, Lauréate du concours Chargé.e de
                    recherche CNRS
                  </b>
                  <div className="self-stretch relative text-base-2 leading-[19px]">
                    Titiksha Srivastava, originaire d'Inde, a cultivé son
                    intérêt pour les nanosciences en obtenant un Master en
                    Nanosciences et Nanotechnologies à l'Université Grenoble
                    Alpes. Son stage …
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start relative gap-[19px] text-xs-4 text-green">
                  <div className="flex flex-row items-center justify-start gap-[11.399999618530273px] z-[0]">
                    <div className="w-[34.2px] relative rounded-7xl-6 box-border h-[34.2px] border-[0.9px] border-solid border-grass" />
                    <div className="relative leading-[22.8px] font-medium">
                      Lire la suite
                    </div>
                  </div>
                  <img
                    className="w-[9.6px] absolute !m-[0] top-[8.6px] left-[12.3px] h-[17.1px] object-contain z-[1]"
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
            </article>
            <article className="w-[409.6px] rounded-[25.08px] bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-center p-[16.719999313354492px] gap-[16.719999313354492px] text-left text-[14.6px] text-secondary-800 font-title5 border-[1px] border-solid border-primary-25">
              <img
                className="w-[376.2px] relative rounded-[16.72px] h-[250.8px] object-cover"
                alt=""
                src="/rectangle-381@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start p-[8.359999656677246px] gap-[20.899999618530273px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.719999313354492px]">
                  <div className="rounded-[6.27px] bg-mediumslateblue flex flex-row items-center justify-center py-[4.179999828338623px] px-[10.449999809265137px] text-steelblue-100">
                    <div className="relative leading-[20.9px] font-medium">
                      7 décembre 2023
                    </div>
                  </div>
                  <b className="self-stretch relative text-[25.1px] leading-[29.26px]">
                    Le C2N et ses partenaires dévoilent un réseau neuronal
                    innovant basé sur les memristors pour améliorer le
                    diagnostic médical.
                  </b>
                  <div className="self-stretch relative text-[16.7px] leading-[20.9px]">
                    Une étude novatrice publiée dans Nature Communications le 7
                    décembre 2023 démontre une avancée majeure dans la
                    technologie des réseaux neuronaux, avec des implications
                    significatives …
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start relative gap-[20.899999618530273px] text-[12.5px] text-green">
                  <div className="flex flex-row items-center justify-start gap-[12.539999961853027px] z-[0]">
                    <div className="w-[37.6px] relative rounded-[29.26px] box-border h-[37.6px] border-[1px] border-solid border-grass" />
                    <div className="relative leading-[25.08px] font-medium">
                      Lire la suite
                    </div>
                  </div>
                  <img
                    className="w-[10.6px] absolute !m-[0] top-[9.4px] left-[13.5px] h-[18.8px] object-contain z-[1]"
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
              </div>
            </article>
            <article className="w-[353.8px] rounded-[21.66px] bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-center p-[14.4399995803833px] gap-[14.4399995803833px] text-left text-[12.6px] text-secondary-800 font-title5 border-[0.9px] border-solid border-primary-25">
              <img
                className="w-[324.9px] relative rounded-[14.44px] h-[216.6px] object-cover"
                alt=""
                src="/rectangle-382@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start p-[7.21999979019165px] gap-[18.049999237060547px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[14.4399995803833px]">
                  <div className="rounded-[5.41px] bg-mediumslateblue flex flex-row items-center justify-center py-[3.609999895095825px] px-[9.024999618530273px] text-steelblue-100">
                    <div className="relative leading-[18.05px] font-medium">
                      7 décembre 2023
                    </div>
                  </div>
                  <b className="self-stretch relative text-[21.7px] leading-[25.27px]">
                    Pascale Senellart nommée membre permanente du « Conseil
                    présidentiel de la science »
                  </b>
                  <div className="self-stretch relative text-[14.4px] leading-[18.05px]">
                    Jeudi 7 décembre 2023, le Président de la République,
                    Emmanuel Macron, a annoncé la création du « Conseil
                    présidentiel de la science » composé de douze scientifiques.
                    …
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start relative gap-[18.049999237060547px] text-[10.8px] text-green">
                  <div className="flex flex-row items-center justify-start gap-[10.829999923706055px] z-[0]">
                    <div className="w-[32.5px] relative rounded-[25.27px] box-border h-[32.5px] border-[0.9px] border-solid border-grass" />
                    <div className="relative leading-[21.66px] font-medium">
                      Lire la suite
                    </div>
                  </div>
                  <img
                    className="w-[9.1px] absolute !m-[0] top-[8.1px] left-[11.7px] h-[16.2px] object-contain z-[1]"
                    alt=""
                    src="/vector3.svg"
                  />
                </div>
              </div>
            </article>
          </div>
          <div className="self-stretch h-0 flex flex-row items-center justify-center">
            <div className="w-[800px] h-[150px] flex flex-row items-start justify-between max-w-[800px]">
              <img
                className="w-[13.3px] relative h-[23.6px] object-contain"
                alt=""
                src="/slideleft.svg"
              />
              <img
                className="w-[13.3px] relative h-[23.6px] object-contain"
                alt=""
                src="/slideright.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[8px]">
            <div className="w-12 relative rounded-3xs bg-primary h-2.5" />
            <div className="w-5 relative rounded-3xs bg-grass h-2.5" />
            <div className="w-5 relative rounded-3xs bg-grass h-2.5" />
          </div>
        </div>
      </div>
      <footer className="self-stretch bg-overdark flex flex-row items-start justify-center pt-16 px-6 pb-2 relative gap-[40px] text-left text-base text-white font-oswald">
        <div className="w-[512px] absolute !m-[0] top-[-118px] left-[-170px] h-[512px] z-[0]">
          <img
            className="absolute h-[73.52%] w-[73.46%] top-[13.28%] right-[-0.33%] bottom-[13.2%] left-[26.88%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group-4@2x.png"
          />
          <div className="absolute h-[15.04%] w-[51.17%] top-[42.58%] right-[8.98%] bottom-[42.38%] left-[39.84%] flex flex-col items-start justify-start">
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[12px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                alt=""
                src="/cigle.svg"
              />
              <img
                className="w-[172.8px] relative h-[72.2px] overflow-hidden shrink-0"
                alt=""
                src="/txt.svg"
              />
            </div>
          </div>
          <div className="absolute top-[323px] left-[211px] h-[88px] flex flex-col items-start justify-start">
            <div className="w-[221px] flex flex-row items-center justify-start gap-[24px]">
              <div className="relative leading-[13px] font-light">
                Nous suivre
              </div>
              <div className="flex-1 flex flex-row items-end justify-start gap-[16px]">
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/icons--logos--simple--instagram.svg"
                />
                <img
                  className="w-[17.9px] relative h-6"
                  alt=""
                  src="/vector4.svg"
                />
                <img
                  className="w-6 relative h-6 object-cover hidden"
                  alt=""
                  src="/icons--logos--simple--youtube@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[32px] z-[1] text-sm text-secondary font-title5">
          <div className="self-stretch flex flex-row items-start justify-center">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start pt-4 pb-0 pr-0 pl-[330px] box-border gap-[12px] max-w-[1240px]">
              <div className="w-[289px] flex flex-col items-start justify-start gap-[24px]">
                <div className="flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                    Contact
                  </div>
                  <div className="w-[280px] relative leading-[20px] font-light text-white inline-block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[4px] text-grass">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                    <span>{`Email : `}</span>
                    <span className="text-white">info@jstemplate.net</span>
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                    <span>Phone :</span>
                    <span className="text-secondary-800">{` `}</span>
                    <span className="text-white">880 123 456 789</span>
                  </div>
                </div>
              </div>
              <div className="w-[168px] flex flex-col items-start justify-start">
                <div className="w-[199px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                    EN UN CLIC
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-white">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-light">
                      <p className="m-0">Direction</p>
                      <p className="m-0">Services</p>
                      <p className="m-0">Organigramme</p>
                      <p className="m-0">Se rendre au C2N</p>
                      <p className="m-0">Annuaire</p>
                      <p className="m-0">Espace membres</p>
                      <p className="m-0">Wiki information</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[178px] flex flex-col items-start justify-start">
                <div className="w-[199px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                    LA SCIENCE DU C2N
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-white">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-light">
                      <p className="m-0">Direction</p>
                      <p className="m-0">Services</p>
                      <p className="m-0">Organigramme</p>
                      <p className="m-0">Se rendre au C2N</p>
                      <p className="m-0">Annuaire</p>
                      <p className="m-0">Espace membres</p>
                      <p className="m-0">Wiki information</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[199px] flex flex-col items-start justify-start gap-[12px]">
                <div className="w-[199px] flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-medium">
                    À PROPOS DU C2N
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-white">
                    <div className="self-stretch relative tracking-[-0.02em] leading-[24px] font-light">
                      <p className="m-0">Evènements</p>
                      <p className="m-0">Prix et distinctions</p>
                      <p className="m-0">On parle du C2N</p>
                      <p className="m-0">Faits Marquants</p>
                    </div>
                  </div>
                </div>
                <div className="w-[199px] h-5 flex flex-row items-center justify-start pt-8 px-0 pb-0 box-border gap-[24px] text-base text-grass font-oswald">
                  <div className="flex flex-row items-start justify-start">
                    <div className="w-[64.7px] relative leading-[13px] font-light inline-block shrink-0">
                      Language
                    </div>
                  </div>
                  <div className="w-11 relative h-[11px]">
                    <div className="absolute top-[0px] left-[0px] leading-[11px] uppercase">
                      <span>FR</span>
                      <span className="text-white"> / EN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-24" />
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center max-w-[1240px] text-xs text-light-level-1 font-healine-6">
            <div className="flex flex-row items-center justify-center pt-7 px-0 pb-3 gap-[32px]">
              <div className="relative leading-[150%]">
                Copyright © 2024 Designluch
              </div>
              <div className="flex flex-row items-center justify-start gap-[32px]">
                <div className="relative leading-[150%]">{`Contact `}</div>
                <div className="relative leading-[150%]">Plan du site</div>
                <div className="relative leading-[150%]">Mentions légales</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebPage;
