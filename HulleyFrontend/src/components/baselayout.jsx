import { Link } from "react-router-dom";
import '../assets/base.css'
import Navbar from '../components/navbar';

function BaseLayout({ children }) {
    return (
        <div className='app-wrapper'>
            {/* { 1. Top Navigation Header } */}
            {/* <header className='top-nav'>
                <div className='logo'>
                    <h2 className="logo">Hulley Ladders</h2>
                </div>
                <nav className='nav-links'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/team">Meet The Team</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/company_news">Company News</Link></li>
                        <li><Link to="/company_info">Company Info</Link></li>
                        <li><button className='login-btn'>Login</button></li>
                    </ul>
                </nav>
            </header> */}

            <Navbar />

            {/* { 2. Dynamic Content Area } */}

            <main className='content-area'>
                {/* Everthing inside your routes in App.jsx will appear here */}
                {children}
            </main>

            <footer className='main-footer'>
                <p> © Hulley Ladders 2026 | All Rights Reserved </p>
            </footer>

        </div>
    );
}

export default BaseLayout