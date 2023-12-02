import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div className="header">
         <nav className="header__nav">
            <div className="header__logo-box">
               <img src="/src/assets/images/Logo.svg" alt="" />
            </div>
            <div className="header__menu">
               <Link to="/shop">Shop</Link>
               <Link to="/orders">Orders</Link>
               <Link to="/inventory">Inventory</Link>
               <Link to="/login">Log in</Link>
            </div>
         </nav>
      </div>
   );
};

export default Header;
