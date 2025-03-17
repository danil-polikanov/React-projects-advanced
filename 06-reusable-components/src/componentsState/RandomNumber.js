import { useState, UseState } from 'react';
import generateNumber from '../Utililty/generateRandomNumber';

function RandomNumber({ maxValue }) {
    const [number, setNumber] = useState(generateNumber(maxValue));
    const changeNumber = () => {
        setNumber(generateNumber(maxValue));
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={changeNumber} className="btn">
                Generate new random number
            </button>
        </div>
    );
}

export default RandomNumber;
