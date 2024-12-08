import React from 'react';
import './LoginPage.css'; // Ensure this file exists

function LoginPage() {
    return (
        <div className="login-container">
            <div className="login-title"></div> {/* Background title */}
            <div className="login-form-wrapper">
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Username" className="login-input" required />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" className="login-input" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
