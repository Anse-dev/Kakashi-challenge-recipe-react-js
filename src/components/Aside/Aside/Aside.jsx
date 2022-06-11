import React from "react";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import AsideContainer from "../AsideContainer/AsideContainer";
const Aside = ({ children, props }) => {
  return (
    <AsideContainer>
      <Header />
      <Navigation />
    </AsideContainer>
  );
};

export default Aside;
