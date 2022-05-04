const Field = ({ label, id, className = "", ...props }) => {
    return (
        <div className="mb-3">
              <label htmlhtmlFor={id} className="form-label">{label}</label>
              <input className={"form-control" + className}
               id={id}
               {...props} />
            </div>
    );
}

export default Field;