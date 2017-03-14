/*
flux and redux .. similarities 
- unidirection data flow 
- action -> action cretors 
- stores flux(multi) redux(one)


redux 
action -> reducer -> store 


event emitters : 
  objects that can emit named event that calls 'listener' functions 

eg:
- net.server -> emit an event whenever a peer conects to it . 
- fs.ReadStream -> emits an event whenever a file is opoened  
- stream -> emits an event whenever there is data to be read . 
*/

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

let ee = new MyEmitter()
ee.on('eventx' , function(){
  fn1()
  fn2()
  fn3()
})

ee.emit('eventx') // will cause the above functions to be called 

// passing arguments and this to listeners . 
  // this inside the on function refers to the EventEmitter 

const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

let x = MyEmitter()

x.on('eventy' , function(a,b){
  console.log(a,b,this)
  // this here would print MyEmitter....
})

x.emit('a','b')

// with es6 arrow function the this no longer would refer to the event emitter 

x.on('eventz' , (a,b)=>{
  console.log(a,b,this)
  // this -> {}
})

x.emit('eventz' , 'a' , 'b') 



// async vs sync 
// - the listeners will be called syn and in order . to avoid race conditions and logic errors 
// - however they can be called asyc with Process.nextTick and setImmediate 

let emitter = new MyEmitter()
emitter.on('eventx' , function(x,y){
  setImmediate(()=>{
    console.log('this will happen async')
  })
})

emitter.emit('eventx')

// handling events only once . 
// - listeners will be called every time the corresponding event gets called .
let x = 0
emitter.on('x' , function(){
  console.log(x++)
})
emitter.emit('x') // 0 
emitter.emit('x') // 1 
emitter.emit('x') // 2 

// using once method instead of on will make sure that listeners gets called at most one time 
let y = 0 
emitter.once('y' , function(){
  console.log(y++)
})

emitter.emit('y') // 0 
emitter.emit('y') // ignored 
emitter.emit('y') // ignored 

// Error Events . 
  // 'error' event to be emitted default on error ..
  // if there is no listeners for the 'error' event and there is an error event 
  // emitted a stcktrace is printed and the node process is stopped .

  emitter.emit('error' , new Error('whoops')) // if there is no listeners , process will exit . 

  // to handle that you should listen for an uncaughtException .. 

  emitter.on('uncaughtException' , function(err){
    console.log(err)
  })

  emtter.emit('error' , new Error('whoops'))
  // logs 'whoops'

  // as a best practive listen should be added to the error event . 
  emitter.on('error' , function(err){
    console.log('whoops error occurred ....')
  })


//what is function composition . 
  // - the process of combining 2 or more functions to produce a new function , 
  // f(g(c(x))) -> evaluates from the inside out .. x then c(x) then g(c(x)) then f(g(c(x)))
  const slug = input => encodeURIComponent(
    input.split(' ').map(str => str.toLowerCase())
    .join('-')
  )

  // if there was a composing version 

  const slug = input => encodeURIComponent(
    join( '-' , split(' ', tolowercase( input ) ) )
  )

// react-redux lib to connect react-components to redux-store automatically . 
store.dispatch
store.subscribe
store.getState
replaceReducer(nextReducer)


// reducer 

function reducer(state , action){
  switch(action.type){
    case 'INC':
      return Object.assign({} , state , {
        counter: state.counter + 1
      })
    case 'DEC':
      return Object.assign({} , state , {
        counter: state.counter - 1
      })
    default
      return state 
  } // end switch statement ..
}


// all reduers all called when an action is dipatched . 

// Connect react to redux  react-redux 
container vs presentational 
react-redux
  -Provider -> component
  -connect  -> functio-n 
a chat with redux 


// passes the store as a prop to Provider component 
// makes the store available to all your react components automatically . 
<Provider store={this.props.store}>
  <App />{/* top level coponent*/} 
</Provider>


connect -> wraps our component so its available to the redux store . 



export default connect(
  mapStateToProps,  // state you want to expose to the component
  mapDispatchToProps // actions you want to expose to the component 
)(ComponentName)

// 3 ways to handle mapDispatchToProps 
1- ignore it and call actions diretly .. 
this.props.dispatch(loadCourses()) 

2- Manually wrap
function mapDispatchToProps(dispatch){
  return{
    loadCourses : ()=> dispatch(loadCourses())
  }
}
this.props.loadCourses()

3- use bindActionCreators

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions , dipatch)
  }
}
this.props.actions.loadCourses

// in more details . 



// if supporting adding + displaying ?? => not a good idea ? 

// thunks 
// every thunk will look something like this 
export function funName(){
  // every thunk returns a function with dispatch
  return function(dispatch){
    
  }
}







