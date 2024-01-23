import React, {useState} from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(556);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div className='Counter'>
            <h1>{count}</h1>
            <button onClick={increment}>+ 1</button>
        </div>
    );
}

export default Counter;