import React from "react";
import Banner from "../../libs/Banner/Banner";
import Tabs from "../../libs/Tabs/Tabs";
import Reviews from "../../libs/Reviews/Reviews";
import TrustedBy from "../../libs/Trusted/TrustedBy";
import InstructorsHeader from "../../libs/Instructors/Instructors";
import Trending from "../../libs/Trending/Trending";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home | E-Learning</title>
      </Helmet>
      <Banner></Banner>
      <Tabs></Tabs>
      <Trending></Trending>
      <Reviews></Reviews>
      <InstructorsHeader></InstructorsHeader>
      <TrustedBy></TrustedBy>
    </div>
  );
};

export default Home;
