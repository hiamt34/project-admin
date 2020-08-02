import React, { Component } from 'react';
import Login from './admin/Login';
import Forgotpassword from './admin/Forgotpassword';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chuyentrang from './admin/Chuyentrang';
import fire from './admin/Firebase/Firebase';
import { connect } from 'react-redux';
import Header from './admin/Component/Header'
import Sidebar from './admin/Component/Sidebar';
import Dashboard from './admin/Dashboard';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    }
  }
  componentDidMount() {
    this.authlistener()
    
  }
  authlistener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.setState({
          check: true
        });
        this.props.ischeck(this.state.check)
      }
      else{
        this.setState({
          check:false
          
        });
        this.props.ischeck(this.state.check)
      }

    })
  }

  render() {
    
    return (  
      <div>
        <Router>
          
        
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/login'  component={Login} />
            <Route path='/Forgotpassword' component={Forgotpassword} />
            <Route path='/admin' component={Chuyentrang} />
          </Switch>
          
        </Router>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App;