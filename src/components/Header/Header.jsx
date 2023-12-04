import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <main>
          <nav>
            <div>
                <Link to='/'><img src='..\..\../images/Logo.svg' alt='Logo Image'></img></Link>
            </div>

            <div className='nav-btn'>
                <li><Link to="orders">Orders</Link></li>
                <li><Link to="order_review">Order Review</Link></li>
                <li><Link to="manage_inventory">Manage Inventory</Link></li>
                <li><Link to="log_in">Login</Link></li>
            </div>
          </nav>  
        </main>
    );
};

export default Header;