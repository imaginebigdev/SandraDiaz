import React from "react";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import AboutUs from "../../components/About-us/about-us";
import ContactArch from "../../components/Contact-arch/contact-arch";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import Works from "../../components/Works/works";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import AboutUs2 from "../../components/About-us/about-us2";
import Projects from "../../components/Projects/Projects";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <LightTheme>
      <NavbarArch navbarRef={navbarRef} theme="themeD" />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Projects />
        <div className="container">
          <div className="mb-50">
            <h3
              className="fw-600 text-u ls1 mb-30 "
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1000px",
                color: "rgb(239, 0, 254)",
              }}
            >
              Instagram
            </h3>
          </div>
        </div>
        <Works />
        <ContactArch />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Homepage1;
