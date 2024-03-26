import React from "react";
import img from "../../../assets/ai.png";
import "./Response.css";

function Response() {
  return (
    <div className="Response">
      <div className="responseHeader">
        <img className="botimg" src={img} />
        <p>Chat Bot</p>
      </div>

      <p>
        Making a sandwich is a simple yet versatile task. Here's a basic guide
        to making a classic sandwich: Ingredients: Bread (2 slices) - Choose
        your favorite type such as white, whole wheat, multigrain, etc. Protein
        (e.g., turkey, ham, chicken, tofu, tuna, etc.) Cheese (optional)
        Vegetables (e.g., lettuce, tomato, cucumber, onion, bell peppers, etc.)
        Condiments (e.g., mayonnaise, mustard, ketchup, pesto, etc.) Optional
        toppings (e.g., pickles, olives, avocado, bacon, etc.){" "}
      </p>
    </div>
  );
}

export default Response;
