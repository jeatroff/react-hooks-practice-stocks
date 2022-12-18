import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([])
  const [portfolioList, setPortfolioList] = useState([])
  const [isAbcSort, setAbcSort] = useState(false)
  const [isPriceSort, setPriceSort] = useState(false)
  const [stockFilter, setStockFilter] = useState("Tech")
  let stockListSorted = stockList
  
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then(setStockList)
  }, [])

  function addToPortfolio(newStock) {
    setPortfolioList([...portfolioList, newStock])
  }

  function removeFromPortfolio(stockDelete) {
    setPortfolioList(portfolioList.filter((stock) => (stock !== stockDelete)))
  }

  function handleAbcSort() {
    setPriceSort(isAbcSort)
    setAbcSort(!isAbcSort)
    stockListSorted = stockList.sort((a,b) => (
      a.name.toUpperCase() > b.name.toUpperCase()
      ))
  }

  function handlePriceSort() {
    setAbcSort(isPriceSort)
    setPriceSort(!isPriceSort)
    stockListSorted = stockList.sort((a,b) => (
      a.price > b.price
      ))
  }

  function handleStockFilter(event) {
    setStockFilter(event.target.value)
  }

  return (
    <div>
      <SearchBar
        isAbcSort={isAbcSort}
        isPriceSort={isPriceSort}
        handleAbcSort={handleAbcSort}
        handlePriceSort={handlePriceSort}
        handleStockFilter={handleStockFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockListSorted} addToPortfolio={addToPortfolio} stockFilter={stockFilter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} removeFromPortfolio={removeFromPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
