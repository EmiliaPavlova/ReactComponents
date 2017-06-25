import React, { PropTypes, Component } from 'react';
import './style.css';

class ContentBox extends Component {
    render() {
        return (
            <div className="contentWrap">
                <div className="titleWrap">
                    {this.props.title}
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ContentBox.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default ContentBox;
