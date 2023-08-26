import { useEffect, useState } from "react";
import MenuList from "./components/MenuList";

const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(true) 
    const [activeIndex, setactiveIndex] = useState(0)
    const categoryId = activeIndex ? `category=${activeIndex}` : '' 
    const [menu, setData] = useState(null)
    const [isPending, setisPending]  = useState(true)
    const [error, setError] = useState(null)
    const categories = ["Все","Мясные","Вегетарианские","Сладкие","Острые","Комбо"]
    const onClickCategory = (index) => {
        setactiveIndex(index)             
    }

    useEffect(() => {

        const abortCont =  new AbortController()

        
            setIsLoading(true)
            fetch(`https://photos-0mmf.onrender.com/pizzas?${categoryId}`, {signal: abortCont.signal})
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
         }).finally(() => setIsLoading(false))
       

        return () => abortCont.abort()
    }, [activeIndex, categoryId]);
    
    return ( 
        <div className="home">
            <div className="categories flex justify-between">     
        <ul>
            {categories.map((category, i)=> 
            <li key={i} onClick={()=>onClickCategory(i)} className={activeIndex === i ? 'activeCategory' : ''}>{category}</li>)}       
        </ul>
        <input className="text-black rounded-3xl pl-3 bg-gray-200 border-2 border-slate-950" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search..." type="text" />
        </div>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {isLoading ? <h2>Loading...</h2> : menu && <MenuList searchValue={searchValue} menu={menu}/>}
        </div>
     ); 
}
 
export default Home;