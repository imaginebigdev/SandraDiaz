/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutUs1Date from "../../data/sections/about-us1.json";
import Video2About from "../Video2/video2About";

const AboutUs = () => {
  return (
    <section className="about-us section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <img src="/img/frase.png" alt="logo" />
              <p>{AboutUs1Date.content}</p>
              <br />
              <p>{AboutUs1Date.content2}</p>
              <br />
              <p>{AboutUs1Date.content3}</p>
              <br />
              <p>{AboutUs1Date.content4}</p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <Video2About />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
