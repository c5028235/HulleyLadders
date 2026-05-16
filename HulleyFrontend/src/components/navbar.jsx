import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '/src/context/Authcontext';

const Navbar = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isCompanyOpen, setIsCompanyOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth();


    return (
        <header className='top-nav'>
            <div className='logo-wrapper'>
                <h2 className="logo"><Link to="/">Hulley Ladders</Link></h2>

                <button
                    className="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
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

                    {!user ? (
                        <>
                            <li><Link to="/login" className='login-btn'>Login</Link></li>
                            <li><Link to="/register" className='login-btn'>Register</Link></li>
                        </>
                    ) : (
                        <>
                            {user?.is_staff && (
                                <li>
                                    <Link to="/admin">Dashboard</Link>
                                </li>
                            )}
                            <li> Welcome, {user.username}</li>
                            <li><button onClick={logout} className='login-btn'>Logout</button></li>
                        </>
                    )}




                </ul>
            </nav>

            <div className={`mobile-menu ${open ? "show" : ""}`}>
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
                    {!user ? (
                        <>
                            <li><Link to="/login" className='login-btn'>Login</Link></li>
                            <li><Link to="/register" className='login-btn'>Register</Link></li>
                        </>
                    ) : (
                        <>
                            <li> Welcome, {user.username}</li>
                            <li><button onClick={logout} className='login-btn'>Logout</button></li>
                        </>
                    )}
                </ul>
            </div>
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
