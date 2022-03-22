import React from 'react';
import { addToDb, removeFromCart } from '../../utilities/addToStorage';
// import { add } from '../../utilities/Calculate';
import './Cosmitic.css'

const Cosmetuc = (props) => {
    const {name, _id , price} = props.cosmetic
    const addCart = (_id) =>{
        addToDb(_id);
    }

    const removeCart = (_id) =>{
        removeFromCart(_id);
    }

    // const addToCart = () => addCart(_id)
    return (
        <div className="product">
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <h3>ID: {_id}</h3>
            <button onClick={() => addCart(_id)}>Add to cart</button>
            <button onClick={() => removeCart(_id)}>Remove this</button>
        </div>
    );
};

export default Cosmetuc;