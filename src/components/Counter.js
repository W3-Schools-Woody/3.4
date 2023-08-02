import { useState } from "react";
import Button from "./Button";
//import Input from "./Input";
import '../assets/styles/Counter.css';

// Counter, with discount feature, function

function Counter() {
    const[count, setCount] = useState(0);
    const[discount, setDiscount] = useState(0);
    const[name, setName] = useState('Maracuya');

    const price = 1.39;

    

    // add event for "+" button

    const handlePlus = () => {

        // function myFunction(prevCount) {
        //      let sum = prevCount + 1;
        //
        //      if (sum >=5) {
        //   setDiscount(20);
        //}
        //
        //      return sum;
        //}

        // setCount(myFunction);

        setCount ((prevCount) => {
            let sum = prevCount + 1;
            if (sum >= 5) {
                setDiscount(20);
            }
            return sum;
        })

    }


// minus event

const handleMinus = () => {
    setCount((prevCount) => {
        let diff = prevCount -1;
        if(diff < 5) {
            setDiscount(0)
        }
        return diff;
    })
};


return (
    <>
        <h2>{name}</h2>
        <Button label="-" onClick={handleMinus} />

        <span>{count}</span>
        <Button label="+" onClick={handlePlus} />

        <h2>{`$ ${price}`}</h2>
        <h3>{`Discount: ${discount}%`}</h3>
    </>
)
};

export default Counter;