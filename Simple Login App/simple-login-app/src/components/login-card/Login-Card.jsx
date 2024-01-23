import React from 'react';
import './Login-Card.css';

function LoginCard() {
    return (
        <div className='Login-card'>
            <div id='login-card-title'>
                <h1>Welcome</h1>
                <h2>Please Login</h2>
            </div>
            <div id='login-card-form'>
                <form>
                    <input type='text' name='username' placeholder='username' autofocus required/>
                    <input type='password' name='password' placeholder='password' required/>
                    <button type='submit'>Login</button>
                </form>
                <p>Forgot password</p>
            </div>
            <div id='login-card-footer'></div>
        </div>
    );
}

export default LoginCard;