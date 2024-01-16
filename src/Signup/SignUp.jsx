import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const [error, setError] = useState(null);

    const handleSignUp = event =>{
        setError(null);
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPassword.value;
        console.log(email, password, confirmPass);

        if(password !== confirmPass){
            setError('* Your password did not match')
        }
        else if(password.length < 6){
            setError('* Password must be more than 5 characters')
            return
        }

        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            alert('Thank you for sign up!!!')
        })
        .catch(error=>{
            console.log(error);
            setError(error);
        })
        form.reset();
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' required/>
                </div>
              
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' required/>
                </div>

                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name='confirmPassword' required/>
                    <p><small className='error'>{error}</small></p>
                </div>

                <button>Sign Up</button>
                <p className='create-acc-link'>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;