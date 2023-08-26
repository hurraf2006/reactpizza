import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PizzaBlock = ({pizza}) => {
    const [activeType, setActiveType] = useState(0)    
    const [activeSize, setActiveSize] = useState(0)
    const pizzaTypes = ["тонкое","традиционное"]  
    return ( 
        <div className="pizza-preview" key={pizza.id}>
             <img src={require(`../images/${pizza.key}.png`)} alt="" />
           <Link to={`/pizzas/${pizza.id}`}>
           <h2>{pizza.name}</h2>
           </Link>
            <div className='parameters'>
               <div className="bread_types">
                 {pizza.types.map((type, i)=> (
                  <div key={i} onClick={() => setActiveType(i)} className={activeType === i ? 'bread_types__type activeType': 'bread_types__type'}>{pizzaTypes[type]}</div>
                 ))}
               </div>
               <div className="pizza_sizes">
                  {pizza.sizes.map((size, i) => (
                     <div  key={i} onClick={() => setActiveSize(i)} className={activeSize === i ? 'pizza_sizes__size activeSize' : 'pizza_sizes__size'}>{size}</div>
                  ))}            
               </div>
            </div>
            <h3>from {pizza.price} R</h3>
            </div>
     );
}
 
export default PizzaBlock;