import { useRef } from "react";

const AddModal = ({ isOpen, close, addProduct, setAddProduct}) => {
  const titleValueRef = useRef();
  const priceValueRef = useRef();

const handleCloseClick = () => {
  close(false);
}
const handleModalClick = (evt) => {
  if (evt.target.matches(".modal.fade")) {
    close(false);
  }
}
const handleFormSubmit = (evt) => {
  evt.preventDefault();
  titleValueRef.current.value = titleValueRef
  priceValueRef.current.value = priceValueRef

 
}
 

    return (
        <div className={`modal fade ${isOpen ? "show" : ""}`} style={{display: isOpen ? `block`: `none`}} id="product-modal" tabindex="-1" aria-labelledby="addStudentModalLabel" aria-hidden="true" onClick={handleModalClick}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addStudentModalLabel">Add product</h5>
              <button onClick={handleCloseClick} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="edit-product-table" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="product-title" ref={titleValueRef} className="form-label">New title</label>
                  <input type="text" required className="form-control" id="title" placeholder="Your phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" ref={priceValueRef} className="form-label">Price</label>
                  <input type="number" required className="form-control" id="price" placeholder="1000000" />
                </div>
                <div className="mb-3">
                  <label htmlFor="product-manufacturer" className="form-label">Manufacturer</label>
                  <select className="form-select" required id="manufacturer">
                    <option selected disabled value="0">Select a manufacturer</option>
                  </select>
                </div>
    
                <div className="mb-3">
                  <label htmlFor="benefits" className="form-label">Benefits</label>
                  <input type="text" className="form-control" id="add-benefits" placeholder="benefits" />
                  <ul id="benefits-table" className="d-flex flex-wrap list-unstyled mt-3">
                    <li className="me-1 mb-1"><button type="button" className="btn btn-sm badge rounded-pill btn-primary">8gb</button></li>
                    <li className="me-1 mb-1"><button type="button" className="btn btn-sm badge rounded-pill btn-primary">128gb</button></li>
                    <li className="me-1 mb-1"><button type="button" className="btn btn-sm badge rounded-pill btn-primary">Waterproof</button></li>
                    <li className="me-1 mb-1"><button type="button" className="btn btn-sm badge rounded-pill btn-primary">Falon yaxshi tarafi</button></li>
                  </ul>
                </div>
                <button type="submit" id="product-btn" className="btn btn-primary d-block w-100 p-2">Add product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
};

export default AddModal;