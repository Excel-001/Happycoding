import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.scss';
import { motion} from 'framer-motion';
import { useState } from "react";
 function Project() {
    


    const [numerator, setNumerator] = useState(`numerator`);
    const [denominator, setDenominator] = useState(`denorminator`);
    const [result, setResult] = useState(0);
  
    const handleDivide = () => {
      if (denominator === 0) {
        alert("Cannot divide by zero!");
      } else if (numerator % denominator === 0) {
        setResult(numerator / denominator);
      } else {
        alert("hey the munber you are putting must lead you a remender of 0");
      }
    };

    return(
        <div className="p-lg-5 p-3 py-5">
            
            <div className="bg-milk d-flex gap-4 flex-column col-12 rounded-5 p-3 p-lg-5">
      <h2 className="fw-bolder fs-1 text-navyblue m-0 text-center">Division App</h2>
      <div className="m-auto d-flex flex-column flex-sm-row gap-5">
       <input
        type="number"
        placeholder="Numerator"
        value={numerator}
        onChange={(e) => setNumerator(parseFloat(e.target.value))}
      />
      <input
        type="number"
        placeholder="Denominator"
        value={denominator}
        onChange={(e) => setDenominator(parseFloat(e.target.value))}
      />  
      </div>
     
    <div className=" d-flex justify-content-center">
      <motion.button className=" col-lg-2 col-4 btn bg-lightgreen rounded text-white" onClick={handleDivide}>Divide</motion.button>  
        </div>  
      <div className="fs-sm-3  fw-bolder text-navyblue d-flex justify-content-center align-items-center">
        Result: {numerator} / {denominator} = <p className="fw-bolder  text-navyblue m-0">{result} </p> 
      </div>
    </div>
        </div>
    );
 }
 export default Project