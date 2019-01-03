import React, { Component } from 'react';

interface LineItemProperties {
    name: string
    imageUrl: URL
}

class LineItem extends Component<LineItemProperties> {
    render() {
        return (
            <div>
                <img 
                    alt="Image of {this.props.name}" 
                    src={this.props.imageUrl.toString()} 
                    width="100px" 
                    height="100px"/>
                <p>Yummy {this.props.name}</p>
            </div>
        )
    }
}

export default LineItem;