import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <main>
          <nav>
            <div>
                <img src='..\..\../images/Logo.svg' alt='Logo Image'></img>
            </div>

            <div className='nav-btn'>
                <li><a href="#">Order</a></li>
                <li><a href="#">Order Review</a></li>
                <li><a href="#">Manage Inventory</a></li>
                <li><a href="#">Login</a></li>
            </div>
          </nav>  
        </main>
    );
};

export default Header;