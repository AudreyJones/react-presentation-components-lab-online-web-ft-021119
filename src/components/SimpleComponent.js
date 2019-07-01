// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends Component{
    // super()
    this.state = {
        mood: 'happy'
    }
    render(){
        return <div>Hello {this.state.mood || 'happy' }</div>;
        
    }
}