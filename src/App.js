import Header from "./components/header/header";
import Filter from "./components/filter/filter";
import ProductsList from "./components/products-list/products-list";

import "./assets/css/bootstrap.min.css";


function App() {
  return (
  <div className="container my-5">
  <Header />
  <div className="row mt-5">
  <Filter />
  <ProductsList />
  </div>
  </div>
  );
}

export default App;
