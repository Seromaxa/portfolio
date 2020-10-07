import {combineReducers} from 'redux'
import langReducer from './langReducer'
import  canvasReduser from './canvasReducer'

export default combineReducers({langReducer, canvasReduser})
