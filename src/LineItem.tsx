import React, { Component } from 'react';

interface LineItemProperties {
    name: string
}

class LineItem extends Component<LineItemProperties> {
    render() {
        return (<p>Yummy {this.props.name}</p>)
    }
}

export default LineItem;