import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../Hero/Hero.jsx";
import Banner from "../Banner/Banner.jsx";
import AppStore from "../AppStore/AppStore.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
    React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Hero />
       <Banner /> 
        <AppStore /> 
      <Testimonial /> 
      <Footer />
    </div>

  )
}

export default Home;
