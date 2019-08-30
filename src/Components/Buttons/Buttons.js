import React, { Component } from 'react';
import { add, minus } from '../../store/counter';
import { connect } from 'react-redux';


// connect the actions and state
@connect(
    state => ([
        { numOne: state.counter }
    ]),
    {
        add,
        minus,
    }
)

class BarDemo extends Component {

    render() {
        return (
             <div>
                {this.props.num}
                <br/>
                <button className='btn' onClick={() => this.props.add(20)}>+20</button>
                <button className='btn' onClick={() => this.props.add(10)}>+10</button>
                <button className='btn' onClick={() => this.props.minus(10)}>-10</button>
                <button className='btn' onClick={() => this.props.minus(20)}>-20</button>
             </div>
        );
    }
}

export default BarDemo;
