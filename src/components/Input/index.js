import React, { PropTypes, Component } from 'react';
import Arrows from '../../components/Arrows';
import './style.css';

const arrowUp = '\u25B2';
const arrowDown = '\u25BC';

class Input extends Component {
    constructor(props) {
        super(props);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.state = {
            value: props.value,
            addSign: true,
            fixed: true,
            focused: false
        };
    }

    onFocus() {
        this.setState({
            addSign: false,
            fixed: false,
            focused: true
        });
    }

    onBlur() {
        this.setState({
            addSign: true,
            fixed: true,
            focused: false
        });
    }

    handleChange() {
        return this.state.value;
    }

    updateValue(e) {
        debugger;
        
    }

    render() {
        let { label, type, sign, position, toFixed, step } = this.props;
        let { addSign, fixed, focused } = this.state;
        let value = this.state.value;
        if (type === 'percent' && !focused) {
            value *= 100;
        }
        value = fixed ? value.toFixed(toFixed) : value;
        if (addSign) {
            if (position === 'before') {
                value = sign + value;
            } else if (position === 'after') {
                value = value + ' ' + sign;
            }
        }

        return (
            <div>
                <div className='label'>
                    {label}
                </div>
                <div className='inputWrap'>
                    <div className='input'>
                        <input
                          type={type}
                          className={this.inputClassName}
                          value={value || ''}
                          step={step}
                          onFocus={this.onFocus}
                          onBlur={this.onBlur}
                          onChange={this.handleChange} />
                        <div className='arrowsWrap'>
                            <Arrows label={arrowUp} onClick={this.updateValue} />
                            <Arrows label={arrowDown} onClick={this.updateValue} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Input.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    label: PropTypes.node,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    readonly: PropTypes.bool,
    uppercaseLabel: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func
};

Input.defaultProps = {
    value: '',
    type: 'text',
    keyProp: '___no_key___',
    validators: [],
    readonly: false,
    boldLabel: false,
    onChange: () => {},
    onBlur: () => {},
    onClick: () => {}
}

export default Input;
