import React from "react";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import AboutUs from "../../components/About-us/about-us";
import Video2 from "../../components/Video2/video2";
import ContactArch from "../../components/Contact-arch/contact-arch";
import NavbarArch from "../../components/Navbar-arch/navbar-arch";
import Works from "../../components/Works/works";

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
    var navbar = navbarRef.current;
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
      <Video2 />
      <AboutUs />
      <Works />
      <ContactArch />
      <Footer />
    </LightTheme>
  );
};

export default Homepage1;
