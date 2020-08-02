import React, { Component } from 'react';
import { connect } from 'react-redux';
import fire from '../Firebase/Firebase';


class Header extends Component {
    logout=()=>{
        fire.auth().signOut()
    }
    render() {
        return (
            
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="a" className="nav-link" data-widget="pushmenu"   role="button"><i className="fas fa-bars" /></a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="../../index3.html" className="nav-link">Home</a>
                        </li>
                        
                    </ul>
                    {/* SEARCH FORM */}
                    
                    {/* Right navbar links */}
                    <ul className="navbar-nav ml-auto">
                        
                        
                        <li className="nav-item">
                            <a onClick={()=>this.logout()} href="a" className="nav-link" data-widget="control-sidebar" data-slide="true"   role="button">
                                <i  className="fas fa-sign-out-alt" />

                            </a>
                        </li>
                    </ul>
                </nav>
            

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ischeck: (a) => {
            dispatch({
                type:'ischeck',
                a
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
