import React, { Component } from 'react'
import LineItem from './LineItem'
import HariboLoader from './HariboLoader'
import HariboType from './HariboItem';

interface HariboListState {
  items: Array<HariboType>
}
interface HariboListProperties {
  
}

class HariboList extends Component<HariboListProperties, HariboListState> {

    constructor(props: HariboListProperties) {
      super(props)
      this.state = {
        items: []
      }
    }
  
    render() {
      return (this.state.items.map((item) => {
        return <LineItem key={item.id} name={item.name} />
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