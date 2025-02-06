import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";
import useProductData from "./utilitties/useProductData";
// import { PAZE_SIZE } from "./utilitties/constant";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(10);
  const product = useProductData();

  const totalProducts = product.length;
  const noOfPages = Math.ceil(totalProducts / selectedOption);
  const start = currentPage * selectedOption;
  const end = start + selectedOption;

  const pageNumHandler = (val) => {
    setCurrentPage(val);
  };
  const prevBtnHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextBtnHandler = () => {
    setCurrentPage((prev) => {
      return prev + 1;
    });
  };

  const handleSelectChange=(e)=>{
    let value = Number(e.target.value)
    setSelectedOption(value)
    setCurrentPage(0)
  }

  return (
    <>
       <div>
        <div><h1>Pagination</h1></div>
        <div>
          <form>
            <div className="selection_container">
              <label htmlFor="noOfProducts" className="form-label">How many products would you like to view per page?</label>
              <select
                className="form-select form-select-lg"
                name=""
                id="noOfProducts"
                onChange={handleSelectChange}
                value={selectedOption}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
            
          </form>
        </div>
      </div>
      <Pagination
        pagenums={noOfPages}
        currentPageNo={currentPage}
        pagenohandler={pageNumHandler}
        prevBtnHandler={prevBtnHandler}
        nextBtnHandler={nextBtnHandler}
      />
      {product.length > 0 &&
        product.slice(start, end).map((prod) => {
          return (
            <Cards
              key={prod.id}
              title={prod.title}
              image={prod.images}
              price={prod.price}
            />
          );
        })}

      
    </>
  );
}

export default App;
