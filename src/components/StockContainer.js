import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, addToPortfolio, stockFilter }) {
  const stockListFiltered = stockList.filter((stock) => (
    stock.type === stockFilter
  ))
  
  return (
    <div>
      <h2>Stocks</h2>
      {stockListFiltered.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={addToPortfolio}/>
      ))}
    </div>
  );
}

export default StockContainer;
