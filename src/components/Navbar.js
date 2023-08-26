/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom/cjs/react-router-dom';
const Navbar = () => {
    const cost = '550'
    const cart = '5'
    return ( 
        <nav className="navbar">
         
        <Link to='/'><div className="logo">
        <img src={require('../images/logo.png')} />
        <div className="logo-text">
        <h3>REACT PIZZA</h3>
        <h4>The best pizzeria ever</h4></div>
        </div></Link>
                <button className="cart-button"><span><p>{cost}</p>$</span> <span className='cart-line'>|</span> <span><i class="far fa-shopping-cart"></i><p>{cart}</p> </span></button>
        </nav>
     );
}
  
export default Navbar;