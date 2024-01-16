import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{

    })
    .catch(error=>{
      console.log(error);
    })
  }

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
                <li><Link to="/signup">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
                {user && <span className='text-white'>{user.email}<button onClick={handleLogOut}>Sign Out</button> </span> }
            </div>
          </nav>  
        </main>
    );
};

export default Header;