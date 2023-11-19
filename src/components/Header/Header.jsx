import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <nav className="header__nav">
                <div className="header__logo-box">
                    <img src="/src/assets/images/Logo.svg" alt="" />
                </div>
                <ul className="header__menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/inventory">Inventory Management</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;