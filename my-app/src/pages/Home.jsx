import React from 'react';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import WhatWeCanDo from '../components/WhatWeCanDo';
// import ContactForm from '../components/ContactForm';
import TeamSlider from '../components/TeamSlider';
import FunImages from '../components/FunImages';
import FeatureList from "../components/FeatureList";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Services />
      <WhatWeCanDo />
      <TeamSlider />
      <FunImages />
      <FeatureList  />
      {/* <ContactForm /> */}
      
    </div>
  );
};

export default Home;
