
import ProductsItem from "../products-item/products-item";

const ProductsList = ({ products }) => {
    return (
    <>
      <section className="col-9">
      <div className="d-flex justify-content-between align-items-baseline">
        <h2 className="h4 mb-4">Products list</h2>
        <p className="count">Count: 4</p>
      </div>
      <ul id="products" className="row list-unstyled g-3">
      {products.map((product) => <ProductsItem
         title={product.title}
         key={product.id}
         img={product.img}
         price={product.price}
         model={product.model}
         benefits={product.benefits}
           />)}
      </ul>
    </section>
   
    </>
    );
}

export default ProductsList;
