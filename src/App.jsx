import React from "react";
import Navbar from "./Components/Navbar";
import SmallNavbar from "./Components/SmallNavbar";
import BannerSection from "./Components/Banner";
import PetSection from "./Components/Pets";
import Care from "./Components/Care";
import Deals from "./Components/Deals";
import DogBanner from "./Components/DogBanner";
import Footer from "./Components/Footer";
import PetFoodList from "./Components/PetFoodList";
import Bannernew from "./Components/Bannernew";
import Video from "./Components/Video";
import HealthTipsSection from "./Components/HealthTipsSection";
import ReviewsSection from "./Components/ReviewsSection";
import DogBannernew from "./Components/DogBannernew";


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
      <PetFoodList />
      <DogBannernew />
      <PetFoodList />
      <Bannernew />
      <Video />
      <HealthTipsSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default App;
