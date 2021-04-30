import { Link } from "react-router-dom";
import { AiOutlineShop, AiFillInfoCircle } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import {FcShop} from 'react-icons/fc';
function AppLeftBar() {
    //<i className="fas fa-store"></i>
    //<i class="fas fa-shopping-cart"></i>
    //<i class="fas fa-tag"></i>
    //<i class="fas fa-plus"></i>
    //<i class="fas fa-minus"></i>
    //<i class="fas fa-address-card"></i>
    return (
        <div className="nav-cont">
            <div className = "nav-home"><FcShop className ="leftbar-icon"/><Link to="/">HOME MARKET</Link></div>
            <ul>
                <li><AiOutlineShop className ="leftbar-icon"/> <Link to="/">SHOP</Link></li>
                <li><IoIosCart className ="leftbar-icon"/> <Link to="/cart">MY CART</Link></li>
                <li><AiFillInfoCircle className ="leftbar-icon"/> <Link to="/about">ABOUT</Link></li>
            </ul>

        </div>
    );
}

export default AppLeftBar;