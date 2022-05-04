import Header from "./components/header/header";
import Filter from "./components/filter/filter";
import ProductsList from "./components/products-list/products-list";

import { products } from "./data";

import "./assets/css/bootstrap.min.css";
import { useState } from "react";
import AddModal from "./components/add-modal/add-modal";


function App() {
  const [ isModalOpen, setModalOpen ] = useState(false);
  
  return (
  <div className="container my-5">
  <Header setModalOpen={setModalOpen} />

  <div className="row mt-5">
  <Filter products={products} />
  <ProductsList products={products} />
  </div>
  <AddModal isOpen={isModalOpen} close={setModalOpen} />
  </div>
  );
}

export default App;
