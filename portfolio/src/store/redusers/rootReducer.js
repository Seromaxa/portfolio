import {combineReducers} from 'redux'
import langReducer from './langReducer'
import portfolioRducer from './portfolioReducer'
import modalReducer from './modalReducer'


export default combineReducers({langReducer,portfolioRducer,modalReducer})
