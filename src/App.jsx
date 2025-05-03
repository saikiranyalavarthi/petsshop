import React from "react";
import Navbar from "./Components/Navbar";
import SmallNavbar from "./Components/SmallNavbar";
import BannerSection from "./Components/Banner";
import PetSection from "./Components/Pets";
import Care from "./Components/Care";
import Deals from "./Components/Deals";
import DogBanner from "./Components/DogBanner";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <SmallNavbar />
      <BannerSection />
      <PetSection />
      <Care />
      <Deals />
      <DogBanner />
      <Footer />
    </div>
  );
};

export default App;
