import React, { Component } from 'react';
import ContentBox from '../../components/ContentBox';
import Input from '../../components/Input';
import { inputConfig } from './config';
import './style.css';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.renderInputs = this.renderInputs.bind(this);
  }

  renderInputs(inputs) {
    return inputs.map((input, index) => {
      return (
        <div key={index}>
          <Input
            key={input.key}
            type={input.type}
            label={input.label + ':'}
            sign={input.sign}
            toFixed={input.toFixed}
            step={input.step}
            position={input.position}
            value={input.defaultValue} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="wrapper">
        <h2>NumericTextBox</h2>
        <ContentBox
          title={'Add new product'} >
          {this.renderInputs(inputConfig.inputs)}
        </ContentBox>
      </div>
    );
  }
}

export default TextBox;
