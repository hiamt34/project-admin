import React, { Component } from 'react';
import {BrowserRouter as  Link, NavLink } from 'react-router-dom';

class Forgotpassword extends Component {
    render() {
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                            <form action="recover-password.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <p className="mt-3 mb-1">
                                <NavLink to="/login">Login</NavLink>
                            </p>
                            
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
                {/* /.login-box */}
                {/* jQuery */}
                {/* Bootstrap 4 */}
                {/* AdminLTE App */}
            </div>

        );
    }
}

export default Forgotpassword;