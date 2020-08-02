import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route,  withRouter, Redirect} from "react-router-dom";
import Dashboard from './Dashboard';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import { connect } from 'react-redux';
class Chuyentrang extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
      
      
      
    render() {
        
        if(this.props.check === false){
          this.props.history.replace('/login')
          // return <Redirect to='/login' />
        }
        return (
            <div>
                  <Header></Header>
                  <Sidebar></Sidebar>
                  <Route path="/admin/" exact component={Dashboard} />
                  <Route path="/admin/Dashboard"  component={Dashboard} />
            </div>
                
                
                
            
          
          
          
        
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        check: state.check
    }
}
export default connect(mapStateToProps)(withRouter(Chuyentrang))
