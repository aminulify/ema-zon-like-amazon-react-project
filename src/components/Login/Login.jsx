import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

   
    const {logInUser} = useContext(AuthContext);
    const [errorLogIn, setErrorLogIn] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';
    console.log(from);

    

    const handleLogIn = event =>{
        setErrorLogIn(null);

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            alert('Congratulation...');
            navigate(from);
        })
        .catch(error=>{
            console.log(error);
            setErrorLogIn('Please check again email or password wrong...!')
        })

        form.reset();

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' required/>
                </div>
              
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' required/>
                    <p><small>{errorLogIn}</small></p>
                </div>

                <button>Login</button>
                <p className='create-acc-link'>New to ema-jhon? <Link to="/signup">Create an account</Link></p>
            </form>
        </div>
    );
};

export default Login;