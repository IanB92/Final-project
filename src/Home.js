import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="quote">
        “It takes as much energy to wish as it does to plan.” <br></br>-Eleanor
        Roosevelt
      </h1>
      <form>
        <Link to="./form">
          <button className="button" type="submit">
            <i className="fas fa-plus-square">Organize</i>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Home;
