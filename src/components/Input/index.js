import React, { PropTypes, Component } from 'react';
import Arrows from '../../components/Arrows';
import './style.css';

const arrowUp = '\u25B2';
const arrowDown = '\u25BC';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            addSign: true,
            fixed: true,
            focused: false
        };
        this.initialValue = props.value;
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentWillReceiveProps({ value }) {
        this.initialValue = value;

        if (this.state.value !== value) {
            this.setState({
                value: value
            });
        }
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

    handleChange(e) {
        let newValue = e.target.value;
        this.setState({value: newValue});
    }

    handleKeyPress(e) {
        if (e.key === 'Enter'){
            // this.onSubmit(); - when needed
            this.onBlur();
        }
    }

    handleKeyDown(e) {
        if (e.keyCode === 38) {
            this.increment();
        } else if (e.keyCode === 40) {
            this.decrement();
        }
    }

    increment() {
        this.onFocus();
        let { step } = this.props;
        let { value } = this.state;
        this.setState({
            value: value + step
        });
    }

    decrement() {
        this.onFocus();
        let { step } = this.props;
        let { value } = this.state;
        this.setState({
            value: value - step
        });
    }

    render() {
        let { label, type, sign, position, toFixed, step } = this.props;
        let { addSign, fixed, focused } = this.state;

        let value = Number(this.state.value);
        if (type === 'percent' && focused) {
            value /= 100;
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
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress}
                          onKeyDown={this.handleKeyDown} />
                        <div className='arrowsWrap'>
                            <Arrows label={arrowUp} updateValue={this.increment} />
                            <Arrows label={arrowDown} updateValue={this.decrement} />
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
