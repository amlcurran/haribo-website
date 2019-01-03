import React, { Component } from 'react'
import LineItem from './LineItem'
import HariboLoader from './HariboLoader'

interface HariboListState {
  items: Array<any>
}

class HariboList extends Component<any, HariboListState> {

    constructor(props: any) {
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
            .then((results: any) => {
                this.setState({
                    items: results
                })
            })
      
    }
  }

  export default HariboList;