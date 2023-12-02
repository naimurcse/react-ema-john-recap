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
               <Link to="/home">Home</Link>
               <Link href="/shop">Shop</Link>
               <Link href="/inventory">Inventory Management</Link>
               <Link href="/contact">Contact Us</Link>
            </div>
         </nav>
      </div>
   );
};

export default Header;
