import React from 'react';
import { connect } from 'react-redux';
import './ProgressBar.css';

@connect(
    state => ({ num: state.counter })
)

// add progress bars
class ProgressBar extends React.Component {
    render() {
        return (
            <div className="progress-container">
            <div
              className="progress-bar"
              style={{width: `${this.props.num}%`}}
             ></div>
          </div>
        );
    }
}

export default ProgressBar;