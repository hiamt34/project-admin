import React, { Component } from 'react';

import fire from './Firebase/Firebase';
import { BrowserRouter as     Link, withRouter, Redirect, NavLink } from "react-router-dom";
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
           
        }
    }
    
    
    
    
    ischange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    login=(e)=>{
        
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
           
        }).catch((err)=>{
            alert(err)
        })
    }
    render() {
        console.log(this.props.check);
        if(this.props.check===true){
             this.props.history.replace('/admin')
            
            // return <Redirect to='/admin' />
        }
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html" ><b>Admin</b>LTE</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form >
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" name='email' onChange={(event)=>this.ischange(event)} />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" name='password' onChange={(event)=>this.ischange(event)}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember"> Remember Me</label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="submit" onClick={(e)=>this.login(e)} className="btn btn-primary btn-block">Sign In</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                 <a href='a' className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                                </a>
                                 <a href='a' className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                                </a>
                            </div>
                            {/* /.social-auth-links */}
                            <p className="mb-1">
                                <NavLink to="/Forgotpassword">I forgot my password</NavLink>
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
const mapStateToProps = (state, ownProps) => {
    return {
        check: state.check
    }
}
export default  connect (mapStateToProps) (withRouter(Login))
// export default withRouter(Login);