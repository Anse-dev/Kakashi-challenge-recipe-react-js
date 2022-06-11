import React, { useState } from "react";
import "./filter.styles.scss";
function Filter() {
  const [country, setCountry] = useState("");
  const [recipe, setRecipe] = useState("");
  const [activeCountrySelect, setActiveCountrySelect] = useState(false);
  const [activeRecipeSelect, setActiveRecipeSelect] = useState(false);

  const toggleActiveCountry = () => {
    if (activeRecipeSelect) {
      setActiveRecipeSelect(false);
    }
    setActiveCountrySelect(!activeCountrySelect);
  };
  const toggleActiveRecipe = () => {
    if (activeCountrySelect) {
      setActiveCountrySelect(false);
    }
    setActiveRecipeSelect(!activeRecipeSelect);
  };

  return (
    <div class="page-filter">
      <form action="/" class="filter-form">
        <div class="title">Filter</div>
        <div class="form-group">
          <input
            onClick={toggleActiveRecipe}
            id="country"
            type="text"
            placeholder="Recettes"
          />
          <div class={`actions-select ${activeRecipeSelect ? "visible" : ""}`}>
            <span>Apéritif</span>
            <span>Entrées</span>
            <span>Plats</span>
            <span>Desserts</span>
            <span>Boissons</span>
          </div>
        </div>
        <div class="form-group">
          <input
            onClick={toggleActiveCountry}
            id="country"
            type="text"
            placeholder="Pays"
          />
          <div class={`actions-select ${activeCountrySelect ? "visible" : ""}`}>
            <span>Côte D'ivoire</span>
            <span>Cameroun</span>
            <span>Sénégal</span>
            <span>Benin</span>
            <span>Togo</span>
          </div>
        </div>
        <div class="form-group">
          <input id="other" type="text" placeholder="other" />
          <div class="actions-select">
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
            <span>Home</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filter;
