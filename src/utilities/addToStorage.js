const addToDb = _id =>{
    let shoppingCart;

    //get the shopping cart
    const storedCart = localStorage.getItem("Shopping-Cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart ={};
    }
    
    //add queantity
    const queantity = shoppingCart[_id];
    if(queantity){
        const newQueantity = JSON.parse (queantity) + 1;
        shoppingCart[_id] = newQueantity;
        // localStorage.setItem(_id, newQueantity);
    }
    else{
        shoppingCart[_id] = 1;
        // localStorage.setItem(_id, 1);
    }

    localStorage.setItem("Shopping-Cart", JSON.stringify(shoppingCart));

}

const removeFromCart = (_id) =>{
    const storedCart = localStorage.getItem("Shopping-Cart");
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(_id in shoppingCart){
            delete shoppingCart[_id];
            localStorage.setItem("Shopping-Cart", JSON.stringify(shoppingCart));
        }
    }
}

export {addToDb, removeFromCart}