import React from 'react';
import './home.less';
import {Link, BrowserRouter, Switch} from "react-router-dom";

class Home extends React.Component {
  render(){
    return (
      <div className="home">
        <div className='text-block'>在线实用工具</div>
        <div className='tools-block'>
           <div className='item'>
            <img src={require('../images/calculator.png')} />
            <Link to='/calculator'>计算器</Link>
           </div>
           <div className='item'>
            <img src={require('../images/timer.png')} />
            <Link to='/timer'>倒计时器</Link>
           </div>
        </div>     
      </div>
      );
  }
}

export default Home;