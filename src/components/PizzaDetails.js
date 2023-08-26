
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const PizzaDetails = () => {
    const [menu, setData] = useState(null)
    const [isPending, setisPending]  = useState(true)
    const [error, setError] = useState(null)
    const { key } = useParams()
    useEffect(() => {

        const abortCont =  new AbortController()

        setTimeout(() => {
            fetch('https://photos-0mmf.onrender.com/pizzas/' + key, {signal: abortCont.signal})
         .then(res => {
           
            if(!res.ok) {
               throw Error('could not fetch data for that resource');
            }
           return res.json()
         })
         .then(data => { 
            setData(data)
            setisPending(false)
            setError(null)
         })
         .catch(err => {
            if(err.name === 'AbortError'){
               console.log('fetch aborted');
            }else {
               setError(err.message)
               setisPending(false)
            }
         })
        }, 500);

        return () => abortCont.abort()
    }, [key]);
    return ( 
        <div className="pizza-details">
         {isPending && <p>Loading...</p>}
         {error && <p>{error}</p>}
         {menu && (
            <article>
                <img src={require(`../images/${menu.key}.png`)} alt="" />
                <h2>{menu.name}</h2>
                <p>{menu.price}</p>
                     
            </article>
         )}
        </div>
     );
}
 
export default PizzaDetails;