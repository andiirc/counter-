import  React, { Component } from 'react'
import { observer } from 'mobx-react'

class Counter extends Component{

    increment = (e) =>  this.props.store.increment()

    decrement = (e) => this.props.store.decrement()

    render(){
        return (
          <div>
               <button onClick={ this.increment } > + </button>
                <p>Counter: {  this.props.store.count }</p>
              <button onClick={ this.decrement } > - </button>
          </div>
        )
    }

}

export default observer(Counter)
