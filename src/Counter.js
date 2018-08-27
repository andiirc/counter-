import  React, { Component } from 'react'
import { observer } from 'mobx-react'
//import DevTools from 'mobx-react-devtools'

class Counter extends Component{

    increment = (e) =>  this.props.store.increment()

    decrement = (e) => this.props.store.decrement()

    render(){
        return (
          <div>
              {/*<DevTools/>*/}
               <button onClick={ this.increment } > + </button>
                <p>Counter: {  this.props.store.count }</p>
              <button onClick={ this.decrement } > - </button>
          </div>
        )
    }

}

export default observer(Counter)
