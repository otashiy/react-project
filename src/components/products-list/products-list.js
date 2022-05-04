
import ProductsItem from "../products-item/products-item";
import Count from "../count/count";

const ProductsList = ({ products }) => {
    return (
    <>
      <section className="col-9">
      <Count />
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
