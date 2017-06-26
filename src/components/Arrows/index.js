import React, { PropTypes, Component } from 'react';
import './style.css';

const arrowUp = '\u25B2';
const arrowDown = '\u25BC';

const Arrows = ({ label, updateValue }) => {
    return <div onClick={updateValue} className='arrow'>{label}</div>;
}

Arrows.propTypes = {
    label: PropTypes.string,
    updateValue: PropTypes.func
};

Arrows.defaultProps = {
    updateValue: () => {}
}

export default Arrows;
