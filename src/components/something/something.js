import { useState } from "react";

const Something = () => {
const stateArray = useState("Assalomu alaykum");
let [ inputValue, setInputValue ] = stateArray;

const handleInputChange = (evt) => {
   setInputValue(evt.target.value);
}
    return (
        <>
        <p>{inputValue}</p>
        <form>
        <input onChange={handleInputChange} type="text" />
        </form>
        </>
    );
}

export default Something;