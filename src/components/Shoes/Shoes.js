import React from 'react';
import { multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const first = 10;
    const second = 5;
    const result = multiply(first, second);
    return (
        <div>
            <h1>Hello I need this one.</h1>
            <h2>Price: {result}</h2>
        </div>
    );
};

export default Shoes;