import React from 'react';
import './calculator.less';
import {Link, BrowserRouter} from "react-router-dom";

class Calculator extends React.Component {
    state={
        count:'0'
      }

    changeValue(digit) {
        const {count} = this.state
        this.setState(
            {
                count: count==='0'?String(digit):count+digit
            }
        )
    }

    Clear() {
        this.setState(
            {
                count: '0'
            }
        )
    }

    Calculate() {
        const {count} = this.state
        this.setState(
            {
                count: eval(count)
            }
        )
    }
    
    render(){
        return(
            <div className='outer-container'>
                <h1>在线计算器</h1>
            <div className='container'>
                <div className='row'>
                    <input value={this.state.count}/>
                </div>
                <div className='row1'>
                    <button onClick={()=> this.changeValue('+')}>+</button>
                    <button onClick={()=> this.changeValue('-')}>-</button>
                    <button onClick={()=> this.changeValue('*')}>x</button>
                </div>
                <div className='row'>
                    <button onClick={()=> this.changeValue(7)}>7</button>
                    <button onClick={()=> this.changeValue(8)}>8</button>
                    <button onClick={()=> this.changeValue(9)}>9</button>
                </div>
                <div className='row'>
                    <button onClick={()=> this.changeValue(4)}>4</button>
                    <button onClick={()=> this.changeValue(5)}>5</button>
                    <button onClick={()=> this.changeValue(6)}>6</button>
                </div>
                <div className='row'>
                    <button onClick={()=> this.changeValue(1)}>1</button>
                    <button onClick={()=> this.changeValue(2)}>2</button>
                    <button onClick={()=> this.changeValue(3)}>3</button>
                </div>
                <div className='row'>
                    <button onClick={()=> this.changeValue(0)}>0</button>
                    <button className='clear' onClick={()=> this.Clear()}>Clear</button>
                    <button className='calculate' onClick={()=>this.Calculate()}>=</button>
                </div>
            </div>
            <Link to='/' className='back'>回到主页</Link>
            </div>
        );
    }
}
export default Calculator;
