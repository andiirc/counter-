import { observable, action, decorate  } from 'mobx'

class StoreCounter {
      count = 0;

      increment(){
        this.count++
      }

      decrement(){
        if(this.count > 0)
          this.count--
       }
}

decorate(StoreCounter, {
   count: observable,
   increment: action.bound,
   decrement: action.bound
})

const store = new StoreCounter()
export default store
