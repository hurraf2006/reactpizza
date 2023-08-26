import PizzaBlock from './PizzaBlock';
const MenuList = ({menu, searchValue}) => {
    return ( 
        <div className="menu-list">
         {menu.filter(obj => obj.name.toLowerCase().includes(searchValue.toLowerCase())).map((pizza) => (
            <PizzaBlock pizza={pizza}/>
         ))}
        </div>
     );
}
 
export default MenuList;