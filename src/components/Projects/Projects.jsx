/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";

const Projects = () => {
  let [section, setSection] = React.useState({
    youth: true,
    sports: false,
    security: false,
    urbanism: false,
  });
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section
      className="portfolio po-arch section-padding pb-70"
      id="po-arch"
      style={{ marginBottom: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h3
                style={{
                  color: "rgb(239, 0, 254)",
                }}
                className="wow fadeIn"
                data-wow-delay=".3s"
              >
                Proyectos
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span
                className="active"
                value="youth"
                onClick={() =>
                  setSection({
                    youth: true,
                    sports: false,
                    security: false,
                    urbanism: false,
                  })
                }
              >
                JUVENTUD
              </span>
              <span
                value="sports"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: true,
                    security: false,
                    urbanism: false,
                  })
                }
              >
                DEPORTE
              </span>
              <span
                value="security"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: false,
                    security: true,
                    urbanism: false,
                  })
                }
              >
                SEGURIDAD
              </span>
              <span
                value="urbanism"
                onClick={() =>
                  setSection({
                    youth: false,
                    sports: false,
                    security: false,
                    urbanism: true,
                  })
                }
              >
                URBANISMO
              </span>
            </div>
          </div>

          <div className="gallery full-width">
            {section.youth === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        style={{ marginBottom: "20px" }}
                        className="thumparallax-down wow fadeIn"
                        src="/img/youth.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">Juventud</h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        Our creative Ad agency is ranked among the finest in the
                        US. We cultivate smart ideas for start-ups and seasoned
                        players. Our creative Ad agency is ranked among the
                        finest in the US. We cultivate smart ideas for start-ups
                        and seasoned players. Our creative Ad agency is ranked
                        among the finest in the US. We cultivate smart ideas for
                        start-ups and seasoned players. Our creative Ad agency
                        is ranked among the finest in the US. We cultivate smart
                        ideas for start-ups and seasoned players.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.sports === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        style={{ marginBottom: "20px" }}
                        className="thumparallax-down wow fadeIn"
                        src="/img/sports.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">Deportes</h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        Our creative Ad agency is ranked among the finest in the
                        US. We cultivate smart ideas for start-ups and seasoned
                        players. Our creative Ad agency is ranked among the
                        finest in the US. We cultivate smart ideas for start-ups
                        and seasoned players. Our creative Ad agency is ranked
                        among the finest in the US. We cultivate smart ideas for
                        start-ups and seasoned players. Our creative Ad agency
                        is ranked among the finest in the US. We cultivate smart
                        ideas for start-ups and seasoned players.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.security === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        style={{ marginBottom: "20px" }}
                        className="thumparallax-down wow fadeIn"
                        src="/img/security.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">Seguridad</h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        Our creative Ad agency is ranked among the finest in the
                        US. We cultivate smart ideas for start-ups and seasoned
                        players. Our creative Ad agency is ranked among the
                        finest in the US. We cultivate smart ideas for start-ups
                        and seasoned players. Our creative Ad agency is ranked
                        among the finest in the US. We cultivate smart ideas for
                        start-ups and seasoned players. Our creative Ad agency
                        is ranked among the finest in the US. We cultivate smart
                        ideas for start-ups and seasoned players.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {section.urbanism === true && (
              <div className="container" style={{ marginTop: "60px" }}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img">
                      <img
                        style={{ marginBottom: "20px" }}
                        className="thumparallax-down wow fadeIn"
                        src="/img/urbanism.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 valign">
                    <div className="content pt-0">
                      <h4 className="wow color-font wow fadeIn">Urbanismo</h4>
                      <p className="wow txt wow fadeIn" data-splitting>
                        Our creative Ad agency is ranked among the finest in the
                        US. We cultivate smart ideas for start-ups and seasoned
                        players. Our creative Ad agency is ranked among the
                        finest in the US. We cultivate smart ideas for start-ups
                        and seasoned players. Our creative Ad agency is ranked
                        among the finest in the US. We cultivate smart ideas for
                        start-ups and seasoned players. Our creative Ad agency
                        is ranked among the finest in the US. We cultivate smart
                        ideas for start-ups and seasoned players.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
