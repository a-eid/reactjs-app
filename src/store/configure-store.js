import { createStore , applyMiddleware} from 'redux'
import reducer from '../reducers/index'
import thunk from 'redux-thunk'
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore (initialState){
  return createStore(
    reducer , initialState,
    applyMiddleware(thunk)
    )
}
