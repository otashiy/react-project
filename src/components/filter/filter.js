import Field from "../field/field";

const Filter = () => {
    return (
        <div className="col-3">
          <h2 className="h4 mb-4">Filter</h2>
          <form className="filter" action="#">
            <Field label="Search" id="search" name="search" type="search" placeholder="Falonchi" />
            <div className="mb-3">
              <div className="row">
                <Field label="From" name="from" id="from" type="number" placeholder="e.g 0" required />
                <Field label="To" name="to" id="to" type="number" placeholder="e.g 100" required />
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlhtmlFor="manufacturer" className="form-label">Manufacturer</label>
              <select className="form-select" id="manufacturer-all">
                <option value="0">All</option>
              </select>
            </div>
  
            <div className="mb-3">
              <label htmlhtmlFor="sortby" className="form-label">Sort by</label>
              <select className="form-select" id="sortby">
                <option value="1">Name</option>
                <option value="2">Price: to lowest</option>
                <option value="3">Price: to highest</option>
              </select>
            </div>
  
            <button className="btn btn-primary d-block w-100 py-2">Filter</button>
          </form>
        </div>
    )
};

export default Filter;