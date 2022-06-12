import React from "react";
import "./homePage.style.scss";
import Banner from "../../components/Banner/Banner";
import Filter from "../../components/Filter/Filter";
import { Link } from "react-router-dom";
import RecetteContainer from "../../components/Recette/RecetteContainer/RecetteContainer";

function HomePage() {
  return (
    <div className="pageContent-holder">
      <div className="pageContent__inner">
        <div className="pages_">
          <Banner />
          <Filter />
          <RecetteContainer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
