import React from 'react';
import './login.css';
import { Form } from 'react-bootstrap';

export const LoginScreen = () => {
    return (
        <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-md-3 login-form">
                    <h2>Please sign in</h2>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Sign in" 
                            />
                        </div>
                    </form>
                </div>
            </div>   
        </div>
    )
}
