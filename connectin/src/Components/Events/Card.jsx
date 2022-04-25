import React from "react";
import img from "../../Assets/conf.png";
import "../../Style/Card.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    // <div>
    //   <button className="text-start card">
    //     <img src={img}></img>
    //     <div className="p-3">
    //       <h6>Virtual sourcing recruiting sources recruiters</h6>
    //       <p>Mar 25, 6:30pm</p>
    //     </div>
    //   </button>
    // </div>
    <div className="card-out">
      <Link to={"/signup"} style={{ textDecoration: "none" }}>
        <button class="card mt-3 mb-3">
          <img class="card-img-top" src={img} alt="Card image cap" />
          <div class="card-body text-start">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </button>
        {/* <div class="col mt-4 c1">
          <div class="card">
            <img
              src="https://spoonacular.com/recipeImages/646825-556x370.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Holiday Cookies</h5>
              <hr />
              <p class="card-text">
                Cusine: American
                <br />
                Time: 45mins
                <br />
                Servings: 24
                <br />
                Source: Foodista
              </p>
              <a
                href="https://www.foodista.com/recipe/K88VYRLF/holiday-cookies"
                class="btn btn-primary"
                target="_blank"
              >
                Checkout Recipie
              </a>
            </div>
          </div>
        </div> */}
      </Link>
    </div>
  );
}
