import React, { useEffect, useState } from 'react';
import Cosmetuc from '../Cosmetic/Cosmetuc';


const Cosmetics = () => {
     const [cosmetics, setCosmetics] = useState([]);
     useEffect(() => {
         fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
     },[])
    return (
        <div>
            <h1>Welcome to cosmetics.</h1>
            {
                cosmetics.map(cosmetic => <Cosmetuc 
                    key={cosmetic._id} 
                    cosmetic={cosmetic}></Cosmetuc>)
            }
        </div>
    );
};

export default Cosmetics;