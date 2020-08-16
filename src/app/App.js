import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className='nav'>
             <ul>
               <li>
                 <Link to="/">HOME</Link>
               </li>
               <li>
                 <Link to='/calculator'>在线计算器</Link>
               </li>
               <li>
                 <Link to='/timer'>在线倒计时器</Link>
               </li>
             </ul>
          </nav>
          <Switch>
             <Route exact path='/' component={Home}/>
             <Route exact path='/calculator' component={Calculator}/>
             <Route exact path='/timer' component={Timer}/> 
          </Switch>      
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
