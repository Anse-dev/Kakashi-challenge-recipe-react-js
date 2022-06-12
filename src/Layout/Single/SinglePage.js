import React, { useEffect, useRef, useState } from "react";
import "./single.style.scss";
import RecipeThumb from "../../components/RecipeThumb/RecipeThumb";
import RecetteContainer from "../../components/Recette/RecetteContainer/RecetteContainer";
import { useParams } from "react-router";
import recettes from "../../Data/recettes";

function SinglePage() {
  const [recipe, setRecipe] = useState();
  const ref = useRef(false);
  const [isPerding, setIsPerding] = useState(false);
  const { title } = useParams();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPerding(true);
      const data = recettes.filter((item) => item.title === title);
      setRecipe(data[0]);
    }, 2000);
    return () => {
      if (!ref.current) {
        setIsPerding(false);
        clearTimeout(timer);
        ref.current = true;
      }
    };
  }, [ref.current]);
  console.log(recipe);
  return (
    <div className="pageContent-holder">
      <div className="pageContent__inner">
        <div className="pages_">
          <RecipeThumb title={title} image={recipe?.image_url} />
          <div className="recipe-main">
            <div className="content">
              <div className="recipe-description">
                <h2>Main Description</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus vitae earum nisi saepe in dolor suscipit,
                  sapiente blanditiis possimus deserunt voluptatum delectus
                  rerum. Temporibus, deleniti dolores! Fugit quis quibusdam
                  quidem?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Adipisci saepe libero impedit incidunt eveniet sint, atque
                  ullam veritatis quos necessitatibus suscipit cupiditate quae
                  facilis dicta, ut tempore placeat praesentium expedita?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur aliquam rerum ducimus commodi excepturi
                  cupiditate!
                </p>
              </div>
              <div className="recipe-ingredients">
                <h2>Ingredients</h2>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                facilis quae aliquam asperiores voluptatibus voluptate
                obcaecati? Omnis impedit illo ullam, autem, labore repellendus
                harum placeat voluptatem recusandae tempore provident qui soluta
                modi ut quaerat quae porro quia officiis ducimus adipisci esse
                beatae fugiat dolore! Culpa sunt blanditiis suscipit ex porro
                laudantium odio a sint corrupti, eum ut. Maiores laudantium
                sapiente omnis officia atque perferendis expedita facere sit non
                fuga neque magnam voluptate beatae architecto placeat in dolorem
                ad, quo vitae quae, reiciendis repudiandae aliquid. Deleniti
                maiores, dolores tempore, qui itaque quisquam cumque illo
                asperiores eaque quia quam temporibus! Pariatur id, sequi quae
                cupiditate amet eaque tenetur? Accusamus unde commodi nulla,
                praesentium dolor quibusdam, reiciendis, totam maxime explicabo
                ipsam quasi obcaecati quae ab labore repudiandae rerum? Rerum
                omnis esse perferendis repellendus aut quo, ex voluptatibus
                magnam est quod deleniti animi quos iusto tenetur veniam
                architecto reprehenderit id maxime quae natus iure aliquid? Eum,
                eos totam, minus ipsum cumque natus facere perferendis a eius
                voluptates architecto rem dolore. Harum tempore unde alias
                dolor! Tempore iusto doloribus necessitatibus iste nam. Itaque
                ab, velit odit nemo accusamus numquam ut eos dignissimos, rerum
                veritatis doloribus quisquam facere tenetur esse. Perspiciatis
                vel ipsum, nam excepturi consectetur consequuntur laudantium
                dolor, voluptatem perferendis nihil dolore eveniet, quisquam
                minima dignissimos recusandae incidunt omnis fuga quibusdam!
                Eum, veritatis architecto! Ut nesciunt ab libero atque,
                quibusdam esse exercitationem aspernatur accusantium, sapiente
                tempora adipisci deleniti aut praesentium, corporis sunt.
                Commodi expedita natus perspiciatis a enim veritatis aut ducimus
                blanditiis ex sit ut praesentium incidunt odit ea necessitatibus
                quidem minus nobis saepe, iusto porro deserunt itaque. Esse
                similique facilis voluptatem consequuntur commodi expedita
                consequatur? Pariatur adipisci dicta dolor corrupti iste
                explicabo nemo voluptates quibusdam corporis blanditiis
                voluptatibus veritatis minus modi ratione, possimus eligendi, a
                beatae? Sed natus necessitatibus ipsa animi sit minima nulla,
                ipsam aspernatur tenetur nemo vero inventore aperiam delectus
                vel fugiat quisquam, amet quam, commodi possimus assumenda dicta
                quas. Quod doloribus accusamus quasi? Enim quasi corporis, magni
                repellat deleniti labore molestias rem inventore sed velit,
                dolorem fuga similique ut assumenda provident eaque facere
                beatae porro ratione dolore voluptatum, perspiciatis molestiae
                officia? Nulla debitis quia eligendi provident accusantium! Ipsa
                hic totam aut eaque ullam debitis mollitia sit doloribus tempore
                quisquam sunt obcaecati nihil, ad molestiae animi. Eos, est
                nulla modi, ratione obcaecati facere neque cupiditate commodi
                delectus nemo quaerat animi alias eligendi. Maiores molestias
                nulla delectus quidem ipsum natus unde, libero ipsa rerum
                reprehenderit nesciunt dicta doloribus ratione, quia laboriosam?
                Dolor minus tempora voluptatum accusamus adipisci quos, commodi
                vero eaque, molestias officiis voluptatibus nobis consequatur
                consequuntur. Illo, assumenda? Obcaecati expedita natus in
                dolores quae aliquid accusantium reprehenderit dolorum quidem,
                rem nulla nihil ducimus perspiciatis molestias dicta magnam eos
                tenetur nam id harum! Velit nemo ab ipsam eaque dolores,
                eligendi illum.
              </div>
              <div className="recipe-step">
                <h1>Recette étapes </h1>
                <div>
                  <span>
                    <strong>1</strong>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    expedita architecto ab alias, accusantium delectus nesciunt
                    aliquam totam aliquid labore quis ex a nulla necessitatibus
                    ut, mollitia harum consectetur deserunt.
                  </p>
                  <img
                    src="/images/Food/i147169-placali-sauce-gombo.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <span>
                    <strong>2</strong>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    expedita architecto ab alias, accusantium delectus nesciunt
                    aliquam totam aliquid labore quis ex a nulla necessitatibus
                    ut, mollitia harum consectetur deserunt.
                  </p>
                  <img
                    src="/images/Food/i147151-sokossoko-de-boeuf.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <span>
                    <strong>3</strong>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    expedita architecto ab alias, accusantium delectus nesciunt
                    aliquam totam aliquid labore quis ex a nulla necessitatibus
                    ut, mollitia harum consectetur deserunt.
                  </p>
                  <img
                    src="/images/Food/i147150-poisson-sauce-claire.jpeg"
                    alt=""
                  />
                </div>
                <div>
                  <span>
                    <strong>4</strong>
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    expedita architecto ab alias, accusantium delectus nesciunt
                    aliquam totam aliquid labore quis ex a nulla necessitatibus
                    ut, mollitia harum consectetur deserunt.
                  </p>
                  <img
                    src="/images/Food/i115413-attieke-au-poulet.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="other-recipe">
            <h2
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                marginBottom: "40px",
                borderRadius: ".4rem",
              }}
            >
              De la même categorie{" "}
            </h2>
            <RecetteContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
