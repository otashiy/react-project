const ProductsItem = ({title, img, price, model, addedDate}) => {
 const productMark = `${price * 0.25}`
    return (
      <li className="col-4 products-item">
        <div className="card products__item-wrapper">
        <img className="card-img-top products__item-img" src={img} />
          <div className="card-body products__item-content">
            <h2 className="card-title products__item-title">{title}</h2>
            <p className="card-text fw-bold">
              <mark className="products__item-mark">
                {price}
            </mark>
            </p>
            <p className="card-text">
              <s className="undefined">{productMark}%</s>
              </p>
            <p className="card-text products__item-date">{addedDate}</p>
            <p className="badge bg-success products__item-subtitle">{model}</p>
            <div className="position-absolute top-0 end-0 d-flex">
              <button className="btn rounded-0 btn-secondary products__item-edit" data-id="124" data-bs-toggle="modal" data-bs-target="product-modal"><i className="fa-solid fa-pen" style={{pointerEvents: "none"}}></i></button>
              <button className="btn rounded-0 btn-danger products__item-delete" data-id="124"><i className="fa-solid fa-trash" style={{pointerEvents: "none"}}></i></button></div>
              <ul className="d-flex flex-wrap list-unstyled"><li className="badge bg-primary me-1 mb-1"><button className="btn btn-sm badge rounded-pill btn-primary">32gb</button></li>
              </ul>
              <ul className="d-flex flex-wrap list-unstyled"><li className="badge bg-primary me-1 mb-1"><button className="btn btn-sm badge rounded-pill btn-primary">1tb</button></li>
              </ul>
            </div>
          </div>
        </li>
    )
};

export default ProductsItem;