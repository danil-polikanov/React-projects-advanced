import { useState } from 'react';
import './App.css';
import Counter from './State-via-props/Counter';
import Button from './State-via-props/Button';

const texts = ['first', 'second', 'third', 'fourth'];

function App() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div className="App">
            <Counter count={count}></Counter>
            {texts.map((text, index) => {
                return (
                    <Button
                        onClick={incrementCount}
                        text={text}
                        key={index}
                    ></Button>
                );
            })}
        </div>
    );
}

export default App;
