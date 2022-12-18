import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioList, removeFromPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList.map((stock) => (
          <Stock key={stock.id} stock={stock} onClick={removeFromPortfolio}/>
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
