import { Link,Outlet } from "react-router-dom";
import './Homepage.css'
import cart from '../../public/icon-cart.svg'
import logo from '../../public/logo.svg'
import pic from '../../public/image-avatar.png'
function Homepage(){
    return (
        < >
        <nav id="header">
        <img src={logo} id="logo" />
                <div id="category">
                <label className="selsction">
                    <Link to="/Collection">Collection</Link>
                </label>
                <label className="selsction">
                    <Link to="/Men">Men</Link>
                </label>
                <label className="selsction">
                    <Link to="/Women">Women</Link>
                </label>
                <label className="selsction">
                    <Link to="/About">About</Link>
                </label>
                <label className="selsction">
                    <Link to="/Contact">Contacts</Link>
                </label>
                <div id="cartdiv">
                </div>
            
        </div>
        <button id="cart">
                <img src={cart} alt="" />
            </button>
            <img id="profilepic" src={pic} />
            
        </nav>
        
        <Outlet/>
        </>
    )
}
export default Homepage