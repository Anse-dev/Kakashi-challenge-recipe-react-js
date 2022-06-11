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
          {/* <div className="home-posts-holder">
            <div className="home-posts">
              <div className="home-posts-row">
                <div className="home-post">
                  <div className="home-post-content">
                    <div className="home-post-image">
                      <img
                        src="./images/Food/i115413-attieke-au-poulet.jpeg"
                        alt=""
                      />
                      <a href="#" className="btn category">
                        Plat
                      </a>
                    </div>
                    <div className="home-post-desc">
                      <div className="home-post-title">
                        <h2 className="title">Attieké au poulet</h2>
                      </div>
                      <div className="home-post-author">
                        <div className="author-profil">
                          <div className="author-photo">
                            <img src="./images/model.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="author-name">Melany rose</div>
                            <div className="time-write">October 18, 2020</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-call-action">
                        <Link to="/single-item" className="home-call-btn">
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="icons-call-to-actions">
                      <a href="#" className="icon-call-action liked">
                        <img src="./images/icons/heart-regular.svg" alt="" />
                        82 likes
                      </a>
                      <a href="#" className="icon-call-action time-read">
                        <img src="./images/icons/clock-regular.svg" alt="" />
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-post">
                  <div className="home-post-content">
                    <div className="home-post-image">
                      <img
                        src="./images/Food/i147150-poisson-sauce-claire.jpeg"
                        alt=""
                      />
                      <a href="#" className="btn category">
                        Plat
                      </a>
                    </div>
                    <div className="home-post-desc">
                      <div className="home-post-title">
                        <h2 className="title">Poisson sauce claire</h2>
                      </div>
                      <div className="home-post-author">
                        <div className="author-profil">
                          <div className="author-photo">
                            <img src="./images/model.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="author-name">Melany rose</div>
                            <div className="time-write">October 18, 2020</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-call-action">
                        <a href="#" className="home-call-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="icons-call-to-actions">
                      <a href="#" className="icon-call-action liked">
                        <img src="./images/icons/heart-regular.svg" alt="" />
                        82 likes
                      </a>
                      <a href="#" className="icon-call-action time-read">
                        <img src="./images/icons/clock-regular.svg" alt="" />
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-post">
                  <div className="home-post-content">
                    <div className="home-post-image">
                      <img
                        src="./images/Food/i147151-sokossoko-de-boeuf.jpeg"
                        alt=""
                      />
                      <a href="#" className="btn category">
                        Plat
                      </a>
                    </div>
                    <div className="home-post-desc">
                      <div className="home-post-title">
                        <h2 className="title">Sokossoko de boeuf</h2>
                      </div>
                      <div className="home-post-author">
                        <div className="author-profil">
                          <div className="author-photo">
                            <img src="./images/model.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="author-name">Melany rose</div>
                            <div className="time-write">October 18, 2020</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-call-action">
                        <a href="#" className="home-call-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="icons-call-to-actions">
                      <a href="#" className="icon-call-action liked">
                        <img src="./images/icons/heart-regular.svg" alt="" />
                        82 likes
                      </a>
                      <a href="#" className="icon-call-action time-read">
                        <img src="./images/icons/clock-regular.svg" alt="" />
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-post">
                  <div className="home-post-content">
                    <div className="home-post-image">
                      <img
                        src="./images/Food/i147169-placali-sauce-gombo.jpeg"
                        alt=""
                      />
                      <a href="#" className="btn category">
                        Plat
                      </a>
                    </div>
                    <div className="home-post-desc">
                      <div className="home-post-title">
                        <h2 className="title">Placali sauce gombo</h2>
                      </div>
                      <div className="home-post-author">
                        <div className="author-profil">
                          <div className="author-photo">
                            <img src="./images/model.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="author-name">Melany rose</div>
                            <div className="time-write">October 18, 2020</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-call-action">
                        <a href="#" className="home-call-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="icons-call-to-actions">
                      <a href="#" className="icon-call-action liked">
                        <img src="./images/icons/heart-regular.svg" alt="" />
                        82 likes
                      </a>
                      <a href="#" className="icon-call-action time-read">
                        <img src="./images/icons/clock-regular.svg" alt="" />
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-post">
                  <div className="home-post-content">
                    <div className="home-post-image">
                      <img
                        src="./images/Food/i40412-foutou-banane-plantain-et-manioc-de-cote-d-ivoire.jpg"
                        alt=""
                      />
                      <a href="#" className="btn category">
                        Plat
                      </a>
                    </div>
                    <div className="home-post-desc">
                      <div className="home-post-title">
                        <h2 className="title">
                          Foutou banane plaintain et manioc
                        </h2>
                      </div>
                      <div className="home-post-author">
                        <div className="author-profil">
                          <div className="author-photo">
                            <img src="./images/model.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="author-name">Melany rose</div>
                            <div className="time-write">October 18, 2020</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-call-action">
                        <a href="#" className="home-call-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="icons-call-to-actions">
                      <a href="#" className="icon-call-action liked">
                        <img src="./images/icons/heart-regular.svg" alt="" />
                        82 likes
                      </a>
                      <a href="#" className="icon-call-action time-read">
                        <img src="./images/icons/clock-regular.svg" alt="" />
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-post">
                  <div className="home-post-content">
                    <div className="home-post-image">
                      <img
                        src="./images/Food/i81687-tiep-bou-dien-riz-senegalais.jpg"
                        alt=""
                      />
                      <a href="#" className="btn category">
                        Plat
                      </a>
                    </div>
                    <div className="home-post-desc">
                      <div className="home-post-title">
                        <h2 className="title">Tiep bou dien riz senegalais</h2>
                      </div>
                      <div className="home-post-author">
                        <div className="author-profil">
                          <div className="author-photo">
                            <img src="./images/model.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="author-name">Melany rose</div>
                            <div className="time-write">October 18, 2020</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-call-action">
                        <a href="#" className="home-call-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="icons-call-to-actions">
                      <a href="#" className="icon-call-action liked">
                        <img src="./images/icons/heart-regular.svg" alt="" />
                        82 likes
                      </a>
                      <a href="#" className="icon-call-action time-read">
                        <img src="./images/icons/clock-regular.svg" alt="" />
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
                <div className="home-post">
                  <div className="home-post-content">
                    <div className="home-post-image">
                      <img src="./images/Food/i103637-alloco.jpg" alt="" />
                      <a href="#" className="btn category">
                        Plat
                      </a>
                    </div>
                    <div className="home-post-desc">
                      <div className="home-post-title">
                        <h2 className="title">Alloco</h2>
                      </div>
                      <div className="home-post-author">
                        <div className="author-profil">
                          <div className="author-photo">
                            <img src="./images/model.jpg" alt="" />
                          </div>
                          <div className="desc">
                            <div className="author-name">Melany rose</div>
                            <div className="time-write">October 18, 2020</div>
                          </div>
                        </div>
                      </div>
                      <div className="home-call-action">
                        <a href="#" className="home-call-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="icons-call-to-actions">
                      <a href="#" className="icon-call-action liked">
                        <img src="./images/icons/heart-regular.svg" alt="" />
                        82 likes
                      </a>
                      <a href="#" className="icon-call-action time-read">
                        <img src="./images/icons/clock-regular.svg" alt="" />
                        45 min
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
