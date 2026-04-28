import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);

    return (
        <header className='top-nav'>
            <div className='logo'>
                <h2 className="logo"><Link to="/">Hulley Ladders</Link></h2>
            </div>
            <nav className='nav-links'>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li className="dropdown"
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                    >
                        <span className="dropdown-trigger">Products ▾</span>
                        {isProductsOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/#">Library Ladders</Link></li>
                                <li><Link to="/#">Wooden Ladders</Link></li>
                                <li><Link to="/#">Platform Steps</Link></li>
                                <li><Link to="/products/The-Classic-Swingback">Swingback Steps</Link></li>
                            </ul>
                        )}</li>
                    <li><Link to="/team">Meet The Team</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/company_news">Company News</Link></li>
                    <li className="dropdown"
                        onMouseEnter={() => setIsCompanyOpen(true)}
                        onMouseLeave={() => setIsCompanyOpen(false)}
                    >
                        <span className="dropdown-trigger">Company Info ▾</span>
                        {isCompanyOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="/about">Terms & Condition</Link></li>
                                <li><Link to="/team">Privacy</Link></li>
                                <li><Link to="/company_news">Delivery</Link></li>
                                <li><Link to="/company_info">Return Policy</Link></li>
                                <li><Link to="/about">Your Basket</Link></li>
                                <li><Link to="/team">Your Payment</Link></li>
                                <li><Link to="/company_news">Quality Control</Link></li>
                            </ul>
                        )}</li>
                    <li><button className='login-btn'>Login</button></li>
                    <li><button className='login-btn'>Register</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;


// {/* <nav className='nav-links'>
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/products">Products</Link></li>

//         {/* Dropdown Category: Company */}
//         <li
//             className="dropdown"
//             onMouseEnter={() => setIsCompanyOpen(true)}
//             onMouseLeave={() => setIsCompanyOpen(false)}
//         >
//             <span className="dropdown-trigger">Company ▾</span>
//             {isCompanyOpen && (
//                 <ul className="dropdown-menu">
//                     <li><Link to="/about">About Us</Link></li>
//                     <li><Link to="/team">Meet The Team</Link></li>
//                     <li><Link to="/company_news">News</Link></li>
//                     <li><Link to="/company_info">Info</Link></li>
//                 </ul>
//             )}
//         </li>

//         <li><Link to="/contact">Contact Us</Link></li>
//         <li><button className='login-btn'>Login</button></li>
//     </ul >
// </nav > */}
