import React, { Component } from 'react';

class LineItem extends Component {
    render() {
        return (<p>Yummy {this.props.name}</p>)
    }
}

export default LineItem;