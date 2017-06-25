import React, { PropTypes, Component } from 'react';
import './style.css';

const arrowUp = '\u25B2';
const arrowDown = '\u25BC';

class Arrows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            step: props.step
        };
    }

    render() {
        return <div className='arrow'>{this.props.label}</div>;
    }
}

export default Arrows;
