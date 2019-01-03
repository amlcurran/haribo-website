import React, { Component } from 'react'
import LineItem from './LineItem'
import HariboLoader from './HariboLoader'

class HariboList extends Component {

    constructor(props) {
      super(props)
      this.state = {
        items: []
      }
    }
  
    render() {
      return (this.state.items.map((item) => {
        return <LineItem key={item} name={item} />
      }))
    }
  
    componentDidMount() {
        const loader = new HariboLoader() 
        loader.load()
            .then((results) => {
                this.setState({
                    items: results
                })
            })
      
    }
  }

  export default HariboList;