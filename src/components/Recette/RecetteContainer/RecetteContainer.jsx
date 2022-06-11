import React, { useState } from "react";
import recettes from "../../../Data/recettes";
import Recette from "../Recette/Recette";
import "./RecetteContainer.scss";
function RecetteContainer() {
  const [rs, setRs] = useState(recettes);
  return (
    <div className="home-posts-holder">
      <div className="home-posts">
        <div className="home-posts-row">
          {rs?.map((it, index) => {
            return <Recette key={index} {...it} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default RecetteContainer;
