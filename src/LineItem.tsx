import React, { Component } from 'react';
import Img from 'react-image';

interface LineItemProperties {
    name: string
    imageUrl: URL
}

class LineItem extends Component<LineItemProperties> {
    render() {
        return (
            <div className="LineItem-Container">
                <Img
                    alt="Image of {this.props.name}"
                    src={this.props.imageUrl.toString()}
                    className="LineItem-Image" />
                <p>Yummy {this.props.name}</p>
            </div>
        )
    }
}

export default LineItem;