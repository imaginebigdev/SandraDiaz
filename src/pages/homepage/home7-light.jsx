import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import Services5 from "../../components/Services5/services5";
import WorksStyle4 from "../../components/Works-style4/works-style4";
import AboutUs5 from "../../components/About-us5/about-us5";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import SContactForm from "../../components/s-contact-form/s-contact-form";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";

const Homepage = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <div ref={MainContent} className="main-content">
        <IntroWithSlider />
        <Services5 />
        <WorksStyle4 />
        <AboutUs5 />
        <FullTestimonials showHead />
        <Blogs2 />
        <SContactForm noLine />
        <Footer />
      </div>
    </LightTheme>
  );
};

export default Homepage;
